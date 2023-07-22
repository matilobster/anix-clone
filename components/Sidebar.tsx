import Container from './Container';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <Container>
            <div className='w-full flex gap-3'>
                <div className='xl:basis-10/12 w-full'>
                    <main className=''>{children}</main>
                </div>
                <div className='xl:basis-2/12 hidden xl:flex'>
                    <div className='bg-zinc-800 h-full w-[319px]'>sidebar</div>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;
