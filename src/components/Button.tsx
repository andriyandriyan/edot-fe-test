import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

type ButtonVariant = 'primary' | 'danger' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const buttonClassName: Record<ButtonVariant, string> = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300',
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300',
    outline: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200',
  };

  return (
    <button
      type="button"
      className={clsx(
        'font-medium rounded-lg text-sm px-6 py-2 shadow',
        buttonClassName[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;
