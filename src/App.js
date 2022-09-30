import logo from './logo.svg';
import './App.css';
import AddWord from "./components/AddWord";
import Game from "./components/Game";
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Nav/>
            <div className="routes_wrapper">
                <Routes>
                    <Route path='/' element={<AddWord/>}/>
                    <Route path='/game' element={<Game/>}/>
                </Routes>
            </div>
            {/*<Game/>*/}


        </div>
    );
}

export default App;
