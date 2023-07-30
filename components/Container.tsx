import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
    return (
        <div
            className={`mx-auto flex h-full w-full max-w-[1270px] flex-row p-4`}
        >
            {children ? children : <></>}
        </div>
    );
};

export default Container;
