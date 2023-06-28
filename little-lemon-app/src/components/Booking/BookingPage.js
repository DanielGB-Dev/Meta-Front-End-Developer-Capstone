import "../../styles/BookingPage.css";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div className="reservations-container">
      <h1>Reserve a table</h1>
      <div className="form-container">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
