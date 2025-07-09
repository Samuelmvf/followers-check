import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../enums/routes";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo and Description */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>F</span>
              </div>
              <h3 className='text-xl font-bold'>Followers Check</h3>
            </div>
            <p className='text-gray-400 mb-4 max-w-md'>
              The most complete tool for Instagram follower analysis. Discover who really follows you and optimize your growth.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Github className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link to={AppRoutes.HOME} className='text-gray-400 hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.ANALYZE} className='text-gray-400 hover:text-white transition-colors'>
                  Analyze Followers
                </Link>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>© 2024 Followers Check. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
