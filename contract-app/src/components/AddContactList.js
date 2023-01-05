import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default class AddContactList extends React.Component {

  state={
    name:'',
    email:''
  }

  add=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email===""){
      alert("All feilds are mandatory")
      return;
    }
    this.props.addcontact(this.state)
    this.setState({name:"", email:""})
    
  }
  
  render() {
    
  

    return (
        <>
        <Box>
          <Typography lineHeight='50px'>Add Contact</Typography>
          <form onSubmit={this.add}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography>Name</Typography>
            <TextField value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} className='text' id="outlined-basic" label="Name" name='name' variant="outlined" />
            <Typography>Email</Typography>
            <TextField value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})} className='text' id="outlined-basic" label="Email" name='email' variant="outlined" />
          </Box>
          <Button onClick={this.add} variant="contained">Add</Button>
          </form>
          
        </Box>
      </>
    )
  
        }}
