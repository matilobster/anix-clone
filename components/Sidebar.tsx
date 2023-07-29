interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className='bg-[#202020] h-full w-[319px] p-4 space-y-3'>
            {children}
        </div>
    );
};

export default Sidebar;
