import React, { createContext, useContext, useState } from 'react';

const ProcessedDataContext = createContext();

export const ProcessedDataProvider = ({ children, initialData }) => {
    const [processedData, setProcessedData] = useState(initialData);

    return (
        <ProcessedDataContext.Provider value={{ processedData, setProcessedData }}>
            {children}
        </ProcessedDataContext.Provider>
    );
};

export const useProcessedData = () => {
    const context = useContext(ProcessedDataContext);
    if (!context) {
        throw new Error('useProcessedData must be used within a ProcessedDataProvider');
    }
    return context;
};
