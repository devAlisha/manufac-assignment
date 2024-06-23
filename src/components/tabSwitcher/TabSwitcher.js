import React from 'react';
import styles from './TabSwitcher.module.css';

const TABLE_NAMES = {
    AGGREGATE_CROP_DATA: 'Aggregate Crop Data Table',
    AGGREGATE_CROP_AVERAGE: 'Aggregate Crop Average Table',
    PROCESSED_DATA: 'Processed Data Table',
};

const TabSwitcher = ({ changeSelectedTable, selectedTable }) => {
    const tabNames = [
        TABLE_NAMES.AGGREGATE_CROP_DATA,
        TABLE_NAMES.AGGREGATE_CROP_AVERAGE,
        TABLE_NAMES.PROCESSED_DATA,
    ];

    return (
        <div className={styles.container}>
            {tabNames.map((tabName) => (
                <div
                    key={tabName}
                    className={`${styles.tabItem} ${selectedTable === tabName && styles.selected}`}
                    onClick={() => changeSelectedTable(tabName)}
                >
                    {tabName}
                </div>
            ))}
        </div>
    );
};

export default TabSwitcher;
