import pokeball from "../images/pokeball.png";
import bg from "../images/bg.png";

const Modal = ({
  onClick,
  id,
  name,
  image,
  type,
  types,
  height,
  weight,
  stats,
  statsName,
}) => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "5px 10px",
          background: "#000",
          color: "#fff",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </div>

      <div>
        <img
          src={image}
          alt={name}
          style={{
            filter: "drop-shadow(0 15px 10px #000)",
            marginTop: "150px",
          }}
        />
      </div>

      <div>
        <div
          className="stat-container-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: "180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img src={pokeball} alt="pokeball" className="pokeball-title" />
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              background: "#dbdbd9",
              textAlign: "center",
              margin: "10px 0",
              border: "1px solid #000",
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
              margin: "10px 0",
              border: "1px solid #000",
              fontWeight: "bold",
            }}
            className="stats-right"
          >
            <div>
              <p>{type} /</p>
              <p>{types}</p>
            </div>
            <p>{height}0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className="stats">{stats}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
