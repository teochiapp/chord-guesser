import "./App.css";
import Header from "./components/Header";
import Guesser from "./pages/Guesser";
import Chords from "./pages/Chords";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<Chords />} />
            <Route path="/guesser" element={<Guesser />} />
          </Routes>
    </>
  );
}

export default App;
