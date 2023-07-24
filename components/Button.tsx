'use client';

import { cloneElement, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Size = 'small' | 'medium' | 'big';

type Appearance = 'blue' | 'gray' | 'delete';

type Props = {
    children?: ReactNode | string;
    size: Size;
    appearance: Appearance;
    disabled?: boolean;
    icon?: ReactElement;
    block?: boolean;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    index?: number;
};

const Button = ({
    children,
    size,
    appearance,
    disabled,
    icon,
    block,
    className,
    style,
    href,
    index,
    onClick,
    ...rest
}: // eslint-disable-next-line sonarjs/cognitive-complexity
Props): JSX.Element => {
    const clonedIcon = icon
        ? cloneElement(icon, { size: iconSizeBySizeProp[size] })
        : null;
    const Component = href ? 'a' : 'button';

    const button = (
        <Component
            className={twMerge(
                'rounded-sm flex justify-center items-center min-w-0 h-9',
                // clonedIcon && children ? 'justify-start' : 'justify-center',
                block && children ? 'w-full' : null,
                disabled ? 'opacity-50 cursor-not-allowed' : null,
                buttonBackgroundByAppearanceProp[appearance],
                disabled
                    ? buttonBackgroundDisabledByAppearanceProp[appearance]
                    : buttonBackgroundInteractionByAppearanceProp[appearance],
                disabled
                    ? null
                    : buttonTextInteractionByAppearanceProp[appearance],
                disabled ? null : borderInteractionByAppearanceProp[appearance],
                children ? buttonSpacingBySizeProp[size] : null,
                children ? buttonWidthBySizeProp[size] : null,
                clonedIcon && !children
                    ? iconOnlyButtonWidthBySizeProp[size]
                    : null,
                textColorByAppearanceProp[appearance],
                borderByAppearanceProp[appearance],
                className
            )}
            onClick={(e) => {
                disabled ? e.preventDefault() : onClick && onClick();
            }}
            style={style}
            {...rest}
        >
            {clonedIcon ? <div className='flex-none'>{clonedIcon}</div> : null}
            {children ? (
                <div
                    className={twMerge(
                        'truncate',
                        textSizeBySizeProp[size],
                        textWeightBySizeProp[size]
                    )}
                >
                    {children}
                </div>
            ) : null}
        </Component>
    );

    if (href) {
        return <Link href={href}>{button}</Link>;
    }

    return button;
};

const buttonBackgroundByAppearanceProp: Record<Appearance, string> = {
    blue: 'bg-[#95b6d0]',
    gray: 'bg-[#4c4c4c]',
    delete: 'bg-red-500',
};

const buttonBackgroundDisabledByAppearanceProp: Record<Appearance, string> = {
    blue: 'cursor-not-allowed',
    gray: 'cursor-not-allowed',
    delete: 'cursor-not-allowed',
};

const buttonBackgroundInteractionByAppearanceProp: Record<Appearance, string> =
    {
        blue: 'transition duration-150 hover:bg-[#b1c9dd] active:bg-[#b1c9dd]',
        gray: 'transition duration-150 hover:bg-[#6c6c6c] active:bg-[#6c6c6c]',
        delete: 'transition duration-150 hover:bg-red-400 active:bg-red-600',
    };

const buttonTextInteractionByAppearanceProp: Record<Appearance, string> = {
    blue: 'hover:text-zinc-900 active:text-zinc-900',
    gray: 'hover:text-white active:text-white',
    delete: 'hover:text-white active:text-white',
};

const textColorByAppearanceProp: Record<Appearance, string> = {
    blue: 'text-zinc-900',
    gray: 'text-white',
    delete: 'text-white',
};

const borderByAppearanceProp: Record<Appearance, string> = {
    blue: 'border-[#95b6d0]',
    gray: 'border-gray-500',
    delete: 'border-red-500',
};

const borderInteractionByAppearanceProp: Record<Appearance, string> = {
    blue: 'hover:border-blue-400 active:border-blue-600',
    gray: 'hover:border-gray-400 active:border-gray-600',
    delete: 'hover:border-red-400 active:border-red-600',
};

const buttonSpacingBySizeProp: Record<Size, string> = {
    small: 'gap-1',
    medium: 'gap-1',
    big: 'px-16 space-x-16',
};

const buttonWidthBySizeProp: Record<Size, string> = {
    small: 'w-16',
    medium: 'w-32',
    big: 'w-40',
};

const iconOnlyButtonWidthBySizeProp: Record<Size, string> = {
    small: 'w-36',
    medium: 'w-44',
    big: 'w-60',
};

const textSizeBySizeProp: Record<Size, string> = {
    small: 'text-sm',
    medium: 'text-sm',
    big: 'text-sm',
};

const textWeightBySizeProp: Record<Size, string> = {
    small: 'font-normal',
    medium: 'font-normal',
    big: 'font-semibold',
};

const iconSizeBySizeProp: Record<Size, number> = {
    small: 14,
    medium: 15,
    big: 28,
};

export default Button;
