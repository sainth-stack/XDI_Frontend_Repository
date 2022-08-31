import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigureAdapters from './pages/configureAdapters';
import MeterHeadendSystems from './pages/configureAdapters/meterHeadendSystems';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/configureAdapters/:id" element={<MeterHeadendSystems />}/>
        {/* <Route path="/metered" element={<MeterHeadendSystems />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
