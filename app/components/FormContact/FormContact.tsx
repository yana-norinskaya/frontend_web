import {FC} from "react";

import styles from "./style.module.scss";

import {SubmitHandler, useForm} from "react-hook-form";

import axios from "axios";

import {yupResolver} from "@hookform/resolvers/yup";

import {validationScheme} from "@/components/FormContact/yup.validation";

interface IDate {
    name: string;
    phone: number;
    email: string;
}

const PORT = "http://localhost:3004/feedback";

export const FormContact: FC = () => {
    const { register, handleSubmit, reset, formState: {isDirty, isValid, errors, isLoading} } = useForm<IDate>(
        {resolver: yupResolver(validationScheme)});

    const onSubmit: SubmitHandler<IDate> = async (data) => {
        await axios.post(PORT, {
            id: Math.floor(Math.random()),
            email: data.email,
            name: data.name,
            phone: String(data.phone)
        }).then(res => console.log(res)).catch(e => console.log(e))
        reset();
    }
    return(
        <section className={styles.wrap}>
            <div>
                <h3>Contact  us</h3>
                <p>Do you have any kind of help please contact with us.</p>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Name"/>
                         <div className={styles.error}>{errors.name?.message}</div>
                    <input
                        {...register("phone", { required: true })}
                        type="tel"
                        placeholder="Phone"/>
                    <div className={styles.error}>{errors.phone?.message}</div>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="E-mail"/>
                    <div className={styles.error}>{errors.email?.message}</div>
                    <button disabled={!isDirty && !isValid}>Send</button>
                </form>
            </div>
            <div className={styles.blur}></div>
        </section>
    )
}