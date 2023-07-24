import Container from './Container';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <Container>
            <div className='flex gap-3 w-full '>
                <div className='w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                    <div>{children}</div>
                </div>
                <div className='xl:basis-2/12 hidden xl:flex'>
                    <div className='bg-zinc-800 h-full w-[319px]'>sidebar</div>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;
