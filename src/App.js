import Headers from "./components/Headers";
import Home from "./components/Home";
import "./App.css";
import CartDetails from "./components/CartDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
