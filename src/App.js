
import './App.css';
import Header from './components/Header/Header';
import Profile  from './components/Profile/Profile';
import NavBar from './components/Navbar/Nav';
import Friends from "./components/FriendsBar/Friends";
import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import Board from "./components/ChessBoard/Board";
import Dialogs from "./components/Dialogs/Dialogs";
import Todolist from "./components/ToDoList/todo";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header/>
            <NavBar />
            <div className = 'app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs />} />
                    <Route path="/friends/*"
                           element={<Friends/>}/>
                    <Route path="/todolist"
                           element ={<Todolist/>}/>
                    <Route path='/chessboard'
                           element = { <Board />}/>
                    </Routes>
            </div>

        </div>
      </BrowserRouter>
  );
}
export default App;
