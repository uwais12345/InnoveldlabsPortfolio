import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline-white';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled,
}) => {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'outline-white'
      ? 'btn-outline-white'
      : 'btn-ghost';

  const cls = `${base} ${className}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
