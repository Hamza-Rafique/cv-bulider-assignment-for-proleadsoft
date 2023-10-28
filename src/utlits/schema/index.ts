import * as Yup from "yup";

export const introSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  age: Yup.number().required("Required").positive("Must be a positive number"),
  position: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  profilePic: Yup.mixed().required("Required"),
});
export const descriptionSchema = Yup.object({
    description: Yup.string().required("Required"),
    linkedin: Yup.string().required("Required"),
    github: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
  });
export const educationSchema = Yup.object({
    educationHistory: Yup.array().of(
      Yup.object().shape({
        institution: Yup.string().required("Required"),
        degree: Yup.string().required("Required"),
        fieldOfStudy: Yup.string().required("Required"),
        startDate: Yup.string().required("Required"),
        endDate: Yup.string().required("Required"),
      })
    ),
  })

