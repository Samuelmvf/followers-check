import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../enums/routes";
import Button from "./Button";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-40'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center space-x-2' aria-label='Go to homepage'>
            <Link to={AppRoutes.HOME} className='flex items-center space-x-2'>
              <div
                className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'
                aria-hidden='true'
              >
                <span className='text-white font-bold text-sm'>F</span>
              </div>
              <h1 className='text-xl font-bold text-gray-900'>Followers Check</h1>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            {pathname !== AppRoutes.SIGN_IN && (
              <Link
                to={AppRoutes.SIGN_IN}
                className='hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md'
                aria-label='Sign in to account'
              >
                Sign In
              </Link>
            )}
            {pathname !== AppRoutes.SIGN_UP && (
              <Link
                to={AppRoutes.SIGN_UP}
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                aria-label='Start using for free'
              >
                Get Started Free
              </Link>
            )}
            <Button
              variant='secondary'
              flat
              className='md:hidden p-2'
              aria-label='Open navigation menu'
              aria-expanded='false'
              aria-controls='mobile-menu'
            >
              <Menu className='w-6 h-6 text-gray-600' aria-hidden='true' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
