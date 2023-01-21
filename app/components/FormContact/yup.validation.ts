import * as yup from "yup";

export const validationScheme = yup.object().shape({
    name: yup.string().typeError("That is not string").required("The field is empty"),
    phone: yup.number().typeError("That is not number").required("The field is empty"),
    email: yup.string().email("That is not correct email").required("The field is empty"),
})