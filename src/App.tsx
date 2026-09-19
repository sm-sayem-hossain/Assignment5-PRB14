import Nav from "./components/Nav";
import Banner from "./components/Banner"
import Tech from "./components/Tech";
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Tech />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
