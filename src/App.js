import {useSelector} from "react-redux";
import './App.scss';
import {Login} from "./Pages/Login/Login";
import {Chat} from "./Pages/Chat/Chat";

function App() {

    const token = useSelector(state => state.auth.token)

  return (
    <div className="App">
        {token ? (<Chat />):(<Login />)}
    </div>
  );
}

export default App;
