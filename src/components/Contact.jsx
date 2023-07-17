import { useNavigate } from "react-router-dom";

export const Contact = ({ name, number ,path}) => {

  const navigate = useNavigate();
  const clickContact = () => {
  navigate("/contactdetail/" + path);}
  
  return (
    <div onClick={clickContact} className="card">
      <p><img className="user__icon" src="../src/assets/images/user-icon.png"/> {name} </p>
      <p> <img className="user__icon" src="../src/assets/images/phonenumber-icon.png"/> {number}</p>
    </div>
  );
};