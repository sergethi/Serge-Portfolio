import React, { useState } from 'react';
import {FaBars, FaRegTimesCircle} from "react-icons/fa";
// import { CSSTransition } from "react-transition-group";
import MobileNav from './MobileNav'


 const Header = ({name, contactEmail})=>{

//     const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 700px)");
//     mediaQuery.addListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const handleMediaQueryChange = mediaQuery => {
//     if (mediaQuery.matches) {
//       setIsSmallScreen(true);
//     } else {
//       setIsSmallScreen(false);
//     }
//   };

//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
   
     const [open, setOpen] = useState(false);
     const closeIcon = <div  className='close-icon'><FaRegTimesCircle onClick={()=> setOpen(!open)}/> </div>
     const openIcon = <div className='burger-icon'><FaBars onClick={()=> setOpen(!open)}/> </div>
     const closeMobilMenu = () => setOpen(false)
    return(
      <div>
      <div className="header_container" id="header">
          <a className="header_container_name" href="#labding"><h1>{name}</h1></a>
          {/* <CSSTransition
           in={!isSmallScreen || isNavVisible}
           timeout={350}
           classNames="NavAnimation"
           unmountOnExit
          > */}
               <nav>
                  <ul>
                      <li><a href="#about">About</a></li>
                      <li><a href="#project">Projects</a></li>
                      <li><a href="#experience">Experiences</a></li>
                      <li><a href="#contact">Contact</a></li>
                
                  </ul>
             
                </nav>
                

          {/* </CSSTransition> */}
          <div className="mobNav">
             {open ? closeIcon : openIcon} 
             {open && <MobileNav isMobile={true} closeMobilMenu={closeMobilMenu}/>}

          </div>
          
         
          {/* <a  className = "burger-icon" onClick = {toggleNav}>
            <FaBars />    <ul>
                      <li><a href="#about">About</a></li>
                      <li><a href="#project">Projects</a></li>
                      <li><a href="#project">Experiences</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
          </a> */}
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