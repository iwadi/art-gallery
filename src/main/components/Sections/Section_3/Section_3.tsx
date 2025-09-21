function Section_3() {
    return (
    <>
    <section className="section_3">
    <div className="container">
        <nav className="section_3__pagination" aria-label="Навигация по страницам">
            <ul className="section_3__pagination-list">
            <li className="pagination-item">
                <a href="#" className="pagination-link pagination prev" aria-label="Предыдущая страница">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
                </svg>
                </a>
            </li>
            <li className="pagination-group">
                <ul className="pagination-group__list">
                <li className="pagination-item">
                    <a href="#" className="pagination-link">1</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="pagination-link">2</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="pagination-link">3</a>
                </li>
                <li className="pagination-item">
                    {/* <span className="pagination-ellipsis">...</span> */}
                    <a href="#" className="pagination-link">...</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="pagination-link">9</a>
                </li>
                </ul>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link pagination next" aria-label="Следующая страница">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.312255 0.283372C0.487119 0.0696493 0.80213 0.0381482 1.01585 0.213012L7.61585 5.61301C7.73192 5.70798 7.79923 5.85002 7.79923 5.99999C7.79923 6.14996 7.73192 6.29201 7.61585 6.38697L1.01585 11.787C0.80213 11.9618 0.487119 11.9303 0.312255 11.7166C0.137391 11.5029 0.168893 11.1879 0.382615 11.013L6.50964 5.99999L0.382615 0.986969C0.168892 0.812106 0.137391 0.497094 0.312255 0.283372Z" fill="currentColor"/>
                </svg>
                </a>
            </li>
            </ul>
        </nav>
    </div>
    </section>
    </>
    )
}

export default Section_3;