
import { Box,Container,Typography} from '@mui/material';
import React from 'react';
import Header from './Header';
import { getTasks } from '../Api/api';
// import { useSelector } from 'react-redux';

const Overview = () => {
    const [tasksdata, setTaskdata] = React.useState([]);
//   const todo=useSelector((state)=>state.todo);
//   const countTodos=todo.filter(i=>i).length;
//   const countCompleted=todo.filter(i=>i.mark===true).length
//   const countNotCompleted=todo.filter(i=>i.mark===false).length
React.useEffect(() => {
    getAllTasks();
   },[]);

  const getAllTasks= async () => {
    let response = await getTasks();
    setTaskdata(response.data);
}
  
  return (<>
        <Header/>
      
         <Container maxWidth="md">
            <Box className="flex justify-between">
            <Box className="border-2 w-60 px-10 py-5">
                <Typography variant='h6'>Total Task: <span>{tasksdata.length}</span></Typography>
                <Box className="pt-3 text-lg text-slate-500">Inprogress: <span className='text-lg font-bold'>{tasksdata.filter(data=>data.mark===false).length}</span></Box>
                <Box className=" text-lg text-slate-500">Completed: <span className='text-lg font-bold'>{tasksdata.filter(data=>data.mark===true).length}</span></Box> 
                <Box className=" text-lg text-slate-500">overdue: <span className='text-lg font-bold'>0</span></Box> 
            </Box>
            <Box className="border-2 w-60 px-10 py-5">
                <Typography variant='h6'>Members: <span>23</span></Typography>
                <Box className="pt-3 text-lg text-slate-500">active: <span className='text-lg font-bold'>20</span></Box>
                <Box className=" text-lg text-slate-500">non-active: <span className='text-lg font-bold'>3</span></Box> 
            </Box>
            <Box className="border-2 w-60 px-10 py-5">
                <Typography variant='h6'>Progress: <span>16</span></Typography>
                <Box className="pt-3 text-lg text-slate-500">Weekly: <span className='text-lg font-bold'>10</span></Box>
                <Box className=" text-lg text-slate-500">monthly: <span className='text-lg font-bold'>6</span></Box> 
            </Box>
            </Box>
            
         </Container>
    
      
        </>
    );
}

export default Overview;
