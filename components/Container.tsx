import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
    return (
        <div
            className={`flex flex-row h-full w-full p-4 max-w-[1270px] mx-auto`}
        >
            {children ? children : <></>}
        </div>
    );
};

export default Container;
