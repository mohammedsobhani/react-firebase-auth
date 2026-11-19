import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>This is Dashboard Page</p>
      <p>Logged in as: {user.email}</p>
    </div>
  );
}
