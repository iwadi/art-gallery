// import { GalleryItem } from '../../../../data/mock';
import { type GalleryItem } from '../../../../data/mock';

interface Section2Props {
    data: GalleryItem[];
}

function Section_2({ data }: Section2Props) {
    return (
        <section className="section_2">
            <div className="container">
                <ul className="section_2__gallery-list">
                    {data.map((item) => (
                        <li key={item.id} className="section_2__gallery-item">
                            <div className="section_2__gallery-photo">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="section_2__item-info">
                                <div className="item-info__element">
                                    <h2 className="item-title">{item.title}</h2>
                                    <p className="item-date">{item.date}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Section_2;