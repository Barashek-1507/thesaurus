import React from 'react';
import AsyncSelect from 'react-select/async';
import {getConceptByWord} from "../../https/thesaurusAPI";
const onSearch = value => console.log(value);

function SearchInput() {
    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(getConceptByWord(inputValue));
            }, 1000);
        });

    return (
        <AsyncSelect
            isClearable
            isSearchable={true}
            loadOptions={promiseOptions}
        />
    );
}

export default SearchInput;
