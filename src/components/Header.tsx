import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <Link to='/' className='flex items-center space-x-2'>
              <div
                className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'
                aria-hidden='true'
              >
                <span className='text-white font-bold text-sm'>F</span>
              </div>
              <h1 className='text-xl font-bold text-gray-900'>Followers Check</h1>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8' role='navigation' aria-label='Navegação principal'>
            <ul className='flex items-center space-x-8 list-none m-0 p-0'>
              <li>
                <Link
                  to='/analyze'
                  className='text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1'
                  aria-label='Ir para análise de seguidores'
                >
                  Analisar
                </Link>
              </li>
              <li>
                <a
                  href='#features'
                  className='text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1'
                  aria-label='Ir para seção de recursos'
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href='#pricing'
                  className='text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1'
                  aria-label='Ir para seção de preços'
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1'
                  aria-label='Ir para seção de contato'
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className='flex items-center space-x-4'>
            <Link
              to='/sign-in'
              className='hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md'
              aria-label='Fazer login na conta'
            >
              Login
            </Link>
            <Link
              to='/sign-up'
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              aria-label='Começar a usar gratuitamente'
            >
              Começar Grátis
            </Link>
            <button
              className='md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md'
              aria-label='Abrir menu de navegação'
              aria-expanded='false'
              aria-controls='mobile-menu'
            >
              <Menu className='w-6 h-6 text-gray-600' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
