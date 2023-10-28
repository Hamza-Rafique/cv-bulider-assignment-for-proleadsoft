import { FormikValues } from 'formik';

export  interface MyFormData extends FormikValues {
  firstName?: string;
  lastName?: string;
  age?: string;
  position?: string;
  phoneNumber?: string;
  profilePic?: File | null;
  educationHistory?: {
    institution?: string;
    degree?: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
  }[];
  workHistory?: {
    company?: string;
    position?: string;
    role?: string;
    startDate?: string;
    endDate?: string;
  }[];
  description?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

