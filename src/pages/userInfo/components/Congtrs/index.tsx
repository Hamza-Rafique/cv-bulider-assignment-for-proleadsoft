import { Link } from "react-router-dom";
const Congrats = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 mt-12 border rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="text-gray-700 mb-8">
        You have created your CV. Click below to get your CV.
      </p>
      <Link
        to="/your-cv"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Your CV
      </Link>
    </div>
  );
};

export default Congrats;
