import { Dialog } from "@base-ui-components/react/dialog";
import { FileText, Folder } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Backdrop className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-150 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0' />
        <Dialog.Popup className='fixed left-1/2 top-1/2 z-50 w-full max-w-2xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-y-auto transition-all duration-200 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0'>
          <div className='p-6'>
            <Dialog.Title className='text-2xl font-bold text-gray-900 mb-4'>Como obter seus dados do Instagram</Dialog.Title>

            <div className='space-y-6'>
              <p className='text-gray-600'>Siga este passo a passo para baixar seus dados do Instagram e usar em nossa análise:</p>

              <div className='space-y-4'>
                <div className='flex items-start space-x-4 p-4 bg-blue-50 rounded-lg'>
                  <div className='w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>1</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Acesse suas configurações</h3>
                    <p className='text-gray-600'>
                      No Instagram, vá em <strong>Perfil → Menu (☰) → Configurações e privacidade</strong>
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 bg-purple-50 rounded-lg'>
                  <div className='w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>2</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Solicite seus dados</h3>
                    <p className='text-gray-600'>
                      Clique em <strong>"Contas centrais" → "Baixar suas informações"</strong>
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 bg-green-50 rounded-lg'>
                  <div className='w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>3</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Configure a solicitação</h3>
                    <p className='text-gray-600 mb-2'>Selecione:</p>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      <li>
                        • <strong>Formato:</strong> JSON
                      </li>
                      <li>
                        • <strong>Qualidade da mídia:</strong> Baixa (mais rápido)
                      </li>
                      <li>
                        • <strong>Intervalo de datas:</strong> Todo o tempo
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg'>
                  <div className='w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>4</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Aguarde o processamento</h3>
                    <p className='text-gray-600'>
                      O Instagram levará algumas horas para processar. Você receberá um email quando estiver pronto.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 bg-pink-50 rounded-lg'>
                  <div className='w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>5</div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Baixe e extraia</h3>
                    <p className='text-gray-600'>Baixe o arquivo ZIP e extraia. Você precisará dos arquivos:</p>
                    <div className='mt-2 space-y-1'>
                      <div className='flex items-center space-x-2 text-sm'>
                        <FileText className='w-4 h-4 text-gray-500' />
                        <code className='bg-gray-100 px-2 py-1 rounded'>followers_1.json</code>
                      </div>
                      <div className='flex items-center space-x-2 text-sm'>
                        <FileText className='w-4 h-4 text-gray-500' />
                        <code className='bg-gray-100 px-2 py-1 rounded'>following.json</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-50 p-4 rounded-lg'>
                <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
                  <Folder className='w-4 h-4 mr-2' />
                  Localização dos arquivos
                </h4>
                <p className='text-sm text-gray-600'>Os arquivos estarão nas pastas:</p>
                <ul className='text-sm text-gray-600 mt-2 space-y-1'>
                  <li>
                    • <code>connections/followers_and_following/followers_1.json</code>
                  </li>
                  <li>
                    • <code>connections/followers_and_following/following.json</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default HelpModal;
