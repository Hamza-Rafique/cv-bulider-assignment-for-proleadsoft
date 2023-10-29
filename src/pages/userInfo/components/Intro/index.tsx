import { InputField, Next, Prev } from "../../../../common";
import { MyFormData } from "../../../../utlits/types";

interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
  formik: MyFormData;
}

const Intro: React.FC<Props> = ({ onNextStep, handlePrevStep, formik }) => {
  console.log(typeof(formik))
  
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    formik.handleSubmit();
    if (formik.isValid && formik.dirty) {
      onNextStep();
    }
  };
  return (
    <>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="First Name"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && formik.errors.lastName}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Age"
          type="text"
          placeholder="Age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && formik.errors.age}
        />
        <InputField
          label="Position"
          type="text"
          placeholder="Position"
          name="position"
          value={formik.values.position}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.position && formik.errors.position}
        />
      </div>
      <div className="flex justify-between px-2 mb-4">
        <InputField
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <div className="mb-4 w-1/2 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) =>
              formik.setFieldValue("profilePic", event.target.files?.[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.profilePic && formik.errors.profilePic ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.profilePic}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between px-2 mb-4">
        <Prev handlePrevStep={handlePrevStep} />
        <Next onNextStep={handleNextClick} />
      </div>
    </>
  );
};

export default Intro;
