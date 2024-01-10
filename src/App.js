import { useState } from "react";
import {UserData} from './Data'
import RadarChart from "./components/RadarCharts";


function App() {
	const [userData, setUserData] = useState({
		labels: UserData.map((data) => data.title),
		datasets: [
		  {
			 label: '',
			 data: UserData.map((data) => data.percent)
		  },
		],
	 });
	 const options = {
		plugins: {
			legend: {
				display: false, // Скрываем легенду (прямоугольник перед label)
			 },
			tooltip: {
				displayColors: false,
				callbacks: {
					title: (ctx)=> {
						return UserData[ctx[0].dataIndex].tooltip
					},
					label: (ctx) => {
						let value = UserData[ctx.dataIndex].value;
						let percent = UserData[ctx.dataIndex].percent;
						return `Ваш показатель: ${value ? value : percent}`
					},
				}
			}
		}
	 };
 
	return <RadarChart chartData={userData} options={options}/>;
 }
 
 export default App;
