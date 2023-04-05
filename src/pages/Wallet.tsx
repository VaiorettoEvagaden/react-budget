/* eslint-disable @typescript-eslint/no-magic-numbers */
import IconSvg from 'components/IconSvg';
import type { ReactElement } from 'react';
import CardItem from './CardItem';

const transcation = [
  { value: 200, id: 1 },
  { value: 200, id: 2 },
  { value: 100, id: 3 },
  { value: 300, id: 4 },
  { value: 100, id: 5 }
];

function Wallet(): ReactElement {
  return (
    <div>
      <div className='mx-6 mt-6 flex h-32 flex-col items-center justify-center rounded-2xl bg-violet-400'>
        <div>Total Balance</div>
        <div className='text-4xl font-bold '>¥10000.00</div>
      </div>
      <div className='mx-6 mt-4 flex justify-between'>
        <div className='flex h-32 basis-[48%] flex-col items-center justify-center rounded-2xl border'>
          <div className='rounded-full bg-cyan-100 p-1'>
            <IconSvg
              iconName='up-arrow'
              iconColorClass='fill-cyan-400 h-8 w-8'
            />
          </div>
          <div className='my-1 text-sm text-slate-400'>Income</div>
          <div className='text-2xl font-bold text-slate-600'>¥12000.00</div>
        </div>
        <div className='flex h-32 basis-[48%] flex-col items-center justify-center rounded-2xl border'>
          <div className='rounded-full bg-rose-100 p-1'>
            <IconSvg
              iconName='down-arrow'
              iconColorClass='fill-rose-400 h-8 w-8'
            />
          </div>
          <div className='my-1 text-sm text-slate-400'>Expence</div>
          <div className='text-2xl font-bold text-slate-600'>¥2000.00</div>
        </div>
      </div>
      <div className='mt-4 rounded-t-3xl bg-white p-4 text-black shadow-[0_-4px_rgba(247,247,247,0.8)]'>
        <div className='flex justify-between'>
          <div className='font-bold '>Transcation</div>
          <div className='font-bold '>See All</div>
        </div>
        {transcation.map(item => (
          <CardItem amount={item.value} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Wallet;
