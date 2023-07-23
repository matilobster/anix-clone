import { BiSearch, BiMenu } from 'react-icons/bi';
import logo from '../public/images/anix.png';
import Image from 'next/image';
import Button from './Button';

const Header = () => {
    return (
        <div className='h-12 xl:h-14 bg-zinc-800 py-2 flex items-center'>
            <div className='px-4 w-full max-w-[1270px] mx-auto flex flex-row'>
                <div className='left-div basis-9/12 sm:basis-10/12 flex'>
                    <div className='basis-1/2 md:basis-3/12 flex gap-1'>
                        <div className='-ml-1 xl:hidden'>
                            <BiMenu size={27}></BiMenu>
                        </div>
                        <div className='flex items-center'>
                            <Image src={logo} alt='logo' height={20}></Image>
                        </div>
                    </div>
                    <div className='basis-1/2 invisible md:basis-9/12 md:visible bg-black md:-ml-4 flex items-center h-8'>
                        searchbar
                    </div>
                </div>
                <div className='right-div basis-3/12 sm:basis-1/6 flex items-center gap-4 sm:gap-3 md:justify-between'>
                    <div className='invisible sm:visible flex items-center md:basis-1/2'>
                        en/jp
                    </div>
                    <div className='basis-1/3 flex justify-end md:hidden'>
                        <BiSearch
                            size={20}
                            className='text-zinc-400 '
                        ></BiSearch>
                    </div>
                    <div className='basis-2/3 flex justify-end'>
                        <Button size='small' appearance='blue'>
                            Login
                        </Button>
                    </div>
                </div>
                {/* <div className='basis-2/12'>drop logo</div>
                <div className='basis-6/12 sm:basis-8/12 invisible md:visible bg-black w-full h-8'>
                    searchbar
                </div>
                <div className='basis-2/12 sm:basis-1/12 flex items-center'>
                    <div className='basis-1/3 invisible sm:visible'>en</div>
                    <div className='basis-1/3 invisible sm:visible'>jp</div>
                    <div className='basis-1/3 md:hidden'>
                        <BiSearch
                            size={20}
                            className='text-zinc-400 '
                        ></BiSearch>
                    </div>
                </div>

                <div className='basis-2/12 sm:basis-8/12 flex justify-end px-2 gap-2 items-center'>
                    <div className='hidden md:flex'> search anime</div>
                    <div className='hidden sm:flex'>en/jp</div>
                    <div className='flex '>
                        <BiSearch
                            size={20}
                            className='text-zinc-400 '
                        ></BiSearch>
                    </div>
                </div>
                <div className='basis-2/12 sm:basis-1/12 flex justify-end'>
                    <Button size='small' appearance='blue'>
                        Login
                    </Button>
                    <button className='bg-sky-200/90 w-full sm:w-16 h-full py-1.5 text-sm text-zinc-800 rounded-sm'>
                        Login
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
