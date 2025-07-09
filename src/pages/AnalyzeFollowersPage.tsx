import { Download, FileText, Upload, Users } from "lucide-react";
import BaseLayout from "../layouts/BaseLayout";

const AnalyzeFollowersPage = () => {
  return (
    <BaseLayout>
      <div className='bg-gray-50 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>Análise de Seguidores</h1>
            <p className='text-xl text-gray-600'>Faça upload dos seus dados do Instagram para analisar seus seguidores</p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Upload Section */}
              <div className='space-y-6'>
                <div className='text-center'>
                  <Upload className='w-16 h-16 text-purple-500 mx-auto mb-4' />
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>Upload dos Dados</h3>
                  <p className='text-gray-600 mb-6'>Faça upload dos arquivos JSON do Instagram</p>

                  <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-purple-500 transition-colors'>
                    <div className='text-center'>
                      <FileText className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                      <p className='text-gray-600 mb-2'>Arraste e solte os arquivos aqui ou</p>
                      <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors'>
                        Selecionar Arquivos
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions Section */}
              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>Como obter os dados?</h3>
                  <ol className='list-decimal list-inside space-y-2 text-gray-600'>
                    <li>Acesse o Instagram no navegador</li>
                    <li>Vá em Configurações → Privacidade e Segurança</li>
                    <li>Clique em "Baixar dados"</li>
                    <li>Selecione formato JSON</li>
                    <li>Aguarde o email com o download</li>
                    <li>Faça upload dos arquivos aqui</li>
                  </ol>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg'>
                  <div className='flex items-start space-x-3'>
                    <Users className='w-5 h-5 text-blue-500 mt-0.5' />
                    <div>
                      <h4 className='font-medium text-blue-900'>Arquivos necessários:</h4>
                      <ul className='text-sm text-blue-700 mt-1 space-y-1'>
                        <li>• followers.json</li>
                        <li>• following.json</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section (placeholder) */}
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>Resultados da Análise</h3>

              <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-gray-50 p-6 rounded-lg text-center'>
                  <div className='text-3xl font-bold text-gray-400 mb-2'>--</div>
                  <div className='text-sm text-gray-600'>Total de Seguidores</div>
                </div>

                <div className='bg-gray-50 p-6 rounded-lg text-center'>
                  <div className='text-3xl font-bold text-gray-400 mb-2'>--</div>
                  <div className='text-sm text-gray-600'>Seguindo</div>
                </div>

                <div className='bg-gray-50 p-6 rounded-lg text-center'>
                  <div className='text-3xl font-bold text-gray-400 mb-2'>--</div>
                  <div className='text-sm text-gray-600'>Não seguem de volta</div>
                </div>
              </div>

              <div className='mt-6 text-center'>
                <button
                  className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled
                >
                  <Download className='w-4 h-4 mr-2 inline' />
                  Baixar Relatório
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default AnalyzeFollowersPage;
