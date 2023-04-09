import type { ReactElement } from 'react';
// import './Modal.css';

interface ModalProperties {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

function Modal({ isOpen, onClose, children }: ModalProperties): ReactElement {
  // const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  const onClickHandler = (): void => {
    // setIsVisible(false);
    // if (onClose) {
    onClose();
    // }
  };
  // const handleKeyDown = onClick;

  return (
    <div
      role='button'
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      tabIndex={0}
      className={`${
        isOpen ? 'visible' : 'invisible'
      } fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50 `}
    >
      <div className='h-1/2 w-1/2 bg-white'>{children}</div>
    </div>
  );
}

export default Modal;
