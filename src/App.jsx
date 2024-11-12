import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ToggleButton />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
