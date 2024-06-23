export function replaceMissingValues(data) {
    for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
            if (data[i][key] === "") {
                data[i][key] = 0;
            }
        }
    }
    return data;
}