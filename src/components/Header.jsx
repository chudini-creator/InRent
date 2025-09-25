import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="/img/menu.png"></img>
            </div>
            <div className="header_right">
                <div className="header_search">
                    <input type="text" placeholder="Szukaj"></input>
                </div>
                <img src="/img/konto.png" className="account_icon"></img>
            </div>
        </div>    
    )
}
export default Header;