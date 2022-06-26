import React, {useEffect, useState} from 'react';
import {KK} from 'thesaurus-tree'
import {getThesaurusPart, getConceptById, editThesaurusElem} from "../../https/thesaurusAPI";

const ThesaurusElem = ({inputValue}) => {
    return <KK
        concept_id={inputValue}
        getOneRequest={getConceptById}
        putRequest={editThesaurusElem}
        getPartRequest={getThesaurusPart}
        isAdmin={true}
    />
}

export default ThesaurusElem;
