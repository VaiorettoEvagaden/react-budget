import IconSvg from 'components/IconSvg';
import type { ReactElement } from 'react';

// interface HeaderProperties {}

function Header(): ReactElement {
  return (
    <div className='mx-6 mt-6 flex items-center'>
      <div className='flex-grow text-lg font-bold text-black'>My Wallet</div>

      <IconSvg iconName='notification' iconColorClass='bg-slate w-8 h-8' />
      <IconSvg iconName='more' iconColorClass='bg-slate w-8 h-8' />
    </div>
  );
}

export default Header;
