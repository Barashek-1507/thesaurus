import React, {useEffect, useState} from 'react';
import {Thesaurus} from 'thesaurus-tree';
import SearchInput from "../SearchInpit";
import {getConceptById} from "../../https/thesaurusAPI";
import Tree from "react-d3-tree";
import {Modal, Button} from "antd";

const ThesaurusElem = () => {
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
    return <Thesaurus data={orgChart} requestToServer={getConceptById} />

}

export default ThesaurusElem;
