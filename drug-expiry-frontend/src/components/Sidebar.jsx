import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6">
      <h1 className="text-xl font-bold mb-10">PharmaTrack</h1>

      <nav className="space-y-4">
        <Link to="/" className="block hover:text-blue-500">
          Dashboard
        </Link>

        <Link to="/add" className="block hover:text-blue-500">
          Add Drug
        </Link>

        <Link to="/inventory" className="block hover:text-blue-500">
          Inventory
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
