import { Link } from "react-router"
import rightArrow from "../../assets/images/icon-caret-right.svg"
import commonStyles from "../../styles/commonsummary.module.css"
import styles from "../../styles/budget.module.css"
import BudgetChart from "./budgetChart"
import { useContext } from "react"
import { AuthContext } from "../../authContext"



const BudgetSummary = () => {
    const authContext = useContext(AuthContext);
    const { startData } = authContext
    console.log(authContext)
    const recentBudgets = startData.budgets.slice(-4).map(((item,index) => (
        <div className={styles.budget__item} key={index}>
            <div style={{height:"100%", width:".25rem", backgroundColor:`${item.theme}`, borderRadius: ".5rem"}}>
            </div>
            <div>
                <p className={styles.category}>{item.category}</p>
                <p className={styles.maximum}>${item.maximum}.00</p>
            </div>

        </div>
    )))
    console.log(recentBudgets)

    return (
        <div className={commonStyles.summary}>
        <header className={commonStyles.header}>
            <h2>Budgets</h2>
            <Link  className={commonStyles.link} to={{
                pathname:"budgets"
            }}>
                <p>View All</p>
                <img src={rightArrow} alt="navigation to page" />
            </Link>
        </header>
        <BudgetChart />
        <div className={styles.budgets}>{recentBudgets}</div>
    </div>
    )
}

export default BudgetSummary