import React from 'react';

export const Modal = props => {
    const { show } = props;

    document.body.classList.remove('modal-active');

    let hideClass = 'opacity-0 pointer-events-none';
    if (show === true) {
        hideClass = '';
        document.body.classList.add('modal-active');
    }

    return (
        <div className={`${hideClass} w-full h-full fixed inset-0 z-40 transition-opacity duration-300`}>
            <div className="absolute w-full h-full bg-gray-900 bg-opacity-80 z-40"></div>
            {props.children}
        </div>
    );
};


export const ModalContent = props => {
    return (
        <div className="relative w-11/12 sm:w-3/5 xl:w-2/5 mx-auto h-auto px-6 py-6 bg-white my-10 z-50 rounded-lg">
            {props.children}
        </div>
    );
}


export const ModalHeader = props => {
    const { titleText, closeModalHandler } = props;

    return (
        <div className="mb-8 text-center">
            <h4 className="font-bold text-lg text-ib-one">
                {titleText}
            </h4>
            <button type="button"
                className="absolute right-0 top-0 mt-6 mr-6 text-gray-600 hover:text-gray-400 transition duration-300 outline-none focus:outline-none"
                onClick={closeModalHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};


export const ModalBody = props => {
    return (
        <div className="px-2 max-h-[30rem] sm:max-h-[12rem] md:max-h-[24rem] overflow-y-auto">
            {props.children}
        </div>
    );
};