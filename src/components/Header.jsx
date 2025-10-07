import "./Header.css"
function Header({name}) {
    name="Jan Kowalski";
    return (
        <div className="header">
            <div className="header_left">
                <ul>
                    <li className="header_item title"><strong>PMS</strong></li>
                    <li className="header_item">Panel główny</li>
                    <li className="header_item">Umowy</li>
                    <li className="header_item">Lokale</li>
                </ul>
            </div>
            <div className="header_right">
                <img src="/img/bell.png" className="notification_icon"></img>
                <img src="/img/settings.png" className="options_icon"></img>
                <p className="header_name">{name}</p>
            </div>
        </div>    
    )
}
export default Header;