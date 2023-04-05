import type { ReactElement } from 'react';

interface TotalBalanceProperties {
  totalBalance: string;
}

function TotalBalance({ totalBalance }: TotalBalanceProperties): ReactElement {
  return (
    <div className='mx-6 mt-6 flex h-32 flex-col items-center justify-center rounded-2xl bg-violet-400'>
      <div>Total Balance</div>
      <div className='text-4xl font-bold '>¥{totalBalance}</div>
    </div>
  );
}

export default TotalBalance;
