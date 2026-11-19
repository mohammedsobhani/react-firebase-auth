import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;      // wait for Firebase before deciding
  if (!user) return <Navigate to="/login" replace />; // not logged in -> Login
  return children;                             // logged in -> show the page
}
