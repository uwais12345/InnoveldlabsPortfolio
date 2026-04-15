import type { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  onClick?: () => void;
}

const Card: FC<CardProps> = ({ children, className = '', featured, onClick }) => (
  <div
    onClick={onClick}
    className={`card-base p-8 ${featured ? 'border-indigo-300 ring-2 ring-indigo-100' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

export default Card;
