import CardImg from "../../assets/greek salad.jpg";
import "../../styles/HighlightCard.css";
const HighlightCard = () => {
  return (
    <article className="ht-card">
      <img src={CardImg} />
      <div className="card-title-container">
        <h3>Greek Salad</h3>
        <p>$12.99</p>
      </div>
      <p className="card-p">
        The famous greek salad of crispy lettuce, peppers, olives and our
        Chicago with crunchy garlic and rosemary croutons.
      </p>
      <div className="card-bottom-container">
        <h3 className="categories">Order A Delivery</h3>
      </div>
    </article>
  );
};

export default HighlightCard;
