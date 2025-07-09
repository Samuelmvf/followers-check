import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Sign In</h1>
          <p className='text-gray-600 mb-8'>Sign in to your account</p>

          <div className='space-y-4'>
            <div className='text-left'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='your@email.com'
              />
            </div>

            <div className='text-left'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                placeholder='••••••••'
              />
            </div>

            <button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500'>
              Sign In
            </button>
          </div>

          <p className='text-sm text-gray-600 mt-4'>
            Don't have an account?{" "}
            <Link to='/sign-up' className='text-purple-600 hover:text-purple-700'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
