
import { CardContent,Typography,Box, Container, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Chat = () => {

  return (
      <>
      <Box mb={2}><Button variant='contained'><AddIcon/>Create</Button></Box>
      <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
      <Container maxWidth="xl" className="border-4" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography variant='h6'>Management</Typography>
        <Typography variant='subtitle1' color="text.secondary">
        This group manages the task asigned to the department management and create content and establish a work flow
          for the company and it's required duties.
        </Typography>
          <Box sx={{display:"flex",justifyContent:"flex-end",gap:2}}>
            <Typography sx={{marginTop:"1rem"}} variant="subtitle2" color="text.secondary">
              19+ people joined
            </Typography>
            <Button sx={{fontSize:"0.9rem",textTransform: 'none'}} variant='contained'>View Group</Button>
          </Box>
        </CardContent>
       
        </Container>
        <Container maxWidth="xl" className="border-4" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography variant='h6'>UI UX Designers</Typography>
        <Typography variant='subtitle1' color="text.secondary">
        This group manages the task asigned to the department management and create content and establish a work flow
          for the company and it's required duties.
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-end",gap:2}}>
            <Typography sx={{marginTop:"1rem"}} variant="subtitle2" color="text.secondary">
              19+ people joined
            </Typography>
            <Button sx={{fontSize:"0.9rem",textTransform: 'none'}} variant='contained'>View Group</Button>
          </Box>
        </CardContent>
       
        </Container>
        <Container maxWidth="xl" className="border-4" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography variant='h6'>Front end Developer</Typography>
        <Typography variant='subtitle1' color="text.secondary">
        This group manages the task asigned to the department management and create content and establish a work flow
          for the company and it's required duties.
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-end",gap:2}}>
            <Typography sx={{marginTop:"1rem"}} variant="subtitle2" color="text.secondary">
              19+ people joined
            </Typography>
            <Button sx={{fontSize:"0.9rem",textTransform: 'none'}} variant='contained'>View Group</Button>
          </Box>
        </CardContent>
       
        </Container>
        <Container maxWidth="xl" className="border-4" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography variant='h6'>Backend Developer</Typography>
        <Typography variant='subtitle1' color="text.secondary">
        This group manages the task asigned to the department management and create content and establish a work flow
          for the company and it's required duties.
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-end",gap:2}}>
            <Typography sx={{marginTop:"1rem"}} variant="subtitle2" color="text.secondary">
              19+ people joined
            </Typography>
            <Button sx={{fontSize:"0.9rem",textTransform: 'none'}} variant='contained'>View Group</Button>
          </Box>
        </CardContent>
       
        </Container>
      </Box>
       
      </>
  );
}

export default Chat;