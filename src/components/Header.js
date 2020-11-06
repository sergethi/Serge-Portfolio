import React, { useState, useEffect } from 'react';
import {FaBars} from "react-icons/fa";
import { CSSTransition } from "react-transition-group";


//import {Link} from 'react-router-dom'

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import { Link, animateScroll as scroll } from "react-scroll";


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       flexGrow: 1,
      
//     },
//     title: {
//       marginRight: theme.spacing(2),
//       flexGrow: 1,
//     },
//   }));

const Header = ({name, contactEmail})=>{

    const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
   


    return(
      <div>
      <div className="header_container" id="header">
          <a className="header_container_name" href="#labding"><h1>{name}</h1></a>
          <CSSTransition
           in={!isSmallScreen || isNavVisible}
           timeout={350}
           classNames="NavAnimation"
           unmountOnExit
          >
               <nav>
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#project">Projects</a></li>
                  <li><a href="#project">Experiences</a></li>
                  <li><a href="#contact">Contact</a></li>
                  {/* <li>
                  

                  </li> */}
                  {/* <li><a href={`mailto:${contactEmail}`}>contact</a></li> */}
              </ul>
             
          </nav>

          </CSSTransition>
         
          <a  className = "burger-icon" onClick = {toggleNav}>
            <FaBars />
          </a>
      </div>
  </div>
      //   <div className={classes.root}>
      //   <AppBar position="static">
      //     <Toolbar>
      //       {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      //         <MenuIcon />
      //       </IconButton> */}
      //       <Typography variant="h6" align="left" className={classes.title}>
      //       Serge
      //     </Typography>
            
      //       <Button color="inherit"
      //       >
      //           About
      //           </Button>
      //       <Button color="inherit">Projects</Button>
      //       <Button color="inherit">Experiences</Button>
      //       <Button color="inherit">Contact</Button>
      //     </Toolbar>
          
      //   </AppBar>
      // </div>
        // <div>
        //     <div className="header_container">
        //         <Link to="/"><h1>{name}.</h1></Link>
        //         <nav>
        //             <ul>
        //                 <li><Link to="/about">About</Link></li>
        //                 <li><Link to="/project">Projects</Link></li>
        //                 <li><Link to="/experience">Experience</Link></li>
        //                 <li><Link to="/contact">Contact</Link></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </div>
        
    )
}

export default Header