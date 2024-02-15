"use client"

import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";

//Icon
import { icons } from "@/constants/icons";

//Component
import QueryPage from "../query-page/QueryPage";

//Style
import styles from "./SearchPage.module.scss";

const SearchPage = ({ data ,query }) => {
    
    const [input, setInput] = useState("")
    const router = useRouter();

    useEffect(() => {
        if (!input.length) setInput(query)
    },[])
    
    const changHandler = ({ target }) => {
        setInput(target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/products/search?q=${input}`)
    }

    return (
        <div className={ styles.container }>
            <FormSearch input={input} changHandler={changHandler} submitHandler={submitHandler} />
            
            {
                data.length ? (
                    <QueryPage data={data} title={`Search for ${input}`} />
                ) : (
                    <Spinner />
                )
            }
        </div>
    );
};
export default SearchPage;

const FormSearch = ({ input, changHandler, submitHandler }) => {
    return (
        <form
            onSubmit={submitHandler}
            style={{ animation: "zoomIn .3s" }}
        className={styles.form}
        >
            {icons.search}
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

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <RingLoader
                color="blue"
                speedMultiplier={.8}
                size={140}
            />
        </div>
    )
}