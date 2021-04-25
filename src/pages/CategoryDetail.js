import React from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import { Table, Tbody, Td, Th, Thead, Tr } from '../components/Table';
import TableButton from '../components/TableButton';
import Button from '../components/Button';
import { CurrentLocation, Link, PathWrapper, Separator } from '../components/Path';

function CategoryDetail(props) {
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
                                <Th>Nama Produk</Th>
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
                                    <TableButton color="default">
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
                                    <TableButton color="default">
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
                                    <TableButton color="default">
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
        </>
    );
}

export default CategoryDetail;