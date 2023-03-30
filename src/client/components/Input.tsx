import React from 'react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ComponentColors, ComponentSizes } from './types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    bordered?: boolean;
	variant?: ComponentColors;
    sizing?: ComponentSizes;
}

const Input = ({
	value,
	placeholder,
	type,
	className,
	variant,
	bordered = true,
    sizing,
	...rest
}: InputProps): JSX.Element => {
	const classes = twMerge(
		'input',
		className,
		clsx({
			'input-bordered': bordered,
            [`input-${variant}`]: variant,
            [`input-${sizing}`]: sizing
		})
	);
	return (
		<input {...rest} type={type} placeholder={placeholder} value={value} className={classes} />
	);
};

export default Input;