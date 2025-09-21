import { useState } from 'react';

export const useSearch = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleClearInput = () => {
        setSearchValue('');
    };

    return {
        searchValue,
        handleInputChange,
        handleClearInput
    };
};