import React from 'react';
import { Table } from '@mantine/core';

const AggregateCropAverageTable = ({ data }) => {
    const rows = Object.entries(data).map(([crop, averages], index) => (
        <Table.Tr key={index}>
            <Table.Td>{crop}</Table.Td>
            <Table.Td>{averages.averageYield}</Table.Td>
            <Table.Td>{averages.averageArea}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table striped>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Crop</Table.Th>
                    <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
                    <Table.Th>Average Cultivation Area of the Crop between 1950-2020</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};

export default AggregateCropAverageTable;
