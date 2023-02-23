import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup
    .string("გამოიყენე ქართული ასოები")
    .required("ველის შევსება აუცილებელია")
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  lastName: yup
    .string("გამოიყენე ქართული ასოები")
    .required("ველის შევსება აუცილებელია")
    .min(2, "გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  team: yup.string().required(),
  position: yup.string().required(),
  email: yup
    .string()
    .email("შეიყვანეთ ელ.ფოსტა სწორი ფრომატით")
    .required("ველის შევსება აუცილებელია"),
  phoneNumber: yup.number("მარტო ციფრები").required(),
});
