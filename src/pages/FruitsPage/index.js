import { useSelector } from "react-redux";
import { BoxFruit } from "./style";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);
  return (
    <div>
      <h2>Lista de Frutas</h2>
      {fruits.map((fruit, idx) => (
        <BoxFruit key={idx}> Nome: {fruit}</BoxFruit>
      ))}
    </div>
  );
};

export default FruitsPage;
