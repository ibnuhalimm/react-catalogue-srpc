import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import TableButton from '../components/TableButton';
import TableButtonLink from '../components/TableButtonLink';
import Button from '../components/Button';
import { Table, Tbody, Td, Th, Thead, Tr } from '../components/Table';
import { CurrentLocation, Link, PathWrapper, Separator } from '../components/Path';
import { Modal, ModalBody, ModalContent, ModalHeader } from '../components/Modal';
import '../services/CategoryService';
import CategoryService from '../services/CategoryService';
import { FormGroup, InputText, Label } from '../components/Form';
import { NavLink } from 'react-router-dom';
import { PageTitleContext } from '../context/pageTitleContext';
import AppLayout from '../components/AppLayout';
import { UNAUTHORIZED } from '../constant/StatusCode';


function Category(props) {
    const [ categories, setCategories ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ showFormModal, setShowFormModal ] = useState(false);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);

    const { setPageTitle } = useContext(PageTitleContext);

    const initialCategory = {
        id: 0,
        name: ''
    };

    const [ mode, setMode ] = useState('create');
    const [ modalFormTitle, setModalFormTitle ] = useState('Tambah Kategori');
    const [ category, setCategory ] = useState(initialCategory);


    useEffect(() => {
        setPageTitle('Kategori Produk');
        _fetchCategories()
    });


    const _fetchCategories = async () => {
        try {
            const resultData = await CategoryService.getAllCategories();

            setCategories([]);
            setIsLoaded(true);
            setCategories(resultData.data);

        } catch (error) {
            if (error.code === UNAUTHORIZED) {
                props.history.push('/login');
            }

            console.log(error);
        }
    };


    const addCategoryHandler = () => {
        setMode('create');
        setModalFormTitle('Tambah Kategori');

        setShowFormModal(true);
    }


    const cancelFormModalHandler = () => {
        setCategory(initialCategory);
        setShowFormModal(false);
    };


    const saveFormModalHandler = async () => {
        if (mode === 'create') {
            try {
                await CategoryService.storeNewCategory(category);
                _fetchCategories();
                setShowFormModal(false);
                setCategory(initialCategory);

            } catch (error) {
                alert(error);
            }
        }


        if (mode === 'edit') {
            try {
                await CategoryService.updateCategory(category.id, category);
                _fetchCategories();
                setShowFormModal(false);
                setCategory(initialCategory);

            } catch (error) {
                alert(error);
            }
        }
    };


    const onChangeHandler = (event) => {
        setCategory({
            ...category,
            [event.target.name]: event.target.value
        });
    };


    const editCategoryHandler = async (id) => {
        try {
            const result = await CategoryService.getSingleCategory(id);
            setCategory(result);

            setMode('edit');
            setModalFormTitle('Edit Kategori');
            setShowFormModal(true);

        } catch (error) {
            alert(error);
        }
    }


    const deleteCategoryHandler = (id) => {
        setCategory({
            id: id,
            name: ''
        });

        setShowDeleteModal(true);
    }


    const cancelDeleteCategoryHandler = () => {
        setCategory(initialCategory);
        setShowDeleteModal(false);
    }


    const confirmDeleteCategoryHandler = async () => {
        try {
            await CategoryService.deleteCategory(category.id);
            _fetchCategories();
            setCategory(initialCategory);
            setShowDeleteModal(false);

        } catch (error) {
            alert(error);
        }
    }


    return (
        <AppLayout>
            <PathWrapper>
                <Link to="/">Beranda</Link>
                <Separator></Separator>
                <CurrentLocation>Kategori Produk</CurrentLocation>
            </PathWrapper>
            <Card>
                <CardHeader>
                    <h1 className="text-xl">Kategori Produk</h1>
                </CardHeader>
                <CardBody>
                    <div className="px-5 mb-5">
                        <Button color="default"
                            onClick={() => addCategoryHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                                <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span className="ml-2">Tambah Kategori</span>
                        </Button>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <Table>
                            <Thead className="border border-l-0 border-r-0 border-solid border-gray-200">
                                <Tr>
                                    <Th className="px-5 py-3 text-left w-10">#</Th>
                                    <Th className="px-5 py-3 text-left">Kategori</Th>
                                    <Th className="px-5 py-3 text-left w-80">###</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    isLoaded
                                    ?   categories.map((category, key) => {
                                            return (
                                                <Tr key={key}>
                                                    <Td className="px-5 py-3">
                                                        {key + 1}
                                                    </Td>
                                                    <Td className="px-5 py-3">
                                                        <NavLink to={`${category.id}/products`} className="hover:underline">
                                                            {category.name}
                                                        </NavLink>
                                                    </Td>
                                                    <Td className="px-5 py-3">
                                                        <TableButtonLink
                                                            to={`${category.id}/products`}
                                                            color="blue">
                                                            Produk
                                                        </TableButtonLink>
                                                        <TableButton
                                                            color="green"
                                                            onClick={() => editCategoryHandler(category.id)}>
                                                            Edit
                                                        </TableButton>
                                                        <TableButton
                                                            color="red"
                                                            onClick={() => deleteCategoryHandler(category.id)}>
                                                            Hapus
                                                        </TableButton>
                                                    </Td>
                                                </Tr>
                                            )
                                        })
                                    :   <Tr>
                                            <Td colspan="3" className="text-center">
                                                <span className="text-blue-500">Memuat data...</span>
                                            </Td>
                                        </Tr>
                                }
                            </Tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>


            <Modal show={showFormModal}>
                <ModalContent>
                    <ModalHeader titleText={modalFormTitle} closeModalHandler={cancelFormModalHandler} />
                    <ModalBody>
                        <div>
                            <FormGroup>
                                <Label>Nama Kategori</Label>
                                <InputText
                                    name="name"
                                    onChange={onChangeHandler}
                                    value={category.name} />
                            </FormGroup>
                        </div>
                        <div className="text-center">
                            <Button
                                color="gray"
                                onClick={cancelFormModalHandler}>
                                Batal
                            </Button>
                            <Button
                                color="default"
                                onClick={saveFormModalHandler}>
                                Simpan
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Modal show={showDeleteModal}>
                <ModalContent>
                    <ModalHeader titleText="Hapus Kategori" />
                    <ModalBody>
                        <div className="mb-5 text-center">
                            Apakah Anda yakin ingin menghapus kategori ini?
                        </div>
                        <div className="text-center">
                            <Button
                                color="gray"
                                onClick={cancelDeleteCategoryHandler}>
                                Tidak
                            </Button>
                            <Button
                                color="red"
                                onClick={confirmDeleteCategoryHandler}>
                                Ya, Hapus
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </AppLayout>
    );
}

export default Category;