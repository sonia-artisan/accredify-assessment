import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from './components/layouts/MainLayout';
import HomePage from "./pages/HomePage";
import DocumentsPage from "./pages/DocumentsPage";
import InsightsPage from "./pages/InsightsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/my-documents' element={<DocumentsPage />} />
          <Route path='/my-insights' element ={<InsightsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
	);
}

export default App;
