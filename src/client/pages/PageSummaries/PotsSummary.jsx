import { Link } from "react-router";
import rightArrow from "../../assets/images/icon-caret-right.svg";
import bankIcon from "../../assets/images/icon-pot.svg";
import "../../styles/root.css";
import commonStyles from "../../styles/commonsummary.module.css";
import styles from "../../styles/potsummary.module.css";

const PotsSummary = () => {
  return (
    <div className={commonStyles.summary}>
      <header className={commonStyles.header}>
        <h2>Pots</h2>
        <Link
          className={commonStyles.link}
          to={{
            pathname: "pots",
          }}
        >
          <p>See Details</p>
          <img src={rightArrow} alt="navigation to page" />
        </Link>
      </header>
      <div className={styles["pot__summary-container"]}>
      <div className={styles["pot__summary"]}>
          <img src={bankIcon} alt="pots icon" />
          <div className={styles["pot__summary-info"]}>
            <h3 className={styles.title}>Total Saved</h3>
            <p className={styles["saved__amount"]}>$850</p>
          </div>
        </div>
    <div className={styles.pot__current}>
         <div className={styles.pot__container}>
            <div className={styles.pot__color}></div>
            <div className={styles.pot__info}>
              <h4 className={styles.pot__title}>Savings</h4>
              <p className={styles.pot__amount}>$159</p>
            </div>
          </div>
          <div className={styles.pot__container}>
            <div className={styles.pot__color}></div>
            <div className={styles.pot__info}>
              <h4 className={styles.pot__title}>Gift</h4>
              <p className={styles.pot__amount}>$40</p>
            </div>
          </div>
          <div className={styles.pot__container}>
            <div className={styles.pot__color}></div>
            <div className={styles.pot__info}>
              <h4 className={styles.pot__title}>Concert Ticket</h4>
              <p className={styles.pot__amount}>$110</p>
            </div>
          </div>
          <div className={styles.pot__container}>
            <div className={styles.pot__color}></div>
            <div className={styles.pot__info}>
              <h4 className={styles.pot__title}>New Laptop</h4>
              <p className={styles.pot__amount}>$10</p>
            </div>
          </div>
    </div >
        
        </div>
      </div>
       
  );
};

export default PotsSummary;
