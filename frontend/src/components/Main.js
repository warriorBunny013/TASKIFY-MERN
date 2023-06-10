import * as React from 'react';
import {Container,Button,Box,Typography,TextField}from '@mui/material'; 
import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import  Cards  from './Cards';
import Modal from '@mui/material/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../Reducers/todoReducer';

import { addTasks,getTasks } from '../Api/api';

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
  const [tasksdata, setTaskdata] = React.useState([]);

  React.useEffect(() => {
    getAllTasks();
   },[]);

  const getAllTasks= async () => {
    let response = await getTasks();
    setTaskdata(response.data);
}
  const handleSubmit=async(event)=>{
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
  return (
    <>
         <Container maxWidth="md">
        <Box sx={{display:"flex",justifyContent: 'space-between',m:'2rem'}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box mb={2} sx={{border:1,zIndex:100,backgroundColor:"#fff",borderRadius: '8px', display:"flex",flexWrap:"wrap-reverse",justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={`In Progress-${tasksdata.filter(data=>data.mark===false).length}`} value="1" />
            
            <Tab label={`Completed-${tasksdata.filter(data=>data.mark===true).length}`} value="3" />

          </TabList>
          <Button variant="contained"  onClick={handleOpen}><AddIcon/>Add Task</Button>
        </Box>
      {
        tasksdata.map((t,index)=>{
          if(!t.mark){
            return <TabPanel value="1"> <Cards  sx={{marginBottom:"2rem"}} key={index} createdAt={t.createdAt} setTaskdata={setTaskdata} tmark={t.mark}  tid={t._id} ttitle={t.title} tdesc={t.desc} tdate={t.date} tcat={t.cat}/></TabPanel>
          }else{
            return <TabPanel value="3"> <Cards  sx={{marginBottom:"2rem"}} key={index} createdAt={t.createdAt} setTaskdata={setTaskdata} tmark={t.mark}  tid={t._id} ttitle={t.title} tdesc={t.desc} tdate={t.date} tcat={t.cat}/></TabPanel>
          }
        })
      }
      
     
        
      </TabContext>
    </Box>
        
        </Box>
        
      </Container>
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
          <Button disabled={!title || !desc || !date || !cat}  onClick={handleSubmit} variant="contained">Submit</Button>
          </Box>
        
        </Box>
      </Modal>
    </>
  );
}

export default Main;
