import "./DashboardCard.css"
function DashboardCard(props) {
    return (
        <div className="dashboard_card">
            <p className="dashboard_card_title">{props.title}</p>
            <p className="dashboard_card_value">{props.value}</p>
        </div>
    )
}
export default DashboardCard;