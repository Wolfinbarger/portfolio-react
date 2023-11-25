import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <slot />
      <Footer />
    </>
  );
}

export default App;
