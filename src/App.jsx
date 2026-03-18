import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ExperienceDetail from "./pages/ExperienceDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/experience/:slug" element={<ExperienceDetail />} />
    </Routes>
  );
}