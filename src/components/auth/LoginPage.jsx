"use client"

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

//Style
import styles from "./RegisterPage.module.scss";
import InfinitySpinner from "../module/spinner/infinity-spinner/InfinitySpinner";
import { signIn } from "next-auth/react";

const LoginPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const changHandler = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const { email ,password } = form;
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        // if ( !password || !email ) return toast.error("Please enter first");
        // if ( password.length < 6 ) return toast.error("Password needs to be more than 6 ");
        // if ( !regex.test(email) ) return toast.error("Email is invalid");
        
        setLoading(true)

        const data = await signIn("credentials" ,{
            email,
            password,
            redirect:false
        })

        setLoading(false)
        
        if ( data.ok ) {
            toast.success("Login was successfully")
            setTimeout(() => router.replace("/") ,400)
        }
        
        if ( data.error ) return toast.error(data.error);
    }

    return (
        <div
            className={styles.container}
            style={{ animation: "shakeY 50s infinite" }}
        >
            <form
                className={styles.form}
                onSubmit={submitHandler}>

                <h2
                    style={{ animation: "fadeInUp .8s .2s" }}
                >Login</h2>

                <div className={styles.field}>
                    <label
                        style={{ animation: "fadeInLeft .8s .4s" }}
                        htmlFor="email"> Email </label>
                    <input
                        className={styles.input}
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={changHandler}
                        placeholder="email"
                        id="email"
                    />
                </div>

                <div className={styles.field}>
                    <label
                        style={{ animation: "fadeInLeft .8s .4s" }}
                        htmlFor="password"> Password </label>
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={changHandler}
                        placeholder="password"
                        id="password"
                    />
                </div>

                <div className={styles.button}>
                    {
                        loading ? (
                            <InfinitySpinner />
                        ) : (
                            <>
                                <button type="submit" onClick={submitHandler} > Login </button>
                                <span>
                                    Don not you have an account?
                                    <Link href="/register">Register</Link>
                                </span>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginPage;