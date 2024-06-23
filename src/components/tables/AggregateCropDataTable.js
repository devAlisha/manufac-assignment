import React from 'react';
import { Table } from '@mantine/core';

const AggregateCropDataTable = ({ data }) => {
    const rows = Object.entries(data).map(([year, crops], index) => (
        <Table.Tr key={index}>
            <Table.Td>{year}</Table.Td>
            <Table.Td>{crops.maxProductionCrop.name}</Table.Td>
            <Table.Td>{crops.minProductionCrop.name}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table striped>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Year</Table.Th>
                    <Table.Th>Crop with Maximum Production</Table.Th>
                    <Table.Th>Crop with Minimum Production</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};

export default AggregateCropDataTable;
