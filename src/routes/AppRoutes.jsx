import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Job from "../pages/Job/Job";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Job" element={<Job />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
