interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className='h-full w-[319px] space-y-3 bg-[#202020] p-4'>
            {children}
        </div>
    );
};

export default Sidebar;
