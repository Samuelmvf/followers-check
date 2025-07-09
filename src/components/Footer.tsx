import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo e Descrição */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>F</span>
              </div>
              <h3 className='text-xl font-bold'>Followers Check</h3>
            </div>
            <p className='text-gray-400 mb-4 max-w-md'>
              A ferramenta mais completa para análise de seguidores do Instagram. Descubra quem realmente te segue e otimize seu
              crescimento.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Instagram className='w-5 h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Github className='w-5 h-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Mail className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Links Rápidos</h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/analyze' className='text-gray-400 hover:text-white transition-colors'>
                  Analisar Seguidores
                </Link>
              </li>
              <li>
                <a href='#features' className='text-gray-400 hover:text-white transition-colors'>
                  Recursos
                </a>
              </li>
              <li>
                <a href='#pricing' className='text-gray-400 hover:text-white transition-colors'>
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Suporte</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                  Contato
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>© 2024 Followers Check. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
