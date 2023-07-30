import { BiSearch, BiMenu } from 'react-icons/bi';
import logo from '../public/images/anix.png';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='sticky top-0 z-40 flex h-12 w-full items-center bg-[#191919] py-2 shadow-lg shadow-[#151515] xl:h-14'>
            <div className='mx-auto flex w-full max-w-[1270px] flex-row px-4'>
                <div className='left-div flex basis-9/12 sm:basis-10/12'>
                    <div className='flex basis-1/2 items-center gap-1 md:basis-3/12'>
                        <div className='-ml-1 xl:hidden'>
                            <BiMenu size={27}></BiMenu>
                        </div>
                        <div className='flex items-center'>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt='logo'
                                    height={24}
                                ></Image>
                            </Link>
                        </div>
                    </div>
                    <div className='invisible flex basis-1/2 items-center md:visible md:-ml-4 md:basis-9/12'>
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div className='right-div flex basis-3/12 items-center gap-4 sm:basis-1/6 sm:gap-3 md:justify-between'>
                    <div className='invisible flex items-center text-sm sm:visible md:basis-1/2'>
                        EN/JP
                    </div>
                    <div className='flex basis-1/3 justify-end md:hidden'>
                        <BiSearch
                            size={20}
                            className='text-zinc-400 '
                        ></BiSearch>
                    </div>
                    <div className='flex basis-2/3 justify-end'>
                        <Button size='small' appearance='blue'>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
