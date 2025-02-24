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
import Hackathon from './pages/Hackathon/Hackathon';
import NotFound from './pages/NotFound/NotFound';
import IndividualComp from './pages/Competition/IndividualComp/IndividualComp';
import IndividualEvent from './pages/Events/IndividualEvent/IndividualEvent';
import IndividualWorkshop from './pages/Workshops/IndividualWorkshop/IndividualWorkshop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/competitions" element={<Competition />} />
            <Route path="/competitions/:compId" element={<IndividualComp />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<IndividualEvent />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route
              path="/workshops/:workshopId"
              element={<IndividualWorkshop />}
            />
            <Route path="/about" element={'About'} />
            <Route path="/team" element={'Team'} />
            <Route path="/brochure" element={'Brochure'} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Route>
          <Route path="/card" element={<CardRevel />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
