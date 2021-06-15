import './App.css';
import Aside from "./components/Aside/Aside";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App(props) {
    return (
        <div className="App">
            <HeaderContainer/>
            <Aside/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
        </div>
    );
}

export default App;

//export default App;
