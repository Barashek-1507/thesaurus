import React from 'react';
import ThesaurusElem from "../components/Thesaurus";
import MainLayout from "./MainLayout";
import SearchInput from "../components/SearchInpit";

const ThesaurusPage = () => {
    return(
        <MainLayout>
            <SearchInput />
            <ThesaurusElem/>
        </MainLayout>
    )
}

export default ThesaurusPage;
