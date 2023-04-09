import type { ReactElement } from 'react';
import { useState } from 'react';
// import './Modal.css';

interface ModalProperties {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

function Modal({ isOpen, onClose, children }: ModalProperties): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  const onClickHandler = (): void => {
    setIsVisible(false);
    // if (onClose) {
    onClose();
    // }
  };
  // const handleKeyDown = onClick;

  return (
    <div className={`modal ${isVisible ? 'modal--visible' : ''}`}>
      <div
        role='button'
        className='modal__overlay'
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        tabIndex={0}
      >
        123
      </div>
      <div className='modal__content'>{children}</div>
    </div>
  );
}

export default Modal;
