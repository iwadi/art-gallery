import { useState, useEffect } from 'react';
import { type GalleryItem } from '../../../../data/mock';
import Modal from './Modal/Modal';

interface Section2Props {
  data: GalleryItem[];
}

function Section_2({ data }: Section2Props) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'src/photos/gallery/404.jpg';
    target.alt = 'Image not available';
  };

  const handleCloseModal = () => setSelectedItem(null);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  return (
    <section className="section_2">
      <div className="container">
        <ul className="section_2__gallery-list">
          {data.map(item => (
            <li key={item.id} className="section_2__gallery-item" tabIndex={0}>
              <div 
                className="section_2__gallery-photo"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={item.image} 
                  alt={item.title}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <div className="section_2__item-info">
                <div className="item-info__element">
                  <div className="item-text name">
                    <h2 className="item-title">{item.title}</h2>
                    <p className="item-date">{item.date}</p>
                  </div>
                </div>
                <div className="item-info__additional">
                  <div className="item-text author">
                    <p className="item-author">{item.author}</p>
                    <p className="item-location">{item.location}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <Modal 
          selectedItem={selectedItem}
          onClose={handleCloseModal}
          onImageError={handleImageError}
        />
      </div>
    </section>
  );
}

export default Section_2;