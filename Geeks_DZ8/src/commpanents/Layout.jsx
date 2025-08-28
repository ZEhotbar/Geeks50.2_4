import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ padding: "10px", background: "#eee" }}>
        <nav>
          <Link to="/" style={{ margin: "0 10px" }}>Главная</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>О нас</Link>
          <Link to="/posts" style={{ margin: "0 10px" }}>Посты</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ padding: "10px", background: "#eee", textAlign: "center" }}>
        © 2025
      </footer>
    </div>
  );
}
