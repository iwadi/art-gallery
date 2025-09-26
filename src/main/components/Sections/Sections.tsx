// import Section_1 from "./Section_1/Section_1";
// import Section_2 from "./Section_2/Section_2";
// import Section_3 from "./Section_3/Section_3";

// function Sections() {
//     return (
//         <>
//             <Section_1 />
//             <Section_2 />
//             <Section_3 />
//         </>
//     )
// }

// export default Sections;


import { useState } from 'react';
import Section_1 from "./Section_1/Section_1";
import Section_2 from "./Section_2/Section_2";
import Section_3 from "./Section_3/Section_3";

import { mockData } from '../../../data/mock';

// Количество элементов на странице
const ITEMS_PER_PAGE = 6;

function Sections() {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Вычисляем общее количество страниц
    const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);
    
    // Вычисляем элементы для текущей страницы
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = mockData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Функция для изменения страницы
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
        <Section_1 />
        <Section_2 data={currentItems} />
        <Section_3 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
        />
        </>
    )
}

export default Sections;