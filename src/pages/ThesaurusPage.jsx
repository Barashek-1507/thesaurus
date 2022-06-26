import React, {useState} from 'react';
import ThesaurusElem from "../components/Thesaurus";
import MainLayout from "./MainLayout";
import SearchInput from "../components/SearchInpit";

const ThesaurusPage = () => {
    const [inputValue, setInputValue]=useState('');
    return(
        <MainLayout>
            <SearchInput setValue={setInputValue} />
            <ThesaurusElem inputValue={inputValue}/>
        </MainLayout>
    )
}

export default ThesaurusPage;
