
import './App.css';
import Header from './components/Header/Header';
import Profile  from './components/Profile/Profile';
import NavBar from './components/Navbar/Nav';
import Friends from "./components/FriendsBar/Friends";
import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import TodoList from "./components/ToDoList/todo";
import Board from "./components/ChessBoard/Board";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header/>
            <NavBar />
            <div className = 'app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={() => <Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer />} />
                    <Route path="/friends/*"
                           element={() => <Friends/>}/>
                    <Route path="/todolist"
                           element ={() => <TodoList/>}/>
                    <Route path='/chessboard'
                           element = {() => <Board />}/>
                    </Routes>
            </div>

        </div>
      </BrowserRouter>
  );
}
export default App;
