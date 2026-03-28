import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdminMessages from "./pages/AdminMessages";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  if (path === "/admin/messages") return <AdminMessages />;

  return <Home />;
}