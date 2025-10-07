import DashboardCard from "../components/DashboardCard";
import DashboardTables from "../components/DashboardTables";
import Header from "../components/Header";
import "./Dashboard2.css"
function Dashboard2({name}) {
    name = "Admin";
    const cards2 = [
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
    const payments = [
        {
                title: "Nadchodzące płatności",
                events: [
                    {
                        event_title: "Wynajem",
                        address: "Konstantynowska 40, Warszawa",
                        date: "01.01.2025",
                        cost: "2000zł"
                    },
                    {
                        event_title: "Prąd",
                        address: "Jodłowa 2, Kraków",
                        date: "08.01.2025",
                        cost: "2000zł"
                    },
                    {
                        event_title: "Czynsz",
                        address: "Jodłowa 2, Warszawa",
                        date: "10.01.2025",
                        cost: "2000zł"
                    },
                    {
                        event_title: "Czynsz",
                        address: "Jodłowa 4, Łódź",
                        date: "12.02.2025",
                        cost: "2000zł"
                    }
                ]
            }
        ]

    return (
        <div className="Dashboard2">
            <Header />
            <div className="dash_upper">
                <div className="dash_left">
                    <h1>Dzień dobry, {name}</h1>
                    <p>Witaj w panelu administracyjnym InRent</p>
                </div>
                <div className="dash_right">
                    <button>Utwórz umowę</button>
                </div>
            </div>
            <div className="dash_cards">
                {cards2.map((card, index) => <DashboardCard key={index} title={card.title} value={card.value} />)}
            </div>
            <hr></hr>
            <div className="dash_lower">
                {payments.map((payment, index) => (<DashboardTables key={index} title={payment.title} events={payment.events} />))}
            </div>
        </div>
    )
}
export default Dashboard2;