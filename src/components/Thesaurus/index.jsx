import React, { useEffect } from 'react';
import Thesaurus from 'thesaurus-tree';
import Tree from 'react-d3-tree';
import SearchInput from "../SearchInpit";



const ThesaurusElem = () => {
    useEffect(() => {
        console.log(Thesaurus)
    }, []);

    const orgChart = {
        name: '...',
        children: [
            {
                name: 'Хордовые',
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
            <Thesaurus data={orgChart} nodeSize={{x: 120, y: 120}}></Thesaurus>
        </div>
    )
}

export default ThesaurusElem;
