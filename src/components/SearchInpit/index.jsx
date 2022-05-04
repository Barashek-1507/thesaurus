import React from 'react';
import {Input} from 'antd';

const {Search} = Input;
const onSearch = value => console.log(value);

function SearchInput(props) {

    return (
        <Search
            placeholder="Search word"
            enterButton
            onSearch={onSearch}
        />
    );
}

export default SearchInput;
