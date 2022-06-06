import React, {useEffect, useState} from 'react';
import {Thesaurus} from 'thesaurus-tree';
import SearchInput from "../SearchInpit";
import {getConceptById} from "../../https/thesaurusAPI";
import Tree from "react-d3-tree";
import {Modal, Button} from "antd";

const ThesaurusElem = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeId, setActiveId] = useState('');
    const [activeConcept, setActiveConcept] = useState('');
    const [isEditMod, setIsEditMod] = useState(false);
    const [ruName, setRuName] = useState('');
    const [enName, setEnName] = useState('');
    const [description, setDescription] = useState('');



    useEffect(async ()=>{
         setActiveConcept(await getConceptById(activeId))
         setRuName(activeConcept.ru_name);
         setEnName(activeConcept.en_name);
         setDescription(activeConcept.description)
    }, [activeId])

    const orgChart = {
        name: '...',
        children: [
            {
                name: 'Хордовые',
                id:1,
                children: [
                    {
                                name: 'Земноводные',
                                children: [
                                    {
                                        name: 'Будьдог',
                                    },
                                    {
                                        name: 'Шпиц',
                                    },
                                ],

                    },{
                        name: 'Рыбы',
                        children: [
                            {
                                name: 'Будьдог',
                            },
                            {
                                name: 'Шпиц',
                            },
                        ],

                    },{
                        name: 'Млекопитающие',
                        children: [
                            {
                                name: 'Хищные',
                                children: [
                                    {
                                        name: 'Псовые',
                                        children: [
                                            {
                                                name: 'Собака',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'Грызуны',
                                children: [
                                    {
                                        name: 'Заячьи',
                                        children: [
                                            {
                                                name: 'Кролик',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Беличьи',
                                    },
                                ],
                            },
                        ],

                    },
                    ]},                   {
                name: 'Членистоногие',
                children: [
                    {
                        name: 'Насекомые',
                    },
                    {
                        name: 'Паукообразные',
                    },
                ],
            },{
                name: 'Черви',
            }
            ]}
    return(
        <div style={{ width: '100em', height: '60em', border: '1px solid black'}}>
            <Tree
                data={orgChart}
                onNodeClick={(node)=>{
                    setActiveId(node.data.id)
                    setIsModalVisible(!isModalVisible)
                }}
                collapsible={false}
            ></Tree>
            <Modal title="Basic Modal"
                   visible={isModalVisible}
                   onOk={()=>{setIsEditMod(!isEditMod)}}
                   onCancel={()=>{setIsModalVisible(false)}}
                   footer={[
                       <Button key="edit" onClick={()=>{setIsEditMod(!isEditMod)}}>
                           {isEditMod ? "Редактиировать" : "Просмотреть"}
                       </Button>,
                       <Button key="submit" type="primary" onClick={() => setIsModalVisible(false)}>
                           Отправить
                       </Button>
                   ]}
            >
                <p>Название на русском: {isEditMod ? <input value={activeConcept.ru_name} /> : activeConcept.ru_name }</p>
                <p>Название на англисйком: {isEditMod ? <input value={activeConcept.en_name} /> : activeConcept.en_name }</p>
                <p>Описание : {isEditMod ? <input value={activeConcept.description}/> : activeConcept.description === null ? "Описание отсутствует": activeConcept.description }</p>
            </Modal>
        </div>
    )
}

export default ThesaurusElem;
