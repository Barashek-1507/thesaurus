import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {deleteUser, getAllUsers} from "../../https/userAPI";
import DeleteButton from "./DeleteButton";

const AdminTable = () => {
    const [data, setData] = useState([])
    useEffect(async () => {
        const data = await getAllUsers();
        data.forEach((user) => {
            user.key = user.user_id
        })
        setData(data)
    }, [data])
    const onHandleDelete = async (id) => {
        await deleteUser(id)
        setData(data.filter(item => item.user_id !== id))
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'user_id',
            key: 'user_id',
            sorter: (a, b) => a.user_id.length - b.user_id.length,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Lastname',
            dataIndex: 'last_name',
            key: 'last_name',
            sorter: (a, b) => a.last_name.length - b.last_name.length,
        },
        {
            title: 'Login',
            dataIndex: 'username',
            key: 'username',
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            filters: [
                {
                    text: 'USER',
                    value: 'USER',
                },
                {
                    text: 'ADMIN',
                    value: 'ADMIN',
                },
            ],
            onFilter: (value, record) => record.role.indexOf(value) === 0,
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => (<DeleteButton onDelete={() => onHandleDelete(record.user_id)} />),
        },
    ]
    return(
        <Table dataSource={data} columns={columns}/>
    )
}

export default AdminTable;