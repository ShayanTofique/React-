import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import  './contact.css';


const ContactList = ({contacts}) => {
  let del=(ind)=>{
    contacts.splice(ind, 1);
    

  }
  return (
    <>
    <Typography lineHeight='50px'>Contact List</Typography>
          {contacts.map((x,i)=>(
             <Box key={i}
             sx={{
               borderTop: '2px solid grey',
               padding: '10px',
               borderBottom: '2px solid grey',
             }}>
             <Typography variant='h6'>{x.name}</Typography>
             <Typography>{x.email}</Typography>
             <Button onClick={()=> del(i)} marginLeft='80%' className='btn' variant='outlined'>
              Del
             </Button>
            
           </Box>
          )) 
          }
  </>
  )
}

export default ContactList
