import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import AddDrug from "./pages/AddDrug";
import DrugList from "./pages/DrugList";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddDrug />} />
          <Route path="/inventory" element={<DrugList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
