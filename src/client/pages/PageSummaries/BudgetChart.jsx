import React, { useContext } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip,  ResponsiveContainer  } from "recharts";
import styles from "../../styles/budget.module.css"
import "../../styles/root.css"
import { AuthContext } from "../../authContext";

const BudgetChart = () => {
    const authContext = useContext(AuthContext);
    const { startData } = authContext

    console.log(startData.budgets.reduce((acc, cur) => acc + cur.maximum , 0))
   

    const data =startData.budgets.map(item => item)
      
      const totalLimit = 1000;
      const totalSpent = startData.budgets.reduce((acc, cur) => acc + cur.maximum , 0);

      
  return (
    <div className={styles.chart__wrapper} >
        <ResponsiveContainer width="100%" height="100%">
      <PieChart >
        <defs>
          {data.map((entry, index) => (
            <linearGradient id={`gradient-${index}`} key={index} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={entry.theme} stopOpacity={1} />
              <stop offset="100%" stopColor={entry.theme} stopOpacity={0.5} />
            </linearGradient>
          ))}
        </defs>

        {/* Outer Pie (Categories with Gradient) */}
        <Pie className={styles.wrapper} data={data} cx="50%" cy="50%" innerRadius={75} outerRadius={100} dataKey="maximum">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
        <div className={styles.budget__limit}>
            <p className={styles.total__spent}>${totalSpent}</p>
            <p className={styles.limit}>of ${totalLimit} limit</p>
        </div>
      </ResponsiveContainer>
      <Legend />
    </div>
  );
};

export default BudgetChart;
