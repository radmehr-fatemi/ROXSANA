"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

//Icon
import { icons } from "@/constants/icons";

const Searcher = ({ styles }) => {

    const [input, setInput] = useState("")
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    const query = useSearchParams().get("q");

    useEffect(() => {
        if (!input?.length && query) setInput(query)
        setClicked(!clicked)
    }, [query])

    const changHandler = ({ target }) => {
        setInput(target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!input?.trim().length) return toast.error("First please enter something")
        setClicked(true)
        router.push(`/products/search?q=${input}`)
    }


    return (
        <>
            <form
                onSubmit={submitHandler}
                style={{ animation: "zoomIn .3s" }}
                className={styles.form}
            >
                <span
                    style={clicked ? { animation: "bounceInDown 1s" } : { animation: "bounceInUp 1s" }}
                >
                    {icons.search}
                </span>

                <input
                    value={input}
                    onChange={changHandler}
                    type="text"
                    placeholder="search..."
                />
            </form>
        </>
    )
};

export default Searcher;