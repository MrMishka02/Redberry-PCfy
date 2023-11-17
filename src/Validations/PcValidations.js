import * as yup from "yup";

export const PcSchema = yup.object().shape({
  laptopName: yup
    .string()
    .matches(
      /[a-zA-Z]/,
      "შესაძლებელია შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს, რიცხვებსა და !@#$%^&*()_+="
    )
    .required("ველის შევსება აუცილებელია")
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
  brand: yup.string().required("ველის შევსება აუცილებელია"),
  cpu: yup.string().required("ველის შევსება აუცილებელია"),
  cores: yup
    .string()
    .matches(/[0-9]/, "აირჩიეთ ბირთვების რაოდენობა")
    .required("ველის შევსება აუცილებელია"),
  threads: yup
    .string()
    .matches(/[0-9]/, "აირჩიეთ ნაკადის რაოდენობა")
    .required("ველის შევსება აუცილებელია"),
  ram: yup
    .string()
    .required("მხოლოდ ციფრები")
    .matches(/[0-9]/, "აირჩიეთ ოპერატიულის რაოდენობა"),
  price: yup
    .string()
    .matches(/[0-9/]/)
    .required("ველის შევსება აუცილებელია"),
});
