import IconSvg from 'components/IconSvg';
import type { ReactElement } from 'react';

interface CardItemProperties {
  amount: number;
}

function CardItem({ amount }: CardItemProperties): ReactElement {
  return (
    <div
      data-testid='card-item'
      className='my-1 flex items-center justify-between'
    >
      <div className='flex items-center text-sm'>
        <IconSvg iconName='donation' iconColorClass='fill-cyan-400 w-10 h-10' />
        <div className='ml-2 flex flex-col'>
          <span>Donation</span>
          <span className='text-slate-400'>4 Apr 2020</span>
        </div>
      </div>
      <div className='text-rose-400'>{amount}</div>
    </div>
  );
}

export default CardItem;
