import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PokemonCardstyle.css";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { name, stats, src, types } = pokemon;
  const returnHome = () => {
    navigate("/");
  };
  return (
    <>
    <Card
      style={{ width: "34rem" }}
      className="mt-5 mx-auto flex-row p-2"
    >
      <Card.Img
        height="300"
        variant="top"
        src={src}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <ul className="text-left">
          <Card.Text>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </Card.Text>
        </ul>
        <Card.Text className="text-secondary">{types}</Card.Text>
      </Card.Body>
      
    </Card>
    <button className="btn1" onClick={returnHome}> Volver al Inicio</button>
    </>
  );
};
export default PokemonCard;
