import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import { Table, Tbody, Td, Th, Thead, Tr } from '../components/Table';
import TableButton from '../components/TableButton';
import { CurrentLocation, Link, PathWrapper, Separator } from '../components/Path';
import { Modal, ModalBody, ModalContent, ModalHeader } from '../components/Modal';
import { useParams } from 'react-router';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';
import { PageTitleContext } from '../context/pageTitleContext';

function CategoryDetail(props) {
    const routeParams = useParams();
    const [ showModal, setShowModal ] = useState(false);
    const [ categoryName, setCategoryName ] = useState('');
    const [ products, setProducts ] = useState([]);
    const [ product, setProduct ] = useState({});

    const { setPageTitle } = useContext(PageTitleContext);

    useEffect(() => {
        _fetchCategory();
    });


    const _fetchCategory = async () => {
        try {
            const result = await CategoryService.getSingleCategoryWithProducts(routeParams.categoryId);
            setCategoryName(result.categoryName);
            setProducts(result.products);

            setPageTitle(`Kategori Produk: ${result.categoryName}`);

        } catch (error) {
            alert(error);

        }
    }


    const detailProductHandler = async (id) => {
        try {
            const result = await ProductService.getSingleProduct(id);
            setProduct(result);
            setShowModal(true);

        } catch (error) {
            alert(error);
        }
    }


    const toggleModalHandler = status => {
        if (status === 'open') {
            setShowModal(true);
        }
        else {
            setShowModal(false);
        }
    }


    return (
        <>
            <PathWrapper>
                <Link to="/">Beranda</Link>
                <Separator></Separator>
                <Link to="/">Kategori Produk</Link>
                <Separator></Separator>
                <CurrentLocation>Produk</CurrentLocation>
            </PathWrapper>
            <Card>
                <CardHeader>
                    <h1 className="text-xl">Kategori : {categoryName}</h1>
                </CardHeader>
                <CardBody>
                    <div className="px-5 mb-3">
                        <h1 className="text-base">Data Produk</h1>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th className="w-10">#</Th>
                                    <Th className="w-96">Nama Produk</Th>
                                    <Th className="w-24">Kondisi</Th>
                                    <Th className="w-44">Harga</Th>
                                    <Th className="w-24">Stok</Th>
                                    <Th className="w-44">###</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.map((product, key) => {
                                    return (
                                        <Tr key={key}>
                                            <Td>
                                                {key+1}
                                            </Td>
                                            <Td>
                                                {product.name}
                                            </Td>
                                            <Td>
                                                {product.is_new === 1 ? 'Baru' : 'Bekas'}
                                            </Td>
                                            <Td>
                                                Rp {product.price_stock.price},-
                                            </Td>
                                            <Td>
                                                {product.price_stock.stock}
                                            </Td>
                                            <Td>
                                                <TableButton
                                                    color="default"
                                                    onClick={() => detailProductHandler(product.id)}>
                                                    Detail
                                                </TableButton>
                                            </Td>
                                        </Tr>
                                    );
                                }) }
                            </Tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>


            {
                product
                ?   <Modal show={showModal}>
                        <ModalContent>
                            <ModalHeader titleText="Detail Produk" closeModalHandler={() => toggleModalHandler('close')} />
                            <ModalBody>
                                <div className="mb-4">
                                    <h4 className="font-bold">
                                        Nama
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {product.name}
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-bold">
                                        Deskripsi
                                    </h4>
                                    <div className="text-gray-600 dark:text-gray-300">
                                        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex flex-row">
                                        <div className="w-1/2 mr-4">
                                            <h4 className="font-bold">
                                                Kondisi
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {product.is_new ? 'Baru' : 'Bekas'}
                                            </p>
                                        </div>
                                        <div className="w-1/2 ml-4">
                                            <h4 className="font-bold">
                                                Berat
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {product.weight} gram
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {
                                    product.price_stock
                                    ?   <div className="mb-4">
                                            <div className="flex flex-row">
                                                <div className="w-1/2 mr-4">
                                                    <h4 className="font-bold">
                                                        Harga
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        Rp {product.price_stock.price !== undefined ? product.price_stock.price : 0},-
                                                    </p>
                                                </div>
                                                <div className="w-1/2 ml-4">
                                                    <h4 className="font-bold">
                                                        Stok
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {product.price_stock.stock !== undefined ? product.price_stock.stock : 0}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    :   null
                                }
                                {
                                    product.variants
                                    ?   <div className="mb-4">
                                            <Table>
                                                <Thead>
                                                    <Tr>
                                                        <Th>Varian</Th>
                                                        <Th>Harga</Th>
                                                        <Th>Stok</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {product.variants.map((variant, key) => {
                                                        return (
                                                            <Tr key={key}>
                                                                <Td>{variant.name}</Td>
                                                                <Td>Rp {variant.price},-</Td>
                                                                <Td>{variant.stock}</Td>
                                                            </Tr>
                                                        );
                                                    })}
                                                </Tbody>
                                            </Table>
                                        </div>
                                    :   null
                                }
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                :   null
            }
        </>
    );
}

export default CategoryDetail;