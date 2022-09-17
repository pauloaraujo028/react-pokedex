import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeballcolor from "../images/pokeballcolor.png";

const Topbar = () => {
  return (
    <div className="title">
      <div className="title_left">
        <p>Pokédex</p>
        <div className="caught_seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>898</p>
          </div>
        </div>
      </div>
      <div className="search">
        <p style={{ color: "white" }}>A a Z</p>
        <input type="text" name="search" placeholder="Buscar Pokémon..." />
      </div>
    </div>
  );
};

export default Topbar;
