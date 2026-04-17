import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-yellow-400 text-zinc-900 hover:border-1 hover:text-zinc-100 hover:bg-transparent',
  secondary: 'bg-yellow-400 text-zinc-900 hover:border-1 hover:text-zinc-100 hover:bg-transparent',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
