import { ArrowRight, CheckCircle, Instagram, Shield, Upload, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]'>
          {/* Left Column - Content */}
          <div className='space-y-8' aria-labelledby='hero-heading'>
            <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full' role='banner'>
              <Instagram className='w-4 h-4 text-purple-600 mr-2' aria-hidden='true' />
              <span className='text-sm font-medium text-purple-800'>Ferramenta Oficial para Instagram</span>
            </div>

            <div className='space-y-6'>
              <h2 id='hero-heading' className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Followers Check</span>
                <br />
                <span className='text-gray-900'>Controle Total dos Seus Seguidores</span>
              </h2>

              <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                Descubra quem realmente te segue no Instagram. Nossa ferramenta permite verificar seguidores, identificar perfis inativos e
                otimizar seu crescimento de forma inteligente.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4' role='group' aria-label='Ações principais'>
              <Link
                to='/analyze'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                aria-label='Começar análise gratuita dos seguidores'
              >
                Começar Análise Grátis
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' aria-hidden='true' />
              </Link>
              <button
                className='border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                aria-label='Assistir demonstração da ferramenta'
              >
                Ver Demonstração
              </button>
            </div>

            {/* Trust indicators */}
            <div className='flex items-center space-x-6 pt-6' role='list' aria-label='Indicadores de confiança'>
              <div className='flex items-center space-x-2' role='listitem'>
                <CheckCircle className='w-5 h-5 text-green-500' aria-hidden='true' />
                <span className='text-sm text-gray-600'>100% Seguro</span>
              </div>
              <div className='flex items-center space-x-2' role='listitem'>
                <Shield className='w-5 h-5 text-blue-500' aria-hidden='true' />
                <span className='text-sm text-gray-600'>Privacidade Garantida</span>
              </div>
              <div className='flex items-center space-x-2' role='listitem'>
                <Zap className='w-5 h-5 text-yellow-500' aria-hidden='true' />
                <span className='text-sm text-gray-600'>Resultados Instantâneos</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className='relative' aria-labelledby='demo-heading'>
            <div className='relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100'>
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <h3 id='demo-heading' className='text-lg font-semibold text-gray-900'>
                    Análise de Seguidores
                  </h3>
                  <div className='flex items-center space-x-2' aria-label='Tipo de upload'>
                    <Upload className='w-4 h-4 text-green-500' aria-hidden='true' />
                    <span className='text-sm text-gray-500'>Upload JSON</span>
                  </div>
                </div>

                <div className='bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl' role='region' aria-labelledby='unfollowers-heading'>
                  <div className='flex items-center space-x-3 mb-3'>
                    <Users className='w-6 h-6 text-red-600' aria-hidden='true' />
                    <h4 id='unfollowers-heading' className='text-lg font-semibold text-red-800'>
                      Não te seguem de volta
                    </h4>
                  </div>
                  <div className='text-3xl font-bold text-red-900 mb-2' aria-label='247 pessoas não seguem de volta'>
                    247
                  </div>
                  <div className='text-sm text-red-600'>65% dos seus seguidores</div>
                </div>

                <div className='space-y-3'>
                  <h4 className='text-sm font-medium text-gray-700 mb-3'>Top 3 que não seguem há mais tempo:</h4>

                  <ul className='space-y-3' role='list' aria-label='Lista de usuários que não seguem de volta'>
                    <li className='flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400' role='listitem'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full' aria-hidden='true'></div>
                        <div>
                          <div className='text-sm font-medium text-gray-900'>@usuario_antigo</div>
                          <div className='text-xs text-red-600'>Seguindo há 2 anos</div>
                        </div>
                      </div>
                      <div className='text-xs text-gray-500' aria-label='Status: não segue de volta'>
                        Não segue
                      </div>
                    </li>

                    <li className='flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400' role='listitem'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full' aria-hidden='true'></div>
                        <div>
                          <div className='text-sm font-medium text-gray-900'>@perfil_distante</div>
                          <div className='text-xs text-red-600'>Seguindo há 1 ano</div>
                        </div>
                      </div>
                      <div className='text-xs text-gray-500' aria-label='Status: não segue de volta'>
                        Não segue
                      </div>
                    </li>

                    <li className='flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400' role='listitem'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full' aria-hidden='true'></div>
                        <div>
                          <div className='text-sm font-medium text-gray-900'>@sem_reciprocidade</div>
                          <div className='text-xs text-red-600'>Seguindo há 8 meses</div>
                        </div>
                      </div>
                      <div className='text-xs text-gray-500' aria-label='Status: não segue de volta'>
                        Não segue
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 animate-bounce'
              aria-hidden='true'
            ></div>
            <div
              className='absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse'
              aria-hidden='true'
            ></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-20' aria-labelledby='stats-heading'>
          <h3 id='stats-heading' className='sr-only'>
            Estatísticas da plataforma
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center' role='region' aria-labelledby='users-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='50 mil usuários satisfeitos'>
                50K+
              </div>
              <div id='users-stat' className='text-gray-600'>
                Usuários Satisfeitos
              </div>
            </div>
            <div className='text-center' role='region' aria-labelledby='analyses-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='1 milhão de análises realizadas'>
                1M+
              </div>
              <div id='analyses-stat' className='text-gray-600'>
                Análises Realizadas
              </div>
            </div>
            <div className='text-center' role='region' aria-labelledby='accuracy-stat'>
              <div className='text-4xl font-bold text-gray-900 mb-2' aria-label='99.9% de precisão dos dados'>
                99.9%
              </div>
              <div id='accuracy-stat' className='text-gray-600'>
                Precisão dos Dados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
