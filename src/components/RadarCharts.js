import { Radar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


export default function RadarChart({ chartData, options }) {
	
 
	return (
	  <div style={{ width: 700, marginRight: 'auto', marginLeft:' auto ' }}>
		 <Radar data={chartData} options={options}/>
	  </div>
	);
 }