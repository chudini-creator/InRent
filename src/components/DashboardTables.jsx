import "./DashboardTables.css";

function DashboardTables({ title, events }) {
  const za = " za mieszkanie ";
  return (
    <div className="dashboard_table">
      <p className="dashboard_table_title">{title}</p>
      <div className="dashboard_table_content">
        {events.map((event, index) => (
          <div key={index} className="dashboard_table_row">
            <p><strong>{event.date}</strong></p>
            <p>{event.event_title}{za}{event.address}</p>
            <p className="cost">{event.cost}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default DashboardTables;
