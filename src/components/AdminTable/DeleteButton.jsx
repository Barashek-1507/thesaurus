import React from 'react';
import {Button} from "antd";

const DeleteButton = ({onDelete}) => (
    <Button danger onClick={onDelete}>Delete</Button>
)

export default DeleteButton;
