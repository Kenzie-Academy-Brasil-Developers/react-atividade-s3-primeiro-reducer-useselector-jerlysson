import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";
import { BoxFruit, Container } from "./style";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <Container>
      <input onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>Adcionar Fruta</button>
      <h2>Lista de Frutas</h2>
      {fruits.map((fruit, idx) => (
        <BoxFruit key={idx}> Nome: {fruit}</BoxFruit>
      ))}
    </Container>
  );
};

export default FruitsPage;
