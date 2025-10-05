import { type GalleryItem } from '../../../../../data/mock';
import { useState, useEffect } from 'react';
import '../../../../../css/variables.scss';
import '../../../../../css/Main.scss';
import '../../../../../css/fonts.scss';
import './Modal.scss';

interface ModalProps {
  selectedItem: GalleryItem | null;
  onClose: () => void;
  onImageError: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

function Modal({ selectedItem, onClose, onImageError }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    // Ждем завершения анимации перед вызовом onClose
    setTimeout(() => {
      onClose();
    }, 300); // Должно совпадать с длительностью анимации в SCSS
  };

  // Эффект для плавного появления
  useEffect(() => {
    if (selectedItem) {
      setIsVisible(true);
      setIsClosing(false);
    } else {
      setIsVisible(false);
    }
  }, [selectedItem]);

  if (!selectedItem && !isClosing) return null;

  return (
    <div 
      className={`modal-overlay ${isVisible ? 'modal-open' : ''} ${isClosing ? 'modal-closing' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-container">
        <img
          src={selectedItem?.image}
          alt={selectedItem?.title}
          onError={onImageError}
          className="modal-image"
        />
        <div className="modal-info">
          <h3 className="item-title">{selectedItem?.title}</h3>
          <p className="item-date">{selectedItem?.date}</p>
          {selectedItem?.author && (
            <p className="item-author">Author: {selectedItem.author}</p>
          )}
          {selectedItem?.location && (
            <p className="item-location">Location: {selectedItem.location}</p>
          )}
        </div>
        <button
          onClick={handleClose}
          className="modal-close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;