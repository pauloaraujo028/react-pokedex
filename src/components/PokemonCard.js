import React, { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../images/pokeball.png";
import Modal from "./Modal";

const PokemonCard = ({
  id,
  name,
  image,
  types,
  type,
  weight,
  height,
  stats,
  statsName,
}) => {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img src={image} alt={name} className="image-title" />
            <p style={{ width: "180px", color: "black" }}>No. {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" className="pokeball-title" />
          </div>
          <img src={image} alt={name} />
          <div
            style={{ display: "flex", width: "100%", border: "1px solid #000" }}
          >
            <div
              style={{
                background: "#dbdbd9",
                textAlign: "center",
              }}
              className="stats-left"
            >
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div
              style={{
                backgound: "#ffffff",
                textAlign: "center",
                alignItems: "center",
              }}
              className="stats-right"
            >
              <div className="types">
                <p>{type} /</p>
                <p> {types}</p>
              </div>
              <p>{height}0 cm</p>
              <p>{weight} lbs</p>
            </div>
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          type={type}
          types={types}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
};

export default PokemonCard;
