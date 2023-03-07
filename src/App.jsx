import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import HomeAuthor from "./pages/HomeAuthor";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author/:nome" element={<HomeAuthor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
