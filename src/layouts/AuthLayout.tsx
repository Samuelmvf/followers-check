import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Mini header com logo */}
      <div className='py-6'>
        <div className='max-w-md mx-auto px-4'>
          <Link to='/' className='flex items-center justify-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>F</span>
            </div>
            <h1 className='text-xl font-bold text-gray-900'>Followers Check</h1>
          </Link>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className='flex-1 flex items-center justify-center'>{children}</div>

      {/* Mini footer */}
      <div className='py-6'>
        <div className='max-w-md mx-auto px-4 text-center'>
          <p className='text-sm text-gray-500'>© 2024 Followers Check. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
