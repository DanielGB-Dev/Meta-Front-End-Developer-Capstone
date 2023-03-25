import "../../styles/Testimonials.css";
import UserIcon from "../../assets/user.png";
const TestimonialCard = () => {
  return (
    <article className="tml-card">
      <h3>Rating</h3>
      <div className="user-container">
        <img src={UserIcon} />
        <h3>Name</h3>
      </div>
      <p>
        The famous greek salad of crispy lettuce, peppers, olives and our
        Chicago with crunchy garlic and rosemary croutons.
      </p>
    </article>
  );
};

export default TestimonialCard;
