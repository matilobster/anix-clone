import { BiSearch, BiMenu } from 'react-icons/bi';
import logo from '../public/images/anix.png';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className='h-12 xl:h-14 bg-zinc-800 py-2 flex items-center'>
            <div className='px-4 w-full max-w-[1270px] mx-auto flex flex-row'>
                <div className='left-div basis-9/12 sm:basis-10/12 flex'>
                    <div className='basis-1/2 md:basis-3/12 flex gap-1 items-center'>
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
                    <div className='basis-1/2 invisible md:basis-9/12 md:visible md:-ml-4 flex items-center'>
                        <SearchBar></SearchBar>
                    </div>
                </div>
                <div className='right-div basis-3/12 sm:basis-1/6 flex items-center gap-4 sm:gap-3 md:justify-between'>
                    <div className='invisible sm:visible flex items-center md:basis-1/2 text-sm'>
                        EN/JP
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
            </div>
        </div>
    );
};

export default Header;
