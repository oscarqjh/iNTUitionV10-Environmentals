import { useAuth } from "../../hooks/AuthProvider";
import "./HomePage.css";

export default function HomePage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Home content</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
