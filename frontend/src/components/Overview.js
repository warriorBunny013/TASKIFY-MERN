
import { Box,Container,Typography} from '@mui/material';
import React,{useRef} from 'react';
import Header from './Header';
import { getTasks} from '../Api/api';
import { getVisitspageById } from '../Api/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import LoadingIcons from 'react-loading-icons'
import { browserName, browserVersion } from "react-device-detect";
import {updateOverviewVisits} from "../Api/api"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  export const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Productivity overview',
      },
    },
  };  
 

const Overview = () => {
    const [tasksdata, setTaskdata] = React.useState([]);
    const [spinner,setSpinner]=React.useState(true);
    const effectRan=useRef(false)

const [countvisitor,setCountVisitor]=React.useState([]);
let currMonth = new Date().getMonth();
  console.log("CURRENT MONTH:",currMonth);
//   console.log("current monthe ioajskknasf: ",currentMonth);


const [visitdata,setVisitData]=React.useState(0)
// React.useEffect(() => {

//  },[]);

const getAllVisits= async () => {
  let response = await getVisitspageById();
  setVisitData(response.data.counter);
  
}
console.log("DATA",visitdata)
React.useEffect(() => {
   console.log("RUUN ED")
    if(effectRan.current===false){
        getAllTasks();
         allVisitors()
         getAllVisits();
    }

   },[]);

  const getAllTasks= async () => {
    let response = await getTasks();
    setTaskdata(response.data);
    setSpinner(false)
}

const allVisitors=async()=>{
    let response=await updateOverviewVisits()
    setCountVisitor(response.data)
}

console.log(`${browserName} ${browserVersion}`);
console.log("VISITORS",countvisitor)
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'];
// const [datamonth,setDatamonth]=React.useState(currMonth);
const dataArray = Array(12).fill(0);

//random data
dataArray[0] = 24;
dataArray[1] = 60;
dataArray[2] = 78;
dataArray[3] = 30;
dataArray[4] = 90;
dataArray[5] = 98;
dataArray[6] = 62;
dataArray[7] = 34;
dataArray[8] = 59;
dataArray[9] = 89;
dataArray[10] = 45;
dataArray[11] = 55;
//current month
let tasklen=tasksdata.length;
let taskcom=tasksdata.filter(data=>data.mark===true).length;
let taskpercent=(taskcom/tasklen)*100;
dataArray[currMonth] = taskpercent;

currMonth++;
while(currMonth<12){
    dataArray[currMonth]=0;
    currMonth++;
}

const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'task %',
        data: dataArray,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (<>
        <Header/>
         <Container maxWidth="md">
         {spinner && <Box className="flex text-blue-700">Loading &nbsp;<LoadingIcons.ThreeDots className="mb-2 w-10" stroke="blue" /></Box>}
            <Box className="flex justify-between">
            
            
            <Box className="border-2 w-60 px-10 py-5">
                <Typography variant='h6'>Total Task: <span>{tasksdata.length}</span></Typography>
                <Box className="pt-3 text-lg text-slate-500">Inprogress: <span className='text-lg font-bold'>{tasksdata.filter(data=>data.mark===false).length}</span></Box>
                <Box className=" text-lg text-slate-500">Completed: <span className='text-lg font-bold'>{tasksdata.filter(data=>data.mark===true).length}</span></Box> 
                <Box className=" text-lg text-slate-500">overdue: <span className='text-lg font-bold'>0</span></Box> 
            </Box>
            <Box className="border-2 w-60 px-10 py-5">
                <Typography variant='h6'>Members: <span>23</span></Typography>
                <Box className="pt-3 text-lg text-slate-500">active: <span className='text-lg font-bold'>{visitdata}</span></Box>
                <Box className=" text-lg text-slate-500">non-active: <span className='text-lg font-bold'>{23-visitdata}</span></Box> 
            </Box>
            <Box className="border-2 w-64 px-10 py-5">
                <Box className="pt-3 text-md text-slate-500">Visitors: <span>{countvisitor.counter}</span></Box>
                <Box className="text-md text-slate-500">Browser: <span className='text-sm font-bold'> {browserName}  {browserVersion}</span></Box>
            </Box>
          
            </Box>
            
            <div>
     

<Line options={options} data={data} />
    </div>

            
            
         </Container>
    
      
        </>
    );
}

export default Overview;
