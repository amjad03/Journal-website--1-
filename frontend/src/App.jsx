import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PaperDetailPage from "./pages/PaperDetailPage";
import PublicationsPage from "./pages/PublicationsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SubmitPaperPage from "./pages/SubmitPaperPage";
import Home from "./pages/Home";
import AimScopePage from "./pages/AimScopePage";
import EditorialTeamPage from "./pages/EditorialTeamPage";
import AdminPanel from "./pages/AdminPanel";
import SubmitPaperPageNew from "./pages/SubmitPaperPageNew";
import Current from "./pages/Current";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/publications-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/submit-paper-page":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );     
      if (metaDescriptionTag) {         
            metaDescriptionTag.content = metaDescription;       
        }
    }              
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/publications-page" element={<PublicationsPage />} />
      <Route path="/contact-us-page" element={<ContactUsPage />} />
      <Route path="/submit-paper-page" element={<SubmitPaperPage />} />
      <Route path="/submit-paper-page-new" element={<SubmitPaperPageNew />} />
      <Route path="/current" element={<Current />} />

      <Route path="/paper-detail-page" element={<PaperDetailPage />} />
      <Route path="/aim-scope-page" element={<AimScopePage/>} />
      <Route path="/editorial-team-page" element={<EditorialTeamPage />} />

      <Route path="/admin-panel" element={<AdminPanel />} />
      
    </Routes>
  );
}
export default App;
