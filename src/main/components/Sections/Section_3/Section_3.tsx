// function Section_3() {
//     return (
//     <>
//     <section className="section_3">
//     <div className="container">
//         <nav className="section_3__pagination" aria-label="Навигация по страницам">
//             <ul className="section_3__pagination-list">
//             <li className="pagination-item">
//                 <a href="#" className="pagination-link pagination prev" aria-label="Предыдущая страница">
//                 <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
//                 </svg>
//                 </a>
//             </li>
//             <li className="pagination-group">
//                 <ul className="pagination-group__list">
//                 <li className="pagination-item">
//                     <a href="#" className="pagination-link">1</a>
//                 </li>
//                 <li className="pagination-item">
//                     <a href="#" className="pagination-link">2</a>
//                 </li>
//                 <li className="pagination-item">
//                     <a href="#" className="pagination-link">3</a>
//                 </li>
//                 <li className="pagination-item">
//                     {/* <span className="pagination-ellipsis">...</span> */}
//                     <a href="#" className="pagination-link">...</a>
//                 </li>
//                 <li className="pagination-item">
//                     <a href="#" className="pagination-link">9</a>
//                 </li>
//                 </ul>
//             </li>
//             <li className="pagination-item">
//                 <a href="#" className="pagination-link pagination next" aria-label="Следующая страница">
//                 <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
//                 </svg>
//                 </a>
//             </li>
//             </ul>
//         </nav>
//     </div>
//     </section>
//     </>
//     )
// }

// export default Section_3;

interface Section3Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Section_3({ currentPage, totalPages, onPageChange }: Section3Props) {
    
    // Функция для генерации номеров страниц
    const getPageNumbers = () => {
        const pages = [];
        
        // Всегда показываем первую страницу
        pages.push(1);
        
        // Показываем точки если нужно
        if (currentPage > 3) {
        pages.push('...');
        }
        
        // Показываем текущую страницу и соседние
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (i > 1 && i < totalPages) {
            pages.push(i);
        }
        }
        
        // Показываем точки если нужно
        if (currentPage < totalPages - 2) {
        pages.push('...');
        }
        
        // Всегда показываем последнюю страницу если есть больше 1 страницы
        if (totalPages > 1) {
        pages.push(totalPages);
        }
        
        return pages;
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
        onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
        }
    };

    return (
        <>
        <section className="section_3">
            <div className="container">
            <nav className="section_3__pagination" aria-label="Навигация по страницам">
                <ul className="section_3__pagination-list">
                <li className="pagination-item">
                    <button 
                    className={`pagination-link pagination prev ${currentPage === 1 ? 'disabled' : ''}`}
                    aria-label="Предыдущая страница"
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                    >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
                    </svg>
                    </button>
                </li>
                
                <li className="pagination-group">
                    <ul className="pagination-group__list">
                    {getPageNumbers().map((page, index) => (
                        <li key={index} className={`pagination-item ${page === currentPage ? 'active' : ''}`}>
                        {page === '...' ? (
                            <span className="pagination-ellipsis">...</span>
                        ) : (
                            <button 
                            className={`pagination-link ${page === currentPage ? 'active' : ''}`}
                            onClick={() => onPageChange(page as number)}
                            >
                            {page}
                            </button>
                        )}
                        </li>
                    ))}
                    </ul>
                </li>
                
                <li className="pagination-item">
                    <button 
                    className={`pagination-link pagination next ${currentPage === totalPages ? 'disabled' : ''}`}
                    aria-label="Следующая страница"
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
                    </svg>
                    </button>
                </li>
                </ul>
            </nav>
            </div>
        </section>
        </>
    )
}

export default Section_3;