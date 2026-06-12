import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import PageNotFound  from "../pages/pageNotFound";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path= "/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesContainer;
