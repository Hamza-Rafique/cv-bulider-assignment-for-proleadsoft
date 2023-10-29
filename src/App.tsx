import { Route, Routes } from "react-router-dom";
import UserInfo from "./pages/userInfo";
import CV from "./pages/cv";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/your-cv" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
