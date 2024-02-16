"use client"

import { useEffect, useState } from "react";

const useLocalStorage = (key ,initial) => {

    const [value ,setValue] = useState(() => {
        const localStorage = window.localStorage.getItem(key);
        return localStorage ? JSON.parse(localStorage) : initial;
    });

    useEffect(() => {
        window.localStorage.setItem(key ,JSON.stringify(value))
    },[value])

    return [ value ,setValue ]
};

export default useLocalStorage;