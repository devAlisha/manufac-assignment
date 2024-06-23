export default function aggregateCropAverages(data) {
    const cropStats = {};

    data.forEach(entry => {
        const cropName = entry['Crop Name'];
        const yieldPerHectare = parseFloat(entry['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']);
        const areaUnderCultivation = parseFloat(entry['Area Under Cultivation (UOM:Ha(Hectares))']);

        if (!cropStats[cropName]) {
            cropStats[cropName] = {
                totalYield: 0,
                totalArea: 0,
                count: 0
            };
        }

        if (!isNaN(yieldPerHectare)) {
            cropStats[cropName].totalYield += yieldPerHectare;
        }
        if (!isNaN(areaUnderCultivation)) {
            cropStats[cropName].totalArea += areaUnderCultivation;
        }

        cropStats[cropName].count++;
    });

    const averages = {};
    for (const cropName in cropStats) {
        const totalYield = cropStats[cropName].totalYield;
        const totalArea = cropStats[cropName].totalArea;
        const count = cropStats[cropName].count;

        const averageYield = totalYield / count;
        const averageArea = totalArea / count;

        const roundedAverageYield = averageYield.toFixed(3);
        const roundedAverageArea = averageArea.toFixed(3);

        averages[cropName] = {
            averageYield: parseFloat(roundedAverageYield),
            averageArea: parseFloat(roundedAverageArea)
        };
    }

    return averages;
}
