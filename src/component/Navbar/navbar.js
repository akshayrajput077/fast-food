
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './log';
import { Menu } from './icon';
import { Close } from './icon';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { LogOut, UserRound, ShoppingBag, Archive } from 'lucide-react';
import { localData } from '@/services/auth/signIn.service';
import SignIn from '../Auth/Signin';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);  // Initially set to false
  const [user, setUser] = useState(null);


  useEffect(() => {
    handleUser()
  }, []);

  const handleUser = async () => {
    const user = await localData();
    console.log("user", user)
    if (user) {
      setUser(user);
    }
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    router.push('/');
  };

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const links = ['/', 'about', 'shop', 'blog'];

  const toggle = () => {
    setClick(!click);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    // router.push('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 50;
      if (isTop !== shadow) {
        setShadow(isTop);
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(`#${section.getAttribute('id')}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shadow]);



  return (
    <>
      <header className={`text-black font-sans body-font ${shadow ? 'shadow-xl bg-pedigrey mt-0 transition-all duration-200 delay-[200ms]' : ''} fixed w-full top-0 left-0 z-[9999] md:h-24 md:py-2 h-16 py-3 duration-300 hover:-translate-y-1`} aria-label="Global">
        <div className="container mx-auto flex flex-wrap px-6 py-2 flex-col md:flex-row md:items-center">
          <div className="flex justify-between items-center">
            <Logo />
            <button className="text-3xl md:hidden text-white" onClick={toggle}>
              {click ? <Close /> : <Menu />}
            </button>
          </div>
          {click && (
            <nav className="md:hidden shadow flex flex-col absolute left-0 py-4 right-0 top-14 z-[9999] bg-white">
              {links.map((item) => (
                <Link
                  onClick={toggle}
                  key={item}
                  href={item === '/' ? '/' : `${item}`}
                  className={`mr-5 capitalize ${pathname === `/${item}` || pathname === `${item}` ? 'text-orange-600 font-semibold ' : ''} hover:text-orange-600 transition-all duration-300 ease-in-out px-6 py-2 mx-4`}
                >
                  {item === '/' ? 'home' : item}
                </Link>
              ))}
              <button onClick={toggle} className="block text-start hove:text-orange-600 transition-all duration-300 ease-in-out px-6 py-2 mx-4 flex items-center" onClickCapture={logout}>
                Logout <LogOut className='px-1' size={24} />
              </button>
            </nav>
          )}
          <nav className={`md:ml-auto md:mr-auto md:flex lg:ml-auto lg:mr-auto lg:flex xl:ml-auto xl:mr-auto xl:flex flex-wrap items-center justify-center md:gap-4 lg:gap-8 xl-gap-16 hidden md:m-5 m-0 text-lg font-bold ${shadow ? 'md:text-sm lg:text-base xl:text-base xl:gap-2 lg:gap-2 md:gap-2 md-m-2' : ''}`}>
            {links.map((item) => (
              <Link
                key={item}
                href={item === '/' ? '/' : `${item}`}
                className={`xl:mr-16 lg:mr-8 md:mr-2 uppercase font-mono  ${pathname === `/${item}` || pathname === `${item}` ? 'text-orange-600' : 'text-white'} block transition-all duration-300 ease-in-out hover:text-orange-600`}
              >
                {item === '/' ? 'home' : item}
              </Link>
            ))}
          </nav>

          {user ? (
            <div
              role="button"
              className="md:inline-flex hidden items-center justify-center bg-orange-600 text-white rounded-full w-10 h-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {user.FirstName ? user.FirstName[0].toUpperCase() : null}
              {user.LastName ? user.LastName[0].toUpperCase() : null}
              {isDropdownVisible && (
                <div className="absolute right-4 z-10 top-[60px] mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                  <div className="py-1" role="none">
                    <Link href={'/order'}>
                      <div role='button' className="block flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-600 hover:rounded-lg hover:text-white text-left"><ShoppingBag className='px-1 font-semibold' size={24} />Cart</div>
                    </Link>
                    <Link href={'/record'}>
                      <div role='button' className="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-600 hover:rounded-lg hover:text-white text-left font-semibold"><Archive className='px-1 font-semibold' size={24} />Records</div>
                    </Link>
                    <button className="block flex items-center  w-full px-4 py-2 text-left text-sm text-gray-700 hover:rounded-lg hover:bg-orange-600 hover:text-white font-semibold" onClickCapture={logout}><LogOut className='px-1 font-semibold' size={24} />Sign out</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div role='button' className="md:inline-flex hidden items-center text-white hover:text-orange-600  text-lg font-bold px-4 py-1 text-center me-2 mb-2 mt-4 md:mt-0 uppercase" onClick={handleLoginClick}>
              <UserRound className='px-1 font-bold' size={28} /> Login
            </div>
          )}
        </div>
      </header>
      {showLoginModal && (
        <SignIn onClose={handleCloseModal} />
      )}</>
  );
};

export default Navbar;
