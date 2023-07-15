
import { Box,CardContent,Typography,Button,TextField,Container,List,ListItem,ListItemText,Divider} from '@mui/material';
import React, { useEffect } from 'react';
// import ReadMoreReact from 'read-more-react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { useSelector } from 'react-redux';
// import { useDispatch} from 'react-redux';
// import { deleteTodo,updateTodo,markedTodo} from '../Reducers/todoReducer';
import Modal from '@mui/material/Modal';
import { auth, db } from '../firebase';
import {addDoc,collection,onSnapshot,serverTimestamp,where,query,orderBy} from "firebase/firestore"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deleteTask } from '../Api/api';
import { updateTask,getTasks} from '../Api/api';

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

const Cards = ({createdAt,setTaskdata,tmark,tid,ttitle,tdesc,tdate,tcat}) => {
 

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  // const minimumLength=80;
  // const idealLength=100
  // const maxLength=200


  React.useEffect(() => {
    getAllTasks();
   }, // eslint-disable-next-line
   []);

  const getAllTasks= async () => {
    let response = await getTasks();
    setTaskdata(response.data);
}

  const handleDelete=async(tid)=>{
    console.log("DELETE:: ",tid)
    await deleteTask(tid);
    getAllTasks();
  }

  const handleMarked=async(tid)=>{
    await updateTask(tid,{mark:!tmark})
     getAllTasks();
    
  }

  const [newtitle,setNewTitle]=React.useState(ttitle);
  const [newdesc,setNewDesc]=React.useState(tdesc);
  const [newdate,setNewDate]=React.useState(tdate);
  const [newcat,setNewCat]=React.useState(tcat);

  const handleEdit=async(id)=>{
     const details={title:newtitle, desc:newdesc, date:newdate,cat:newcat}
     
     await updateTask(tid,details)
    setOpen(false);
    getAllTasks();
   
  }
  const [messages, setMessages] = React.useState([]);
  const [newMssg,setNewMssg]=React.useState("");

  const messagesRef=collection(db,"messages")
 
  useEffect(() => {
    const queryMessages = query(
 
      messagesRef,
     
      where("room", "==", tid),
    
      orderBy("createdAt")
    
    );
    
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, // eslint-disable-next-line
  []);
  


 const handleSubmitChat=async(e)=>{
  e.preventDefault();
  if(newMssg==="") return;
  await addDoc(messagesRef,{
    text:newMssg,
    createdAt:serverTimestamp(),
    user:auth.currentUser.displayName || 'mona',
    room:tid

  });
  setNewMssg("")
 }
  
  return (<>
        
        <Box className="border-2" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent maxwidth="xl">
          <Box className="flex justify-between" >
          <Box sx={{display:"flex",flexWrap:"wrap"}}>
          <Typography sx={{mr:3}} mb={2} component="div" variant="h5">
            {ttitle}
          </Typography>
          <Stack mb={1} direction="row" spacing={1}>
          <Chip sx={{backgroundColor:"#ff7043",color:"#fff"}} label={tcat} />
          <Chip label={`due date: ${tdate}`} variant="outlined" />
          <Chip label="In progress" variant="outlined" />
         </Stack>
          </Box>
            <Box sx={{display:"flex",gap:1,justifyContent:"flex-end"}}>
              <EditIcon sx={{cursor:"pointer"}}  onClick={()=>setOpen(true)}/>
              <DeleteIcon sx={{cursor:"pointer"}}  onClick={()=>handleDelete(tid)}/>
            </Box>
          </Box>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {/* <ReadMoreReact 
              text={tdesc}
              min={minimumLength}
              ideal={idealLength}
              max={maxLength}
              readMoreText="click here to read more"
          /> */}
          {tdesc}
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",gap:"1rem"}}>
              <Button sx={{fontSize:"10px",color:"sucess"}} onClick={()=>handleMarked(tid)} variant="outlined">Mark as {tmark?"unDone":"Done"}</Button>
              <p className='text-sm text-slate-500'> {createdAt}</p>
              </Box>
        </CardContent>
    
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-sm text-slate-500">Chat messages</p>
        </AccordionSummary>
        <AccordionDetails>
        <Container>
            <Box>
              <List>
                  {messages.map((message)=><ListItem key={message.id}><ListItemText  secondary={message.user}>{message.text}</ListItemText> </ListItem>)}
              </List>
            </Box>
            <Divider/>
            <Box className='mt-5 flex ' component="form" onSubmit={handleSubmitChat}>
              <TextField 
          id="filled-size-small"
          variant="outlined"
          required
          // defaultValue="Small"
          // error={errorMessages.myErrorMessage.length > 0}
  //  helperText={errorMessages.myErrorMessage}
          size="small" multiline  label="Type your message here.." fullWidth value={newMssg} onChange={(e)=>setNewMssg(e.target.value)}/>
          <Box>
          <Button  type="submit" variant="contained">Send</Button>
          </Box>
              
            </Box>
        </Container>
        </AccordionDetails>
        </Accordion>
       
        </Box>
      
        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" mb={2} variant="h4" component="h2">
            Update Task
          </Typography>
          <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
           
        <TextField  
         value={newtitle} 
        onChange={(e)=>setNewTitle(e.target.value)} 
        id="outlined-basic" fullWidth multiline label="Enter Task Title" variant="outlined" />
        <TextField 
        value={newdesc} 
        onChange={(e)=>setNewDesc(e.target.value)} 
        id="outlined-basic" fullWidth multiline rows={4} label="Enter Description" variant="outlined"/>
        <TextField 
        value={newdate} 
        onChange={(e)=>setNewDate(e.target.value)} 
        id="outlined-basic" fullWidth multiline label="Enter DueDate" variant="outlined" />
        <TextField 
        value={newcat} 
        onChange={(e)=>setNewCat(e.target.value)} 
        id="outlined-basic" fullWidth multiline  label="Enter category" variant="outlined" />

          
          </Box>
          <Box mt={2} sx={{display:"flex",justifyContent:"flex-end"}}>
          <Button onClick={handleEdit}  variant="contained">Submit</Button>
          </Box>
        
        </Box>
      </Modal>
        </>
    );
}

export default Cards;
