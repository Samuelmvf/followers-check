import { ArrowRight, CheckCircle, Instagram, Shield, Upload, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../enums/routes";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-30' aria-hidden='true'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-xl'></div>
        <div className='absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full blur-xl'></div>
        <div className='absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-8' aria-labelledby='hero-heading'>
            <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full' role='banner'>
              <Instagram className='w-4 h-4 text-purple-600 mr-2' aria-hidden='true' />
              <span className='text-sm font-medium text-purple-800'>Official Instagram Tool</span>
            </div>

            <div className='space-y-6'>
              <h2 id='hero-heading' className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Followers Check</span>
                <br />
                <span className='text-gray-900'>Complete Control Over Your Followers</span>
              </h2>

              <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                Discover who really follows you on Instagram. Our tool allows you to check followers, identify inactive profiles and
                optimize your growth intelligently.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                to={AppRoutes.ANALYZE}
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                aria-label='Start free follower analysis'
              >
                Start Free Analysis
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' aria-hidden='true' />
              </Link>
              <Button variant='transparent' className='text-lg px-8 py-4' aria-label='Watch tool demonstration'>
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className='flex items-center space-x-6 text-sm text-gray-500'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-4 h-4 text-green-500' aria-hidden='true' />
                <span>100% Safe</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Shield className='w-4 h-4 text-blue-500' aria-hidden='true' />
                <span>Privacy Protected</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Zap className='w-4 h-4 text-yellow-500' aria-hidden='true' />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Interface */}
          <div className='relative' aria-labelledby='demo-heading'>
            <div className='relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100'>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <h3 id='demo-heading' className='text-lg font-semibold text-gray-900'>
                    Follower Analysis
                  </h3>
                  <div className='flex items-center space-x-2' aria-label='Upload type'>
                    <Upload className='w-4 h-4 text-green-500' aria-hidden='true' />
                    <span className='text-sm text-gray-500'>JSON Upload</span>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl' role='region' aria-labelledby='unfollowers-heading'>
                  <div className='flex items-center space-x-3 mb-3'>
                    <Users className='w-6 h-6 text-red-600' aria-hidden='true' />
                    <h4 id='unfollowers-heading' className='text-lg font-semibold text-red-800'>
                      Don't follow you back
                    </h4>
                  </div>
                  <div className='text-3xl font-bold text-red-900 mb-2' aria-label='247 people do not follow back'>
                    247
                  </div>
                  <div className='text-sm text-red-600'>65% of your followers</div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-blue-50 p-4 rounded-lg text-center'>
                    <div className='text-2xl font-bold text-blue-900'>1.2K</div>
                    <div className='text-sm text-blue-600'>Followers</div>
                  </div>
                  <div className='bg-green-50 p-4 rounded-lg text-center'>
                    <div className='text-2xl font-bold text-green-900'>890</div>
                    <div className='text-sm text-green-600'>Following</div>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-red-500 rounded-full'></div>
                      <span className='text-sm font-medium'>@inactive_user</span>
                    </div>
                    <span className='text-xs text-gray-500'>2 years ago</span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-purple-500 rounded-full'></div>
                      <span className='text-sm font-medium'>@old_follow</span>
                    </div>
                    <span className='text-xs text-gray-500'>1 year ago</span>
                  </div>
                  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
                      <span className='text-sm font-medium'>@distant_profile</span>
                    </div>
                    <span className='text-xs text-gray-500'>8 months ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse'></div>
            <div className='absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse'></div>
          </div>
        </div>

        {/* Stats section */}
        <div className='mt-20' aria-labelledby='stats-heading'>
          <h3 id='stats-heading' className='sr-only'>
            Platform statistics
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center' role='region' aria-labelledby='users-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='50 thousand satisfied users'>
                50K+
              </div>
              <div id='users-stat' className='text-gray-600'>
                Satisfied Users
              </div>
            </div>
            <div className='text-center' role='region' aria-labelledby='analyses-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='1 million analyses performed'>
                1M+
              </div>
              <div id='analyses-stat' className='text-gray-600'>
                Analyses Performed
              </div>
            </div>
            <div className='text-center' role='region' aria-labelledby='accuracy-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='99.9% data accuracy'>
                99.9%
              </div>
              <div id='accuracy-stat' className='text-gray-600'>
                Data Accuracy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
