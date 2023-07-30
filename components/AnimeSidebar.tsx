interface SidebarProps {
    children?: React.ReactNode;
}

const AnimeSidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className='h-fit w-[319px] space-y-3 bg-[#202020] px-5 py-3'>
            {children}
        </div>
    );
};

export default AnimeSidebar;
