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

export const totalCounter = (items) => {
    if (!items?.length) return { itemsCounter: 0, total: 0, payable: 0, totalDiscount: 0 }

    const itemsCounter = items.reduce((acc, cur) => acc + cur.qty, 0);
    const total = items.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
    const totalDiscount = items.reduce((acc, cur) => acc + ((cur.discountPercentage * +cur.price / 100) * cur.qty), 0);
    const payable = total - totalDiscount;

    return { itemsCounter, total, payable, totalDiscount }
}

export const filterFetch = (data = [], dig1, dig2) => {
    const newData = [...data];
    const slicer = newData.slice(dig1, dig2)
    return slicer
}

// export const setLocalStorage = (key, initial) => {
    // if ( !key || !initial ) return
    
    // let value;
    
    // if (!window.localStorage.getItem(key)) {
    //     value = initial
    // } else {
    //     value = JSON.parse(window.localStorage.getItem(key));
    // }
    
    // window.localStorage.setItem(key, JSON.stringify(initial));

    // return  JSON.parse(localStorage.getItem(key))
// }