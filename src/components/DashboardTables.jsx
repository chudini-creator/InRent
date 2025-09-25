import "./DashboardTables.css";

function DashboardTables({ title, events }) {
  return (
    <div className="dashboard_table">
      <p className="dashboard_table_title">{title}</p>
      <div className="dashboard_table_content">
        {events.map((event, index) => (
          <div key={index} className="dashboard_table_row">
            <p><strong>{event.event_title}</strong></p>
            <p>{event.address}</p>
            <p>{event.date}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default DashboardTables;
