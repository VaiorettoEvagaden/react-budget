import type { ReactElement } from 'react';
import { useState } from 'react';
import IconSvg from './IconSvg';
import Modal from './Modal';

// interface ButtonAddProperties {}

function ButtonAdd(): ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const onClickHandler = (): void => {
    setIsVisible(true);
  };
  const onCloseHandler = (): void => {
    setIsVisible(false);
  };
  return (
    <>
      <button
        type='button'
        onClick={onClickHandler}
        className='fixed bottom-24 right-4 flex  h-16 w-16 items-center justify-center rounded-full bg-violet-400 shadow-lg'
      >
        <IconSvg iconName='add' iconColorClass='fill-white w-8 h-8' />
      </button>
      <Modal isOpen={isVisible} onClose={onCloseHandler}>
        <div>111</div>
      </Modal>
    </>
  );
}

export default ButtonAdd;
