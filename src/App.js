
import './App.css';
import Header from './components/Header/Header';
import Profile  from './components/Profile/Profile';
import NavBar from './components/Navbar/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/FriendsBar/Friends";
import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import TodoList from "./components/ToDoList/todo";
import Board from "./components/ChessBoard/Board";
import {clickSquare, nextMove} from "./components/state/state";

const App = (props) => {

  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header/>
            <NavBar />
            <div className = 'app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile store = {props.store}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                                             store = {props.store}/>} />
                    <Route path="/friends/*"
                           element={<Friends state = {props.state.sidebarPage} />}/>
                    <Route path="/todolist"
                           element ={<TodoList
                               todoListPage = {props.state.todoListPage}
                               dispatch = {props.dispatch}
                           />}/>
                    <Route path='/chessboard'
                           element = {
                            <Board
                                chessPage = {props.state.chessPage}
                                dispatch = {props.dispatch}
                            />}/>


                </Routes>


                {/*<RouterProvider router={router} />*/}
            </div>

        </div>
      </BrowserRouter>
  );
}





export default App;
