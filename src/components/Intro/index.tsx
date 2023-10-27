import Next from "../../common/Next";
import Prev from "../../common/Prev";
interface Props {
  onNextStep: () => void;
  handlePrevStep: () => void;
  formik: any;
}

const Intro: React.FC<Props> = ({ onNextStep, handlePrevStep, formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex justify-between px-2 mb-4">
        <div className="mb-4 w-1/2 mr-3 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="mb-4  w-1/2 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between px-2 mb-4">
        <div className="mb-4 w-1/2 mr-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div>
          ) : null}
        </div>

        <div className="mb-4 w-1/2 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Position
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Position"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.position && formik.errors.position ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.position}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between px-2 mb-4">
        <div className="mb-4 w-1/2 mr-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>
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
        <Next onNextStep={onNextStep} />
      </div>
    </form>
  );
};

export default Intro;
