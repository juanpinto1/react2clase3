import pikachu from "../img/pikachu.png";
const Home = () => {
  return (
    <div className="mt-5 text-center">
      <h1>Bienvenido maestro pokemón</h1>
      <img
        height="300"
        src={pikachu}
        alt=""
      />
    </div>
  );
};
export default Home;

