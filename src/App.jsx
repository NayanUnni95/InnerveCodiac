import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppLayout from './layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
          <Route path="/404" element={'Not Found...'} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
