import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "../FAKE_DATA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  let options = {
    maintainAspectRatio: false, // Add this to ensure chart fills the container
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display:false
      },
      title:{
        display:true,
        text:"Annual Sales Performance",
        position: "top",
        font:{
            size:24,
            weight:"bold"
        }
      }

    },
  };
  return (
    <div className="w-[1000px] h-[450px] border border-[#E4E4E7] rounded-lg px-4 py-5 ">
      <Bar options={options} data={lineChartData} />
    </div>
  );
}

export default LineGraph;
