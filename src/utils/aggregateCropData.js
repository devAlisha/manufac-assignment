export default function aggregateCropData(data) {
    const aggregatedData = {};

    data.forEach(entry => {
        const year = entry.Year;

        if (!aggregatedData[year]) {
            aggregatedData[year] = {
                maxProductionCrop: { name: '', production: -Infinity },
                minProductionCrop: { name: '', production: Infinity }
            };
        }

        if (entry['Crop Production (UOM:t(Tonnes))'] !== "" &&
            entry['Crop Production (UOM:t(Tonnes))'] > aggregatedData[year].maxProductionCrop.production) {
            aggregatedData[year].maxProductionCrop = {
                name: entry['Crop Name'],
                production: entry['Crop Production (UOM:t(Tonnes))']
            };
        }

        if (entry['Crop Production (UOM:t(Tonnes))'] !== "" &&
            entry['Crop Production (UOM:t(Tonnes))'] < aggregatedData[year].minProductionCrop.production) {
            aggregatedData[year].minProductionCrop = {
                name: entry['Crop Name'],
                production: entry['Crop Production (UOM:t(Tonnes))']
            };
        }
    });

    return aggregatedData;
}

