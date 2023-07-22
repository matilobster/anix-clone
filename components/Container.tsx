import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
    return (
        <div
            className={`flex flex-row h-full w-full p-4 xl:px-10 max-w-[1270px] mx-auto 2xl:px-0`}
        >
            {children ? children : <></>}
        </div>
    );
};

export default Container;
