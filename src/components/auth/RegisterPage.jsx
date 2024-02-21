"use client"

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

//Style
import styles from "./RegisterPage.module.scss";

//Component
import InfinitySpinner from "../module/spinner/infinity-spinner/InfinitySpinner";

const RegisterPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
        repeatPassword: ""
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

        const { email, password, repeatPassword } = form;
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!password || !email) return toast.error("Please enter first");
        if (password.length < 6) return toast.error("Password needs to be more than 6 ");
        if (!regex.test(email)) return toast.error("Email is invalid");
        if (password !== repeatPassword) return toast.error("Passwords are not mach");

        setLoading(true)

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(form)
        })
        const data = await res.json();

        setLoading(false)

        if (data.massage) {
            toast.success(data.massage)
            await signIn("credentials", {
                email,
                password,
                redirect: false
            })
            setTimeout(() => router.replace("/"), 200)
        }

        if (data.error) return toast.error(data.error);
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
                >Register</h2>

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

                <div className={styles.field}>
                    <label
                        style={{ animation: "fadeInLeft .8s .4s" }}
                        htmlFor="repeatPassword"> Repeat password </label>
                    <input
                        className={styles.input}
                        name="repeatPassword"
                        type="password"
                        value={form.repeatPassword}
                        onChange={changHandler}
                        placeholder="repeatPassword"
                        id="repeatPassword"
                    />
                </div>

                <div className={styles.button}>
                    {
                        loading ? (
                            <InfinitySpinner />
                        ) : (
                            <>
                                <button type="submit" onClick={submitHandler} > Register </button>
                                <span>
                                    Don you have an account?
                                    <Link href="/login">Login</Link>
                                </span>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;