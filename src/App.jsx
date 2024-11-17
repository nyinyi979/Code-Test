import "./App.css";
import { ErrorAlertBox, SuccessAlertBox } from "./components/Alert/Alert";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <ErrorAlertBox />
      <SuccessAlertBox />
    </>
  );
}

export default App;
