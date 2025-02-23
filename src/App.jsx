import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppLayout from './layout/Layout';
import Home from './pages/Home/Home';
import CardRevel from './components/CardRevel/CardRevel';
import Competition from './pages/Competition/Competition';
import Rules from './pages/Rules/Rules';
import Sponsors from './pages/Sponsors/Sponsors';
import Events from './pages/Events/Events';
import Workshops from './pages/Workshops/Workshops';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/competitions" element={<Competition />} />
            <Route path="/events" element={<Events />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Route>
          <Route path="/card" element={<CardRevel />} />
          <Route path="/404" element={'Not Found...'} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
