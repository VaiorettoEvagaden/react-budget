import IconSvg from 'components/IconSvg';
import type { ReactElement } from 'react';

interface SubTranscationProperties {
  amount: string;
  type: string;
  colorType: string;
  iconName: string;
}

function SubTranscation({
  amount,
  type,
  colorType,
  iconName
}: SubTranscationProperties): ReactElement {
  const iconColorClass = `fill-${colorType}-400`;
  const iconBgColorClass = `bg-${colorType}-100`;
  return (
    <div className='flex h-32 basis-[48%] flex-col items-center justify-center rounded-2xl border'>
      <div className={`rounded-full p-1 ${iconBgColorClass}`}>
        <IconSvg
          iconName={iconName}
          iconColorClass={`h-8 w-8 ${iconColorClass}`}
        />
      </div>
      <div className='my-1 text-sm text-slate-400'>{type}</div>
      <div className='text-2xl font-bold text-slate-600'>¥{amount}</div>
    </div>
  );
}

export default SubTranscation;
