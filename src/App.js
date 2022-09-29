import logo from './logo.svg';
import './App.css';
import AddWord from "./components/AddWord";
import Game from "./components/Game";
import Nav from "./components/Nav";


function App() {
    return (
        <div className="App">
            <Nav/>
            <div className="routes_wrapper">
                <AddWord/>
            </div>
            <Game/>


        </div>
    );
}

export default App;
