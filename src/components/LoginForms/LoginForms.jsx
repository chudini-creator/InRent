import { Link } from "react-router-dom";
import "./LoginForms.css";
function LoginForms({title, button}) {

    const isLogin = title === "Zaloguj się";
    const isRegister = title === "Zarejestruj się";
  return (
    <div className="login-page">
        <div className="login-forms">
            <div className="login-forms-content">
                <h1>{title}</h1>
                <div className="login-forms-inputs">
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Hasło" />
                    {isRegister && (
                        <div className="register-inputs">
                        <input type="password" placeholder="Powtórz hasło" />
                        <input type="text" placeholder="Numer telefonu" />
                        </div>
                    )}
                </div>
                {isRegister && (
                    <div className="login-forms-checkbox">
                        <input type="checkbox" />
                        <p>Akceptuję regulamin serwisu</p>
                    </div>
                )}
                <button>{button}</button>
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
  )
}
export default LoginForms;