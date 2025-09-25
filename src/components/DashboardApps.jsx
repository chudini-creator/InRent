import "./DashboardApps.css"
function DashboardApps({title, apparts}){
    return(
        <div className="dashboard_apps">
            <p className="dashboard_table_title">{title}</p>
            <div className="dashboard_apps_header">
                <p className="dashboard_apps_head">Adres</p>
                <p className="dashboard_apps_head">Status</p>
                <p className="dashboard_apps_head">Najemca</p>
                <p className="dashboard_apps_head">Cena</p>
            </div>
            <div className="dashboard_apps_content">
                {apparts.map((appart, index) => (
                <div key={index} className="dashboard_apps_row">
                    <p className="dashboard_apps_address"><strong>{appart.address}</strong></p>
                    <p className="dashboard_apps_status" style={{color: appart.status === "Zajęty" ? "red" : "green"}}>{appart.status}</p>
                    <p className="dashboard_apps_person">{appart.name + " " + appart.surname}</p>
                    <p className="dashboard_apps_price">{appart.price}zł</p>
                </div>
                ))}
            </div>
        </div>
    )
}
export default DashboardApps;