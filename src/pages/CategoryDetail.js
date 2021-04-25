import React, { useState } from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import { Table, Tbody, Td, Th, Thead, Tr } from '../components/Table';
import TableButton from '../components/TableButton';
import Button from '../components/Button';
import { CurrentLocation, Link, PathWrapper, Separator } from '../components/Path';
import { Modal, ModalBody, ModalContent, ModalHeader } from '../components/Modal';

function CategoryDetail(props) {
    const [ showModal, setShowModal ] = useState(false);

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
                    <h1 className="text-xl">Kategori : </h1>
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
                                <Tr>
                                    <Td>1</Td>
                                    <Td>
                                        Kabel Data Micro USB JOYSEUS 100CM Nylon Black / Red
                                    </Td>
                                    <Td>
                                        Baru
                                    </Td>
                                    <Td>
                                        Rp 20.000,-
                                    </Td>
                                    <Td>
                                        87
                                    </Td>
                                    <Td>
                                        <TableButton color="default" onClick={() => toggleModalHandler('open')}>
                                            Detail
                                        </TableButton>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>
                                        Kabel Data Micro USB JOYSEUS 100CM Nylon Black / Red
                                    </Td>
                                    <Td>
                                        Baru
                                    </Td>
                                    <Td>
                                        Rp 20.000,-
                                    </Td>
                                    <Td>
                                        87
                                    </Td>
                                    <Td>
                                        <TableButton color="default" onClick={() => toggleModalHandler('open')}>
                                            Detail
                                        </TableButton>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>
                                        Kabel Data Micro USB JOYSEUS 100CM Nylon Black / Red
                                    </Td>
                                    <Td>
                                        Baru
                                    </Td>
                                    <Td>
                                        Rp 20.000,-
                                    </Td>
                                    <Td>
                                        87
                                    </Td>
                                    <Td>
                                        <TableButton color="default" onClick={() => toggleModalHandler('open')}>
                                            Detail
                                        </TableButton>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                    <hr className="border border-solid border-r-0 border-b-0 border-l-0 border-gray-200" />
                    <div className="text-center my-5">
                        <Button color="blue">
                            Muat lainnya
                        </Button>
                    </div>
                </CardBody>
            </Card>

            <Modal show={showModal}>
                <ModalContent>
                    <ModalHeader titleText="Detail Produk" closeModalHandler={() => toggleModalHandler('close')} />
                    <ModalBody>
                        <div className="mb-4">
                            <h4 className="font-bold">
                                Nama
                            </h4>
                            <p className="text-gray-600">
                                Kabel Data
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-bold">
                                Deskripsi
                            </h4>
                            <p className="text-gray-600">
                                Kabel Data Cable Data Micro USB JOYSEUS 100 CM Nylon Braided Black / Red - KB0005/KB0005-AA\\nJOYSEUS Micro USB Cable 1M Nylon Braided Data Sync 2A Cable for Samsung Xiaomi Redmi Android Mobile Phone Cable Black\\n\\n-Universal compatibility (Support all Micro Devices for charging and data sync)\\n-Support Charging and transferring data\\n-High Quality Material ( 22 AWG Pure Copper Core Charge Speed Up to 30%)\\n-Superior Durability (Premium Leather Protect Wire Cores and Resists Kinks and Tangles)\\n-1 Meter
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="flex flex-row">
                                <div className="w-1/2 mr-4">
                                    <h4 className="font-bold">
                                        Kondisi
                                    </h4>
                                    <p className="text-gray-600">
                                        Baru
                                    </p>
                                </div>
                                <div className="w-1/2 ml-4">
                                    <h4 className="font-bold">
                                        Berat
                                    </h4>
                                    <p className="text-gray-600">
                                        200 gram
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex flex-row">
                                <div className="w-1/2 mr-4">
                                    <h4 className="font-bold">
                                        Harga
                                    </h4>
                                    <p className="text-gray-600">
                                        Rp 20.000,-
                                    </p>
                                </div>
                                <div className="w-1/2 ml-4">
                                    <h4 className="font-bold">
                                        Stok
                                    </h4>
                                    <p className="text-gray-600">
                                        22
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Varian</Th>
                                        <Th>Harga</Th>
                                        <Th>Stok</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>1 Meter</Td>
                                        <Td>Rp 12000</Td>
                                        <Td>5</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>2 Meter</Td>
                                        <Td>Rp 20000</Td>
                                        <Td>51</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CategoryDetail;