import { Link } from "react-router";
import rightArrow from "../../assets/images/icon-caret-right.svg";
import commonStyles from "../../styles/commonsummary.module.css";
import { useContext } from "react";
import { AuthContext } from "../../authContext";
import styles from "../../styles/transactionssummary.module.css";
import ava from "../../assets/images/avatars/daniel-carter.jpg";

const TransactionsSummary = () => {
  const { startData } = useContext(AuthContext);
  const { transactions } = startData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const RecentTransactions = () => {
    return (
      <ul className={styles.list}>
        {transactions.slice(-5).map((item) => (
          <li className={styles.list__item}>
            <div className={styles.list__from}>
              <img
                className={styles.avatar}
                src={ava}
                alt="picture not found"
              />
              <p className={styles.sender}>{item.name}</p>
            </div>
            <div className={styles.list__receipt}>
              <p
                className={`${
                  item.amount > 0 ? `${styles.deposit}` : ""
                } ${styles.transaction}`}
              >
                {item.amount > 0
                  ? `+$${item.amount.toFixed(2)}`
                  : `-$${Math.abs(item.amount).toFixed(2)}`}
              </p>
              <p className={styles.date}>{formatDate(item.date)}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className={commonStyles.summary}>
      <header className={commonStyles.header}>
        <h2>Transaction</h2>
        <Link
         className={commonStyles.link}
          to={{
            pathname: "transactions",
          }}
        >
          <p>View All</p>
          <img src={rightArrow} alt="navigation to page" />
        </Link>
      </header>
      <RecentTransactions />
    </div>
  );
};

export default TransactionsSummary;
