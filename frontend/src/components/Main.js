import * as React from 'react';
import {Button,Box,Typography,TextField}from '@mui/material'; 
import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import  Cards  from './Cards';
import Modal from '@mui/material/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../Reducers/todoReducer';

import { addTasks,getTasks,updateCheck,getCheckById} from '../Api/api';
import LoadingIcons from 'react-loading-icons'
// import { Bars } from 'react-loading-icons'
import {updateTasksVisits} from "../Api/api"
import { updateProgress,getProgressById } from '../Api/api';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #666',
    boxShadow: 24,
    p: 4,
  };

function Main() {
  
  
  const [title,setTitle]=React.useState('');
  const [desc,setDesc]=React.useState('');
  const [date,setDate]=React.useState((new Date()).toString());
  const [cat,setCat]=React.useState('');
  const [spinner,setSpinner]=React.useState(true);
 
  
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // const dispatch=useDispatch();
  // const todo=useSelector((state)=>state.todo);
  //initialised a state for storing the task data comming from the database.
  // const progressclick=React.useRef(null)
  const [tasksdata, setTaskdata] = React.useState([]);
  // const [checkdata,setCheckdata]=React.useState([])
  const [isprogress,setIsProgress]=React.useState([]);
  const [iscomplete,setIsComplete]=React.useState([]);
  const [countvisitor,setCountVisitor]=React.useState([]);
console.log(iscomplete)
console.log(countvisitor)
 
  const allVisitors=async()=>{
    let response=await updateTasksVisits()
    setCountVisitor(response.data)
}

  const effectcan=React.useRef(false)
  React.useEffect(() => {
    if(effectcan.current===false){
      allVisitors()
      getAllTasks();
      getCheck();
      getcheckProgress();
    }

   },[]);

  const getAllTasks= async () => {
    let response = await getTasks();
    setTaskdata(response.data);
    setSpinner(false)
}
const getCheck=async()=>{
  let response=await getCheckById();
  setIsComplete(response.data)

}
const getcheckProgress=async()=>{
  let response=await getProgressById();
  setIsProgress(response.data)
}
const [isSubmited,setIsSubmited]=React.useState(false);
  const handleSubmit=async(event)=>{
    setIsSubmited(true);
    const details={title:title,desc:desc,date:date,cat:cat};
     console.log("ADD ELEMENTS CHECKING::",details)
   
      await addTasks(details);
   
    //add tasks and get tasks will be handled here only
    setOpen(false);
    getAllTasks();
    setTitle("");
    setDesc("");
    setDate("");
    setCat("");
    
  }
  



const handleIsProgress=async()=>{
  let response= await updateProgress();
  const val=response.data.progress;
  console.log("GET CHECK ID: ",{"progress":val})
  setIsProgress(response.data)
  // getcheckProgress();
    console.log("PROGRESS CHECK IFITI",isprogress)
}
const handleIsComplete=async()=>{
    let response=await updateCheck();
    const val=response.data.complete;
    console.log("GET CHECK ID: ",{"progress":val})
    setIsComplete(response.data)
    // getCheck();
}
// let keyprop=Math.floor((Math.random() * 100) + 1);
  return (
    <>
    {/* <Bars /> */}
         <Box>
        <Box sx={{display:"flex",justifyContent: 'space-between',m:'2rem'}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box mb={2} sx={{border:1,zIndex:100,backgroundColor:"#fff",borderRadius: '8px', display:"flex",flexWrap:"wrap-reverse",justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
         {/* <span>Visiors: {countvisitor.counter}</span> */}
        {/* <div><span>Inprogress clicked: {isprogress.progress}</span><span>completed cliecked: {iscomplete.complete}</span></div> */}
          <TabList key={359} onChange={handleChange} aria-label="lab API tabs example">
            <Tab onClick={handleIsProgress}  label={`In Progress-${tasksdata.filter(data=>data.mark===false).length}`} value="1" />
            
            <Tab onClick={handleIsComplete} label={`Completed-${tasksdata.filter(data=>data.mark===true).length}`} value="3" />

          </TabList>
          <Button variant="contained"  onClick={handleOpen}><AddIcon/>Add Task</Button>
        </Box>
        {spinner && <Box className="flex text-blue-700">Loading &nbsp;<LoadingIcons.ThreeDots className="mb-2 w-10" stroke="blue" /></Box>}
            
      {
        tasksdata.map((t,index)=>{
          if(!t.mark){
            return <TabPanel key={index} value="1"> <Cards  sx={{marginBottom:"2rem"}} key={index} createdAt={t.createdAt} setTaskdata={setTaskdata} tmark={t.mark}  tid={t._id} ttitle={t.title} tdesc={t.desc} tdate={t.date} tcat={t.cat}/></TabPanel>
          }else{
            return <TabPanel key={index} value="3"> <Cards  sx={{marginBottom:"2rem"}} key={index} createdAt={t.createdAt} setTaskdata={setTaskdata} tmark={t.mark}  tid={t._id} ttitle={t.title} tdesc={t.desc} tdate={t.date} tcat={t.cat}/></TabPanel>
          }
        })
      }
      
     
        
      </TabContext>
    </Box>
        
        </Box>
        
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
   
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" mb={2} variant="h4" component="h2">
            Add task 
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
           
        <TextField onChange={(e)=>setTitle(e.target.value)} id="outlined-basic" fullWidth multiline label="Enter Task Title" variant="outlined" required />
        <TextField onChange={(e)=>setDesc(e.target.value)}  id="outlined-basic" fullWidth multiline rows={4} label="Enter Description" variant="outlined" required/>
        <TextField onChange={(e)=>setDate(e.target.value)}  id="outlined-basic" fullWidth multiline label="Enter DueDate" variant="outlined" required/>
        <TextField onChange={(e)=>setCat(e.target.value)}  id="outlined-basic" fullWidth multiline  label="Enter category" variant="outlined" required/>

          
          </Box>
          <Box mt={2} sx={{display:"flex",justifyContent:"flex-end"}}>
          <Button disabled={!title || !desc || !date || !cat || isSubmited }  onClick={handleSubmit} variant="contained">Submit</Button>
          </Box>
        
        </Box>
      </Modal>
    </>
  );
}

export default Main;
