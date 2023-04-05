import type { ReactElement } from 'react';

interface Properties {
  iconName: string;
  iconColorClass: string;
}

export default function IconSvg({
  iconName,
  iconColorClass
}: Properties): ReactElement {
  return (
    <svg className={`${iconColorClass}`}>
      <use xlinkHref={`/icons/icons.svg#${iconName}`} />
    </svg>
  );
}
