import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import "./main.css";
import Search from "../../Pages/SearchBar/SearchBar";
const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Search />
        <section className="cards-container" data-testid="home-section">
          <Cards />
        </section>
      </div>
    </>
  );
};

export default Main;
