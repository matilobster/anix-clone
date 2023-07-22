import { BiSearch } from 'react-icons/bi';

const Header = () => {
    return (
        <div className='xl:h-14 h-12 bg-zinc-800 py-2'>
            <div className='px-4 xl:px-10 max-w-[1270px] mx-auto 2xl:px-0 flex flex-row items-center gap-2'>
                <div className='basis-2/12'>drop</div>
                <div className='basis-2/12'>logo</div>
                <div className='basis-6/12 flex justify-end px-2'>
                    <BiSearch size={20} className='text-zinc-400 '></BiSearch>
                </div>
                <div className='basis-2/12'>
                    <button className='bg-sky-200/80 w-full h-full py-1.5 text-sm text-zinc-800 rounded-sm'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
