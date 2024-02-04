export const shortHandler = (text, dig) => {
    const splited = text.split("");
    const slicer = splited.slice(0, dig)
    let newText = slicer;

    if (text.length > dig) return newText.join("") + ".."
    return newText.join("")
}

export const discountCounter = (price, dis) => {
    const newPrice = (100 - +dis) * +price / 100;
    return parseInt(newPrice)
}

export const timeCounter = (doing, time, { off }) => {
    const timeout = setTimeout(() => doing, time);
    if (off) clearInterval(timeout)
}

export const findItem = (items, id) => {
    if (!items.some(i => id === i.id)) return null

    const index = items.findIndex(i => i.id === id);
    const found = items[index];
    return found
}