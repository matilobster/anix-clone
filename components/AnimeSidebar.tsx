interface SidebarProps {
    children?: React.ReactNode;
}

const AnimeSidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className='bg-[#202020] h-fit w-[319px] py-3 px-5 space-y-3'>
            {children}
        </div>
    );
};

export default AnimeSidebar;
