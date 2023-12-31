import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import { Button } from "../components/Button";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-contact");
  };
  return (
    <div className="home__container">
     <div className="home__list">
       <div className="home__header">
         <div className="home__title">
           <h1>Contact List</h1>
         </div>
         <div className="home__add__button">
           <Button btnText='+' cssClass="general__btn" clickHandler={handleClick}> </Button>
         </div>
       </div>
       <div className="home__list__item">
         <ContactList />
       </div>
     </div>
    </div>
  );
};