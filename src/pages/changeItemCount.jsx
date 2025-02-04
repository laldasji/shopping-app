function increaseCount(element, itemsAdded, setItemsAdded) {
    const index = itemsAdded.findIndex(item => item.id === element.id);
    if (index === -1) {
        const newItem = {
            id: element.id,
            count: 1
        }
        const newItemsAdded = [...itemsAdded, newItem];
        setItemsAdded(newItemsAdded);
    } else {
        const newItem = {
            id: itemsAdded[index].id,
            count: itemsAdded[index].count + 1
        };
        const newItemsAdded = [...itemsAdded.slice(0, index), newItem, ...itemsAdded.slice(index + 1)];
        setItemsAdded(newItemsAdded);
    }
}

function decreaseCount(element, itemsAdded, setItemsAdded) {
    const index = itemsAdded.findIndex(item => item.id === element.id);
    if (index === -1) return;
    if (itemsAdded[index].count === 1) {
        const newItemsAdded = [...itemsAdded.slice(0, index), ...itemsAdded.slice(index + 1)];
        setItemsAdded(newItemsAdded);
    } else {
        const newItem = {
            id: itemsAdded[index].id,
            count: itemsAdded[index].count - 1
        }
        const newItemsAdded = [...itemsAdded.slice(0, index), newItem, ...itemsAdded.slice(index + 1)];
        setItemsAdded(newItemsAdded);
    }
}

export { increaseCount, decreaseCount };