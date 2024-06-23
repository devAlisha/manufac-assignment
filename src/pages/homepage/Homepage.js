import React, { useState } from 'react';
import TabSwitcher from '../../components/tabSwitcher/TabSwitcher';
import styles from './Homepage.module.css';
import { useProcessedData } from '../../contexts/ProcessedDataContext';
import aggregateCropData from '../../utils/aggregateCropData';
import aggregateCropAverages from '../../utils/aggregateCropAverages';
import AggregateCropDataTable from '../../components/tables/AggregateCropDataTable';
import AggregateCropAverageTable from '../../components/tables/AggregateCropAverageTable';
import ProcessedDataTable from '../../components/tables/ProcessedDataTable';

const TABLE_NAMES = {
    AGGREGATE_CROP_DATA: 'Aggregate Crop Data Table',
    AGGREGATE_CROP_AVERAGE: 'Aggregate Crop Average Table',
    PROCESSED_DATA: 'Processed Data Table',
};

const Homepage = () => {
    const { processedData } = useProcessedData();
    const [selectedTable, setSelectedTable] = useState(TABLE_NAMES.AGGREGATE_CROP_AVERAGE);

    const changeSelectedTable = (value) => {
        setSelectedTable(value);
    };

    const renderTable = () => {
        switch (selectedTable) {
            case TABLE_NAMES.AGGREGATE_CROP_DATA:
                return <AggregateCropDataTable data={aggregateCropData(processedData)} />;
            case TABLE_NAMES.AGGREGATE_CROP_AVERAGE:
                return <AggregateCropAverageTable data={aggregateCropAverages(processedData)} />;
            case TABLE_NAMES.PROCESSED_DATA:
                return <ProcessedDataTable data={processedData} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <TabSwitcher changeSelectedTable={changeSelectedTable} selectedTable={selectedTable} />
            </div>
            <div>{renderTable()}</div>
        </div>
    );
};

export default Homepage;
