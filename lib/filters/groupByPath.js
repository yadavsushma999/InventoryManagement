function getValueByPath(obj, path) {
    try {
        return path.split(".").reduce((acc, key) => acc?.[key], obj);
    } catch {
        return undefined;
    }
}

function groupByPath(data, path, sortOrder = "asc") {
    const groups = data.reduce((acc, item) => {
        const key = getValueByPath(item, path) ?? "Undefined";
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    const sortedGroups = Object.entries(groups).sort(([a], [b]) => {
        const aDate = Date.parse(a);
        const bDate = Date.parse(b);

        if (!isNaN(aDate) && !isNaN(bDate)) {
            return sortOrder === "desc" ? bDate - aDate : aDate - bDate;
        }

        const aNum = Number(a);
        const bNum = Number(b);
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortOrder === "desc" ? bNum - aNum : aNum - bNum;
        }

        return sortOrder === "desc" ? b.localeCompare(a) : a.localeCompare(b);
    });

    return Object.fromEntries(sortedGroups);
}

module.exports = { groupByPath, getValueByPath };
