import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ProductList from "./ProductList";
import ContactForm from "./ContactForm";
import Dashboard from "./Dashboard"; // Example dashboard page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
