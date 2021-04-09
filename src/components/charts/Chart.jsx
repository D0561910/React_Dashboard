// import classes from "./chart.module.css";
import { useState, useEffect, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";

import { localhost_API } from "../../constants/config";
import { expenseCategories } from "../../constants/categories";
import { getToken } from "../../helpers/token";

const Charts = () => {
  const [filterData, setFilterData] = useState([]);

  const getTransaction = useCallback(() => {
    const fetchingData = async () => {
      const result = await fetch(`${localhost_API}api/getAllData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: getToken(),
        },
      }).then((response) => response.json());

      const { expenseData } = result;

      const rightTransactions = expenseData.filter((t) => t.type === "Expense");

      rightTransactions.forEach((t) => {
        const category = expenseCategories.find((c) => c.type === t.category);

        if (category) category.amount += parseFloat(t.price);
      });

      const filteredCategories = expenseCategories.filter(
        (sc) => sc.amount > 0
      );

      setFilterData(filteredCategories);
    };
    fetchingData();
  }, []);

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  const chartData = {
    datasets: [
      {
        data: filterData.map((c) => c.amount),
        backgroundColor: filterData.map((c) => c.color),
      },
    ],
    labels: filterData.map((c) => c.type),
  };

  return <Doughnut data={chartData} />;
};

export default Charts;
