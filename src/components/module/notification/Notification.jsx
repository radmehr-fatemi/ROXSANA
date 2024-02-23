"use client"

import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

//Action
import { CHECKOUT, REMOVE_ITEM } from "@/redux/features/cart/cartSlice";

//Context
export const notificationContext = createContext();

//Style
import styles from "./Notification.module.scss";

const NotificationContext = ({ children }) => {

    const [show, setShow] = useState(false);
    const [options, setOptions] = useState({
        model: "checkout",
        data: {},
        title: "Are you sure ?",
        buttonCancel: "cancel",
        buttonOk: "Ok",
        path: "/login",
    });

    const dispatch = useDispatch()
    const router = useRouter()

    const okHandler = async (boolean) => {
        setShow(false)
        if (options.model === "checkout") {
            if (boolean) {
                dispatch(CHECKOUT())
                toast.success("payment was successfully")
            }
        }

        if (options.model === "remove") {
            if (boolean) dispatch(REMOVE_ITEM(options.data))
        }

        if (options.model === "logout") {
            if (boolean) await signOut()
        }

        if ( options.model === "router" ) {
            if (boolean) router.push("/login") 
        }
    }


    const notification = ({
        model = options.model,
        data = options.data,
        title = options.title,
        buttonCancel = options.buttonCancel,
        buttonOk = options.buttonOk,
        path = options.path
    }) => {
        setShow(true)
        setOptions({
            ...options,
            model,
            data,
            title,
            buttonCancel,
            buttonOk,
            path,
        })
    }

    if (show) {
        window.scroll(stop)
    }

    const { title, buttonCancel, buttonOk } = options;

    return (
        <notificationContext.Provider value={notification} >
            {children}
            <AnimatePresence>
                {
                    show &&
                    <motion.div
                        className={styles.container}
                        onClick={() => setShow(false)}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ times: .2 }}
                    >
                        <div
                            className={styles.notification}>
                            <p> {title} </p>

                            <div className={styles.button}>
                                <button className={styles.buttonOk} onClick={() => okHandler(true)} > {buttonOk} </button>
                                <br />
                                <button className={styles.buttonCancel} onClick={() => okHandler(false)} > {buttonCancel} </button>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </notificationContext.Provider>
    );
};

export default NotificationContext;