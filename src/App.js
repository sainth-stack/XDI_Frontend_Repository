import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigureAdapters from './pages/Adapters/configureAdaptersData';
import Adapters from './pages/Adapters';
import CardOuter from './pages/Card';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/configureAdapters/:id" element={<Adapters />}/>
        <Route path="/card" element={<CardOuter />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
