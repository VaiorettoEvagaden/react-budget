import type { ReactElement } from 'react';
import IconSvg from './IconSvg';

const footerIcons = [
  { title: 'Wallet' },
  { title: 'Report' },
  { title: 'Planning' },
  { title: 'Account' }
];

export default function Footer(): ReactElement {
  return (
    <div className='fixed bottom-0 flex h-20 w-full items-center justify-around bg-white'>
      {footerIcons.map(item => (
        <div
          className='flex flex-col items-center justify-center'
          key={item.title}
        >
          <IconSvg
            iconName={item.title}
            iconColorClass='fill-slate-400 w-5 h-5'
          />
          <div className='mt-1 text-slate-400'>{item.title}</div>
        </div>
      ))}
    </div>
  );
}
