import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {signOut} from "../store/actions/userActions";
import {useDispatch} from "react-redux";

const LogOutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signOut())
        window.location.reload();
    },[])
    return(
        <Redirect to="/login" />
    )
}

export default LogOutPage;