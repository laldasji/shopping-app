function increaseCount(element, itemsAdded, setItemsAdded, cartValue, setCartValue) {
    console.log(element);
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
    const newPrice = Number(Number(cartValue) + Number(element.price)).toFixed(2);
    setCartValue(newPrice);
}

function decreaseCount(element, itemsAdded, setItemsAdded, cartValue, setCartValue) {
    console.log(element);
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
    const newPrice = Number(Number(cartValue) - Number(element.price)).toFixed(2);
    setCartValue(newPrice);
}

export { increaseCount, decreaseCount };