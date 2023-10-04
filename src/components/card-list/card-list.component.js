import "./card-list.style.css";
import Card from "../card/card.js";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((oneMonster) => {
        return <Card oneMonster={oneMonster} />;
      })}
    </div>
  );
};

export default CardList;
