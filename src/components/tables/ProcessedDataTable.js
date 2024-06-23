import React from 'react';
import { Table } from '@mantine/core';

const headers = [
    { key: 'Country', label: 'Country' },
    { key: 'Year', label: 'Year' },
    { key: 'Crop Name', label: 'Crop Name' },
    { key: 'Crop Production (UOM:t(Tonnes))', label: 'Crop Production (t)' },
    { key: 'Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))', label: 'Yield (Kg/Ha)' },
    { key: 'Area Under Cultivation (UOM:Ha(Hectares))', label: 'Area (Ha)' },
];

const ProcessedDataTable = ({ data }) => {
    const rows = data.map((item, index) => (
        <Table.Tr key={index}>
            {headers.map((header) => (
                <Table.Td key={header.key}>{item[header.key]}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <Table striped>
            <Table.Thead>
                <Table.Tr>
                    {headers.map((header) => (
                        <Table.Th key={header.key}>{header.label}</Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};

export default ProcessedDataTable;
