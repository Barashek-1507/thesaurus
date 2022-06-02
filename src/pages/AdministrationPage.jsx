import React, {useEffect, useState} from 'react';
import MainLayout from "./MainLayout";
import AdminTable from "../components/AdminTable";
import {getAllUsers} from "../https/userAPI";

const AdministrationPage = () => {
    return(
        <MainLayout>
            <AdminTable/>
        </MainLayout>
    )
}

export default AdministrationPage;