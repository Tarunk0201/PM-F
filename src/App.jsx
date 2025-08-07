import { Route, Routes } from "react-router-dom";
import Logoin from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Logoin />
      <Signup />
      <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Logoin />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
