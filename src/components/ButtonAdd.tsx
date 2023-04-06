import type { ReactElement } from 'react';
import IconSvg from './IconSvg';

// interface ButtonAddProperties {}

function ButtonAdd(): ReactElement {
  return (
    <button
      type='button'
      className='fixed bottom-24 right-4 flex  h-16 w-16 items-center justify-center rounded-full bg-violet-400 shadow-lg'
    >
      <IconSvg iconName='add' iconColorClass='fill-white w-8 h-8' />
    </button>
  );
}

export default ButtonAdd;