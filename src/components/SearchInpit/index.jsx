import React from 'react';
import AsyncSelect from 'react-select/async';
import {getConceptByWord} from "../../https/thesaurusAPI";

function SearchInput({setValue}) {
    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(getConceptByWord(inputValue));
            }, 1000);
        });

    return (
        <AsyncSelect
            onChange={(label) => setValue(label.value)}
            isClearable
            isSearchable={true}
            loadOptions={promiseOptions}
        />
    );
}

export default SearchInput;
