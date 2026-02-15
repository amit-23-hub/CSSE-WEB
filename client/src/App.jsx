import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './Hero/Hero';
import Event from './components/Events/Event';
import MembersPage from './components/MembersPages';
import Team from './components/Developer/Team';
import Login from './Login/Login';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './admin/AdminDashboard';
import { useAuth } from './context/AuthContext';
import ScrollToTop from './utils/ScrollToTop';

// Protected Route component for admin
const AdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Event />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/devTeam" element={<Team />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
