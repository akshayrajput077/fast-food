'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
// Links for navigation
const links = ['/', 'about', 'products', 'blog'];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const pathname = usePathname();
  const router = useRouter()
  const toggle = () => {
    setClick(!click);
  };

  // Function to format link names
  const formatLink = (item) => (item === '/' ? 'home' : item);

  const logout = () => {
    localStorage.clear();
    router.push('/')
  };
  return (
    <header className="text-gray-700 body-font"> {/* Fix typo here */}
      <div className="container mx-auto flex flex-wrap px-6 py-2 flex-col md:flex-row md:items-center">
        <div className="flex justify-between items-center">
          A.k
          <button className="text-3xl md:hidden" onClick={toggle}>
            {click ? '᭻' : '☰'} {/* Replace Menu component */}
          </button>
        </div>

        {/* Mobile Menu */}
        {click && (
          <nav className="md:hidden shadow flex flex-col absolute left-0 py-8 right-0 top-14 z-[9999] bg-white">
            {links.map((item) => (
              <Link
                onClick={toggle}
                key={item}
                href={item === '/dashboard' ? '/dashboard' : `/dashboard/${item}`}
                className={`mr-5 capitalize ${pathname === `/${item}` || pathname === `/${item}/`
                  ? 'text-brand font-semibold bg-slate-100'
                  : ''
                  } hover:text-brand transition-all duration-300 ease-in-out px-6 py-2 mx-4`}
              >
                {formatLink(item)}
              </Link>
            ))}
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center hidden">
          {links.map((item) => (
            <Link
              key={item}
              href={item === '/dashboard' ? '/dashboard' : `/dashboard/${item}`}
              className={`mr-5 capitalize ${pathname === `/${item}` || pathname === `/${item}/`
                ? 'text-brand font-semibold'
                : ''
                } hover:text-brand transition-all duration-300 ease-in-out`}
            >
              {formatLink(item)}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="md:inline-flex hidden items-center text-orange-600 hover:text-white border border-orange-600 hover:bg-orange-600 outline-none focus:bg-orange-600 focus:text-white font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-orange-600 dark:text-orange-600 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:bg-orange-600 mt-4 md:mt-0" onClickCapture={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

