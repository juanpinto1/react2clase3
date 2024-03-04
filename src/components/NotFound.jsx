import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PokemonCardstyle.css";

const NotFound = () => {
    const returnHome1 = () => {
        navigate("/");
      };
return (
    <Container className="pt-5">
    <h1 className="mb-4">La ruta que intentas consultar no existe 😑</h1>
    <button className="btn1" onClick={returnHome1}> Volver al Inicio</button>
    </Container>
);
};
export default NotFound;
