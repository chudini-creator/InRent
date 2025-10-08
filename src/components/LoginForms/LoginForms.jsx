import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForms.css";

function LoginForms({ title, button }) {
  const isLogin = title === "Zaloguj się";
  const isRegister = title === "Zarejestruj się";
  const Additional = title === "Dodatkowe informacje";

  
  const [showRightSide, setShowRightSide] = useState(false);
  const handleNextClick = () => {
    if (Additional) {
      setShowRightSide((prev) => !prev); 
    }
  };
   const [userType, setUserType] = useState("private"); 
  return (
    <div className="login-page">
      <div className="login-forms">
        <div className="login-forms-content">
          <h1>{title}</h1>
          <div className="login-forms-inputs">
            {(isLogin || isRegister) && (
              <div className="register-inputs">
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Hasło" />
              </div>
            )}
            {isRegister && (
              <div className="register-inputs">
                <input type="password" placeholder="Powtórz hasło" />
                <input type="text" placeholder="Numer telefonu" />
              </div>
            )}
            {Additional && (
              <div className="add-info-inputs">
                <div className="CompOrPriv">
                  <button className={userType === "private" ? "active" : ""} id="private" type="button" onClick={() => setUserType("private")}>Osoba prywatna</button>
                  <button className={userType === "company" ? "active" : ""} id="company" type="button" onClick={() => setUserType("company")}>Firma</button>
                </div>
                {userType === "private" && (
                <div className="add-info-privateUser">
                    {!showRightSide ? (
                    <div className="add-info-inputs-left">
                        <input type="text" placeholder="Imię" />
                        <input type="text" placeholder="Drugie imię" />
                        <input type="text" placeholder="Nazwisko" />
                        <input type="text" placeholder="PESEL" />
                        <input type="text" placeholder="Numer dowodu osobistego" />
                        <input type="text" placeholder="Data ważności dowodu osobistego" />
                    </div>
                    ) : (
                    <div className="add-info-inputs-right">
                        <input type="text" placeholder="Ulica" />
                        <input type="text" placeholder="Miasto" />
                        <input type="text" placeholder="Kod pocztowy" />
                    </div>
                    )}
                </div>
                )}
                {userType === "company" && (
                <div className="add-info-company">
                    <input type="text" placeholder="Nazwa firmy" />
                    <input type="text" placeholder="NIP" />
                    <input type="text" placeholder="Ulica" />
                    <input type="text" placeholder="Miasto" />
                    <input type="text" placeholder="Kod pocztowy" />
                </div>
                )}
              </div>
            )}
          </div>

          {isRegister && (
            <div className="login-forms-checkbox">
              <input type="checkbox" />
              <p>Akceptuję regulamin serwisu</p>
            </div>
          )}

          <button type="button" onClick={handleNextClick}>
            {Additional && userType === "private" && !showRightSide ? "Dalej" : button}
          </button>

          {isLogin && (
            <div className="login-forms-options">
              <p>Przypomnij hasło</p>
              <Link to="/register">
                <p className="p-register">Nie masz konta?</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForms;
