import React, {useEffect} from 'react';
import Main from "./pages/Main";
import './App.css';
import 'antd/dist/antd.css';
import LoginPage from "./pages/LoginPage";
import {useDispatch, useSelector} from "react-redux";
import {authentication} from "./store/actions/userActions";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ThesaurusPage from "./pages/ThesaurusPage";
import AccountPage from "./pages/AccountPage";
import AdministrationPage from "./pages/AdministrationPage";
import LogOutPage from "./pages/LogOutPage";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(authentication())
        }
    }, [dispatch, isAuth])
    return (
        <BrowserRouter>
            {!isAuth ? (
                <Switch>
                     <Redirect from="/thesaurus" to="/login" />
                     <Route path="/login" component={LoginPage} />
                     <Redirect from="/" to="/login" />
                </Switch>
                )
                : (
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/main" component={Main} />
                        <Route path="/thesaurus" component={ThesaurusPage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/admin" component={AdministrationPage} />
                        <Route path="/signOut" component={LogOutPage}/>
                        <Redirect to="/main" />
                    </Switch>
                )}
        </BrowserRouter>
    );
}

export default App;
