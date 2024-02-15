"use client"

import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

//Icon
import { icons } from "@/constants/icons";

//Component
import QueryPage from "../query-page/QueryPage";
import PushBack from "@/element/back-push/PushBach";

//Style
import styles from "./SearchPage.module.scss";

const SearchPage = ({ data, query }) => {

    const [input, setInput] = useState("")
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!input?.length) setInput(query)
        setClicked(false)
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
        <div className={styles.container}>
            <PushBack />
            <FormSearch input={input} changHandler={changHandler} submitHandler={submitHandler} clicked={clicked} />
            {
                data.length ? (
                    <QueryPage data={data} title={`Searched for ${query}`} />
                ) : (
                    <Spinner clicked={clicked}/>
                )
            }
            <Toaster />
        </div>
    );
};
export default SearchPage;

const FormSearch = ({ input, changHandler, submitHandler, clicked }) => {
    return (
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
            <button onClick={submitHandler}>search</button>
        </form>
    )
}

const Spinner = ({clicked}) => {
    return (
        <div
            style={ clicked ? { animation: "zoomOut forwards .8s" } : { animation: "zoomIn forwards .8s" } }
            className={styles.spinner}>
            <RingLoader
                color="#009BFF"
                speedMultiplier={.6}
                size={180}
            />
            <h2>What do you want ?</h2>
        </div>
    )
}