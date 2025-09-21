// import logoDark from '../../../photos/logo/logo-dark.png';
// import logoLight from '../../../photos/logo/logo-light.png'
// import moon from '../../../photos/svg/moon.svg';
// import sun from '../../../photos/svg/sun.svg';
// import { useTheme } from '../../context/ThemeContext';

// function Header() {
//     const { isDark, toggleTheme } = useTheme();

//     return (
//     <>
//     <header className="header">
//     <div className="container">
//         <div className="header__content">
//         <div className="header__logo">
//             {isDark ? <img src={logoLight} alt="framework team" /> : <img src={logoDark} alt="framework team" />}
//         </div>
//         {/* theme-toggle */}
//         <button className="header__button" onClick={toggleTheme}>
//             {isDark ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}
//         </button>
//         </div>
//     </div>
//     </header>
//     </>
//     )
// }

// export default Header;


import logoDark from '../../../photos/logo/logo-dark.png';
import logoLight from '../../../photos/logo/logo-light.png';
import moon from '../../../photos/svg/moon.svg';
import sun from '../../../photos/svg/sun.svg';
import { useTheme } from '../../context/ThemeContext';

function Header() {
    const { isDark, toggleTheme } = useTheme();

    return (
    <>
    <header className="header">
    <div className="container">
        <div className="header__content">
            <div className="header__logo">
                <a href="#">
                <img
                    src={isDark ? logoLight : logoDark}
                    alt="framework team"
                />
                </a>
            </div>
            <button className="header__button" onClick={toggleTheme} aria-label="Toggle theme">
                <img
                    src={isDark ? sun : moon}
                    alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
                />
            </button>
        </div>
    </div>
    </header>
    </>
    );
}

export default Header;