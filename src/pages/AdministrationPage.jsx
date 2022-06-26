import React, {useEffect, useState} from 'react';
import MainLayout from "./MainLayout";
import AdminTable from "../components/AdminTable";
import {getAllUsers} from "../https/userAPI";
import {Tabs} from "antd";
import CreateConcept from "../components/AdminTable/CreateConcept";

const { TabPane } = Tabs;

const AdministrationPage = () => {
    return(
        <MainLayout>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Таблица пользователей" key="1">
                    <AdminTable/>
                </TabPane>
                <TabPane tab="Добавлениие слова" key="2">
                     <CreateConcept />
                </TabPane>
            </Tabs>
        </MainLayout>
    )
}

export default AdministrationPage;