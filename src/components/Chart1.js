import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getTickets } from "../services/list";

const Chart1 = () => {
  const [chartData, setChartData] = useState({});
  const [age, setAge] = useState([]);
  const [registeredAge, setRegisteredAge] = useState([]);

  const chart = () => {
    let age1 = [];
    let registeredAge1 = [];

    getTickets()
      .then((res) => {
        for (let dataObj of res.results) {
          age1.push(parseInt(dataObj.dob.age));
          registeredAge1.push(parseInt(dataObj.registered.age));
        }
        setChartData({
          labels: age1,
          datasets: [
            {
              label: "Hotfix data...",
              data: registeredAge1,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(age1, registeredAge1);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};
export default Chart1;

//it is working
// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774",
//     },
//   ],
// };

// export default function Chart1() {
//   let [numbers, setNumbers] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     getTickets().then((items) => {
//       if (mounted) {
//         setNumbers(items.results);
//       }
//     });

//     return () => (mounted = false);
//   }, []);
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// }
