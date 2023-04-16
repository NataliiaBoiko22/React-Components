import Cards from "../Cards/Cards";
import "./main.css";
import Search from "../../Pages/SearchBar/SearchBar";
function Main() {
  return (
    <div className="main-container">
      <Search />
      <section className="cards-container" data-testid="home-section">
        <Cards />
      </section>
    </div>
  );
}

export default Main;
