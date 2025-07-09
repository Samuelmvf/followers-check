import { Field } from "@base-ui-components/react/field";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { AppRoutes } from "../enums/routes";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement registration logic
    console.log("Register:", formData);
  };

  const handleGoogleRegister = () => {
    // Implement OAuth with Google
    console.log("Google register");
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-50'>
      <Header />

      <div className='flex items-center justify-center px-4 py-8'>
        <div className='w-full max-w-md'>
          <div className='bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20'>
            <div className='text-center mb-8'>
              <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h1>
              <p className='text-gray-600'>Join Maya and start analyzing your followers</p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <Field.Root>
                <Field.Label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</Field.Label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                    placeholder='Your full name'
                    required
                  />
                </div>
              </Field.Root>

              <Field.Root>
                <Field.Label className='block text-sm font-medium text-gray-700 mb-2'>Email</Field.Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                    placeholder='your@email.com'
                    required
                  />
                </div>
              </Field.Root>

              <Field.Root>
                <Field.Label className='block text-sm font-medium text-gray-700 mb-2'>Password</Field.Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                    placeholder='Create a strong password'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                  </button>
                </div>
              </Field.Root>

              <Field.Root>
                <Field.Label className='block text-sm font-medium text-gray-700 mb-2'>Confirm Password</Field.Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                    placeholder='Confirm your password'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    {showConfirmPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                  </button>
                </div>
              </Field.Root>

              <div className='flex items-center'>
                <input type='checkbox' id='terms' className='rounded border-gray-300 text-purple-600 focus:ring-purple-500' required />
                <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
                  I agree to the{" "}
                  <Link to={AppRoutes.TERMS} className='text-purple-600 hover:text-purple-500 transition-colors'>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to={AppRoutes.PRIVACY} className='text-purple-600 hover:text-purple-500 transition-colors'>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type='submit' variant='primary' className='w-full'>
                Create Account
              </Button>

              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>or</span>
                </div>
              </div>

              <Button type='button' variant='secondary' onClick={handleGoogleRegister} className='w-full'>
                <svg className='w-5 h-5 mr-2' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
                Continue with Google
              </Button>
            </form>

            <div className='mt-8 text-center'>
              <p className='text-gray-600'>
                Already have an account?{" "}
                <Link to={AppRoutes.SIGN_IN} className='text-purple-600 hover:text-purple-500 font-medium transition-colors'>
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
