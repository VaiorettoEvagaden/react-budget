/* eslint-disable @typescript-eslint/no-magic-numbers */
import SubTranscation from 'components/wallet-components/SubTranscation';
import TotalBalance from 'components/wallet-components/TotalBalance';
import type { ReactElement } from 'react';
import CardItem from '../components/wallet-components/CardItem';

const transcation = [
  { value: 200, id: 1 },
  { value: 200, id: 2 },
  { value: 100, id: 3 },
  { value: 300, id: 4 },
  { value: 100, id: 5 }
];

function Wallet(): ReactElement {
  const totalBalance = 10_000;
  const incomeAmount = 12_000;
  const expenceAmount = 2000;
  return (
    <div>
      <TotalBalance totalBalance={totalBalance.toFixed(2)} />
      <div className='mx-6 mt-4 flex justify-between'>
        <SubTranscation
          amount={incomeAmount.toFixed(2)}
          type='Income'
          colorType='cyan'
          iconName='down-arrow'
        />
        <SubTranscation
          amount={expenceAmount.toFixed(2)}
          type='Expence'
          colorType='rose'
          iconName='up-arrow'
        />
      </div>
      <div className='mt-4 rounded-t-3xl bg-white p-4 text-black shadow-[0_-4px_rgba(247,247,247,0.8)]'>
        <div className='flex justify-between font-bold'>
          <div>Transcation</div>
          <div className='text-violet-400'>See All</div>
        </div>
        {transcation.map(item => (
          <CardItem amount={item.value} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Wallet;
