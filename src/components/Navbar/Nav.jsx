import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return  <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/friends'>Friends</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/todolist'>To Do List</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={'/chessboard'}> Chess Board </NavLink>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
  </nav>

}

export default NavBar;