import "./App.scss";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
