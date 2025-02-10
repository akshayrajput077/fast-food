
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './log';
import { Menu } from './icon';
import { Close } from './icon';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // State to track active link
  const pathname = usePathname();
  const router = useRouter()
  const links = ['/', 'about', 'shop', 'blog', "contact"];

  const toggle = () => {
    setClick(!click);
  };

  const logout = () => {
    localStorage.clear();
    router.push('/')
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
    <header className={`text-black font-sans body-font ${shadow ? 'shadow-xl bg-pedigrey mt-0 transition-all duration-200 delay-[200ms]' : ''} fixed w-full top-0 left-0 z-[9999] md:h-24 md:py-2 h-16 py-3 duration-300 hover:-translate-y-1`} aria-label="Global">
      <div className="container mx-auto flex flex-wrap px-6 py-2 flex-col md:flex-row md:items-center">
        <div className="flex justify-between items-center">
          <Logo />
          <button className="text-3xl md:hidden" onClick={toggle}>
            {click ? <Close /> : <Menu />}
          </button>
        </div>
        {click && (
          <nav className="md:hidden shadow flex flex-col absolute left-0 py-4 right-0 top-14 z-[9999] bg-white">
            {links.map((item) => (
              <Link
                onClick={toggle}
                key={item}
                href={item === '/dashboard' ? '/dashboard' : `/dashboard/${item}`}
                className={`mr-5 capitalize ${pathname === `/dashboard${item}` || pathname === `/dashboard${item}` ? 'text-orange font-semibold ' : ''} hover:text-orange-600 transition-all duration-300 ease-in-out px-6 py-2 mx-4`}
              >
                {item === '/' ? 'home' : item}
              </Link>
            ))}
            <button onClick={toggle} className="block items-center text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600 mt-4 md:mt-0" onClickCapture={logout}>
              Logout
            </button>
          </nav>
        )}
        <nav className={`md:ml-auto md:mr-auto md:flex lg:ml-auto lg:mr-auto lg:flex xl:ml-auto xl:mr-auto xl:flex flex-wrap items-center justify-center md:gap-4 lg:gap-8 xl-gap-16 hidden md:m-5 m-0 text-lg font-bold ${shadow ? 'md:text-sm lg:text-base xl:text-base xl:gap-2 lg:gap-2 md:gap-2 md-m-2' : ''}`}>
          {links.map((item) => (
            <Link
              onClick={() => console.log('item', pathname)}
              key={item}
              href={item === '/' ? '/dashboard' : `/dashboard/${item}`}
              className={`xl:mr-16 lg:mr-8 md:mr-2 uppercase font-mono  ${pathname === `/dashboard/${item}` || pathname === `/dashboard${item}` ?
                'text-orange-600' : 'text-white'} block transition-all duration-300 ease-in-out hover:text-orange-600`}
            >
              {item === '/' ? 'home' : item}
            </Link>
          ))}
        </nav>
        <button className="md:inline-flex hidden items-center text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600 mt-4 md:mt-0" onClickCapture={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

