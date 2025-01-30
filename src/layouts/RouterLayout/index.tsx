import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DeveloperInfoPage from "../../pages/DeveloperInfoPage";

export default function RouterLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeveloperInfoPage />} />
      </Routes>
    </Router>
  );
}
