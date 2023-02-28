import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]/, "გამოიყენე ქართული ასოები")
    .required("ველის შევსება აუცილებელია")
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  lastName: yup
    .string()
    .matches(/[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]/, "გამოიყენე ქართული ასოები")
    .required("ველის შევსება აუცილებელია")
    .min(2, "გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  team: yup.string().required("აირჩიეთ თიმი"),
  position: yup.string().required("აირჩიეთ პოზიცია"),
  email: yup
    .string()
    .email("შეიყვანეთ ელ.ფოსტა სწორი ფრომატით")
    .matches(/@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
    .required("ველის შევსება აუცილებელია"),
  phoneNumber: yup
    .string()
    .required("ველის შევსება აუცილებელია")
    .matches(/\+[0-9]{12}/, "ჩაწერეთ სწორი ფორმატით: +995 5** *** ***")
    .max(13, "ტელ-ნომერი უნდა შედგებოდეს 13 სიმბოლოსგან"),
});
