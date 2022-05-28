import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios"
import Heading from "../../layout/Heading";
import FormError from "../../common/FormError";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const options = ["General", "Accounts", "Staff"];

const schema = yup.object().shape({
    title: yup.string().required("Plese fill in your name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    select: yup
    .string()
    .oneOf(options)
    .required("Please select a subject"),
    content: yup.string().required("Please enter your message").min(12, "The message must be at least 12 characters"),
});


export default function Contact(){
    const [serverError, setServerError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        //console.log(data);
    }

    console.log(errors);
 
    return (
        <>
        
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
            <Heading content="Contact us" />
            <p className="formp">Send us a message</p>
                <div>
                    <input placeholder="Name" {...register("title")}/>
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <input name="email" type="email" id="email" placeholder="Email" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <select name="option" placeholder="Select a subject" {...register("options")}>
                        <option value="">Select a subject</option>
                        <option value={options[0]}>General</option>
                        <option value={options[1]}>Accounts</option>
                        <option value={options[2]}>Staff</option>
                    </select>
                </div>
                <div>
                    <textarea placeholder="Message" {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                <button>{submitting ? "Submitting..." : "Send"}</button>
            </fieldset>
        </form>
        
        </>
    );
}
