import { Route, Routes } from "react-router-dom";
import UserInfo from "./pages/userInfo";
import CV from "./pages/cv";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 mt-4 mx-auto text-center">
        Enter Information to Build your CV with Proleadsoft
      </h1>
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/your-cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
