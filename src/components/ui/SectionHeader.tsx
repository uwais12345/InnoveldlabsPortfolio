import type { FC } from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: FC<SectionHeaderProps> = ({
  tag,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
}) => (
  <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {tag && <div className="badge mb-4">{tag}</div>}
    <h2 className="section-title mb-4">
      {title}{' '}
      {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
    </h2>
    {subtitle && (
      <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
