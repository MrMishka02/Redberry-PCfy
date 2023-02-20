import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  team: yup.string().required(),
  position: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().required(),
});
