interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className='bg-zinc-800 h-full w-[319px] text-center'>
            <div className='top flex justify-center items-center h-14'>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
