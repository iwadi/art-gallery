// import glassDark from '../../../../photos/svg/glass-dark.svg';
// import glassLight from '../../../../photos/svg/glass-light.svg';
// import deleteDark from '../../../../photos/svg/delete-dark.svg';
// import deleteLight from '../../../../photos/svg/delete-light.svg'
// import { useSearch } from '../../../Functions/Functions';
// import { useTheme } from '../../../context/ThemeContext';

// function Section_1() {
//     const { searchValue, handleInputChange, handleClearInput } = useSearch();
//     const { isDark, toggleTheme } = useTheme();
//     const handleCombinedClick = (e) => {
//         handleClearInput(e);
//         toggleTheme(e);
//     };

//     return (
//     <>
//     <section className="section_1">
//     <div className="container">
//         <div className="section_1__box_search-engine">
//         <label className="section_1__search-engine" htmlFor="">
//             <div className="search-section">
//             <button className="label__button search">
//                 <img src={glass} alt="glass" />
//             </button>
//             <input
//                 className="section_1__input"
//                 type="text"
//                 placeholder="Painting title"
//                 value={searchValue}
//                 onChange={handleInputChange}
//             />
//             </div>
//             {searchValue && (
//             <button className="label__button delete" onClick={handleCombinedClick}>
                
//                 {isDark ? <img src={deleteDark} alt="del" /> : <img src={deleteLight} alt="moon" />}
//             </button>
//             )}
//         </label>
//         </div>
//     </div>
//     </section>
//     </>
//     )
// }

// export default Section_1;

import glassDark from '../../../../photos/svg/glass-dark.svg';
import glassLight from '../../../../photos/svg/glass-light.svg';
import deleteDark from '../../../../photos/svg/delete-dark.svg';
import deleteLight from '../../../../photos/svg/delete-light.svg';
import { useSearch } from '../../../Functions/Functions';
import { useTheme } from '../../../context/ThemeContext';

function Section_1() {
    const { searchValue, handleInputChange, handleClearInput } = useSearch();
    const { isDark } = useTheme();

    const handleClear = (e: React.MouseEvent) => {
        e.preventDefault();
        handleClearInput();
    };

    return (
    <>
    <section className="section_1">
    <div className="container">
        <div className="section_1__box_search-engine">
            <label className="section_1__search-engine">
                <div className="search-section">
                    <button className="label__button search" type="button" aria-label="Search">
                        <img 
                            src={isDark ? glassLight : glassDark} 
                            alt="Search icon" 
                        />
                    </button>
                    <input
                        className="section_1__input"
                        type="text"
                        placeholder="Painting title"
                        value={searchValue}
                        onChange={handleInputChange}
                        aria-label="Search paintings"
                    />
                </div>
                {searchValue && (
                    <button 
                        className="label__button delete" 
                        onClick={handleClear}
                        aria-label="Clear search"
                        type="button"
                    >
                        <img 
                            src={isDark ? deleteLight : deleteDark} 
                            alt="Clear search" 
                        />
                    </button>
                )}
            </label>
        </div>
    </div>
    </section>
    </>
    );
}

export default Section_1;