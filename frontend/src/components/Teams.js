import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box,Button,Typography,CardContent,Container,TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {updateUserVisits,getUserVisitspageById} from "../Api/api"




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
  createData('Maria Dutta','maria013@gmail.com', 'Backend Developer', 7),
 
];


export default function Teams() {
  const effectRan=React.useRef(false)
  const [countvisitor,setCountVisitor]=React.useState([]);

  React.useEffect(() => {
    console.log("RUUN USERS")
     if(effectRan.current===false){
          allVisitors()
     }
 
    },[]);
    const allVisitors=async()=>{
      let response=await updateUserVisits()
      setCountVisitor(response.data)
  }

  return (<Box sx={{ display: 'flex', flexDirection: 'column',gap:2}}>
    <Box sx={{ display: 'flex', flexDirection: 'column',gap:2}} >
    <Container className="border-2" sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent>
        <Typography mb={2} variant='h6'>Admin Details</Typography>
        <Typography variant='subtitle1' color="text.secondary">
            Name: Uditi Das
        </Typography>
        <Typography variant='subtitle1' color="text.secondary">
            
        </Typography>
        <Typography variant='subtitle1' color="text.secondary">
            email: uditi013@gmail.com
        </Typography>
        <Typography variant='subtitle1' color="text.secondary">
           Department role: CEO
        </Typography>
          <Box sx={{display:"flex",justifyContent:"flex-end",gap:2}}>
          <SettingsIcon color="primary"/>
          </Box>
        </CardContent>
       
        </Container>
        <Box sx={{ display: 'flex', justifyContent:"flex-end",gap:2}}>
        <span>Visiors: {countvisitor.counter}</span>
        <TextField
          label="Search.."
          id="filled-size-small"
        //   defaultValue="Small"
          variant="outlined"
          size="small"
        />
            <Button variant='contained'>Add Users</Button>
            </Box>
    </Box>
    <TableContainer className="border-2" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Assigned Tasks</TableCell>
            <TableCell align="right">Completed Tasks</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
               <EditIcon color='primary'/>
  
              </TableCell>
              <TableCell align="right">
           
               <DeleteIcon color='primary'/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
