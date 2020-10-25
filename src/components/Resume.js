import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import data from './yourdata'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
      
//     },
//   },
// }));


function Resume({resumeURL}) {
    //const classes = useStyles();
    return (
        <div className='resume-part' id="project">
       
            
            <Button variant="outlined" color="inherit" href={resumeURL}
            style={{color: 'wheat', textAlign: 'center'}}
           
            >
                 <h1 >View Resume</h1>
                 
            </Button>
            
        </div>
    )
}

export default Resume

