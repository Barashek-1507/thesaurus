import React, {useEffect, useState} from 'react';
import MainLayout from "./MainLayout";
import {useSelector} from "react-redux";
import {Card} from "antd";
import {getByAuthor} from "../https/thesaurusAPI";

const AccountPage = () => {

    const [words, setWords] = useState([])

    const user_id = useSelector(state => state.user.id);

    useEffect(async () => {
        setWords(await getByAuthor(user_id))
    }, [])

    const convertRole = (role) => {
        let string;
        switch (role) {
            case "ADMIN":
                string = "Администратор"
                break
            case "USER":
                string = "Пользователь"
                break
            case "DIALECTOLOGIST":
                string = "Диалектолог"
                break
        }
        return string
    }

    const user = useSelector(state => state.user);
    return(
        <MainLayout>
            <div style={{display: "flex", flexDirection: "row"}}>
            <Card title="Информация о пользователе" style={{ maxHeight: 200, width: 300, marginRight: "100px" }}>
                <p>Имя: {user.name}</p>
                <p>Фамилия: {user.lastname}</p>
                <p>Роль: {convertRole(user.role)}</p>
            </Card>
            <Card title="Добавленные мною слова" style={{ width: 800 }}>
                {words.map((word) => (
                    <div style={{margin: "10px", border: '1px solid black', padding: "5px"}}>
                        <p>Название на русском: {word.ru_name}</p>
                        <p>Описание: {word.description}</p>
                    </div>
                ))}
            </Card>
            </div>
        </MainLayout>
    )
}

export default AccountPage;