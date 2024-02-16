"use client"

import { useEffect, useState } from "react";

const UseLocalStorage = (key ,initial) => {

    const [value ,setValue] = useState(() => {
        const localStorage = localStorage.getItem(key);
        return localStorage ? JSON.parse(localStorage) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key ,JSON.stringify(value))
    },[value])

    return [ setValue ]
};

export default UseLocalStorage;