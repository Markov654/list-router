
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ForUs from "./pages/ForUs";
import List from "./pages/List";
import Layout from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}>
       
          <Route path="blogs" element={<ForUs/>} />
          <Route path="contact" element={<Layout />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
