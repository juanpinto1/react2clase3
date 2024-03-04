import { Container } from "react-bootstrap";
import "./PokemonCardstyle.css";

const NotFound = () => {
return (
    <Container className="pt-5">
    <h1 className="mb-4">La ruta que intentas consultar no existe 😑</h1>
    <button className="btn1" onClick={returnHome}> Volver al Inicio</button>
    </Container>
);
};
export default NotFound;
