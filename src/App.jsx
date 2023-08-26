import "./App.css";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
