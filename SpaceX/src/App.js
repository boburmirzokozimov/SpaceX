import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Error, Homepage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
