import "./Dashboard.css";
import DashboardCard from "../components/DashboardCard";
import DashboardTables from "../components/DashboardTables";
import DashboardApps from "../components/DashboardApps";
import Header from "../components/Header";
function Dashboard() {

    const cards = [
        {
            title: "Wolne lokale",
            value: "8"
        },
        {
            title: "Zajęte lokale",
            value: "2"
        },
        {
            title: "Aktywne umowy",
            value: "2"
        },
        {
            title: "Prognozowane wydatki",
            value: "7500"
        },
        {
            title: "Prognozowany przychód",
            value: "15000"
        },
        {
            title: "Rzeczywisty przychód",
            value: "3000"
        }
    ]

    const tables = [
        {
            title: "Nadchodzące wydarzenia",
            events: [
                {
                    event_title: "Sprzątanie",
                    address: "Jodłowa 2",
                    date: "5 dni"
                },
                {
                    event_title: "Koniec umowy",
                    address: "Jodłowa 2",
                    date: "10 dni"
                },
                {
                    event_title: "Opłata rachunków",
                    address: "Jodłowa 2",
                    date: "15 dni"
                },
                {
                    event_title: "Sprzątanie",
                    address: "Jodłowa 2",
                    date: "35 dni"
                }
            ]

        },
        {
            title: "Nadchodzące płatności",
            events: [
                {
                    event_title: "Wynajem",
                    address: "Jodłowa 2",
                    date: "5 dni"
                },
                {
                    event_title: "Prąd",
                    address: "Jodłowa 2",
                    date: "12 dni"
                },
                {
                    event_title: "Czynsz",
                    address: "Jodłowa 2",
                    date: "25 dni"
                },
                {
                    event_title: "Czynsz",
                    address: "Jodłowa 4",
                    date: "28 dni"
                }
            ]
        }
    ]

    const apps = [
        {
            title: "Lokale",
            apparts: 
                    [
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Zajęty",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Wolny",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Zajęty",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Wolny",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Zajęty",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Wolny",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Nowak",
                            status: "Zajęty",
                            price: "1000"
                        },
                        {
                            address: "Miodna 52/7",
                            name: "Krzysztof",
                            surname: "Kowalski",
                            status: "Wolny",
                            price: "1000"
                        }
                    ]
        }
    ]
  return(
    <div className="dashboard">
        <Header />
        <div className="dashboard_cards">
            {cards.map((card, index) => <DashboardCard key={index} title={card.title} value={card.value} />)}
        </div>
        <div className="dashboard_data">
            <div className="dashboard_app">
               {apps.map((app, index) => (
                    <DashboardApps 
                    key={index} 
                    title={app.title} 
                    apparts={app.apparts} 
                    />
                ))
               }
            </div> 
            <div className="dashboard_tables">
                {tables.map((table, index) => (
                    <DashboardTables 
                    key={index} 
                    title={table.title} 
                    events={table.events} 
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
export default Dashboard;