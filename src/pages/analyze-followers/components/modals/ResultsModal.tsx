import { Dialog } from "@base-ui-components/react/dialog";
import { Calendar, ExternalLink, UserX } from "lucide-react";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Array<{
    username: string;
    followingSince: string;
  }>;
}

const ResultsModal = ({ isOpen, onClose, data }: ResultsModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Backdrop className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-150 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0' />
        <Dialog.Popup className='fixed left-1/2 top-1/2 z-50 w-full max-w-2xl max-h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0'>
          <div className='p-6'>
            <Dialog.Title className='text-2xl font-bold text-gray-900 mb-4 flex items-center'>
              <UserX className='w-6 h-6 text-red-600 mr-2' />
              Users who don't follow back ({data.length})
            </Dialog.Title>

            <div className='max-h-96 overflow-y-auto space-y-3'>
              {data.map((user, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-400 hover:bg-red-100 transition-colors'
                >
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-sm'>{user.username.charAt(1).toUpperCase()}</span>
                    </div>
                    <div>
                      <div className='font-medium text-gray-900'>{user.username}</div>
                      <div className='flex items-center text-sm text-red-600'>
                        <Calendar className='w-3 h-3 mr-1' />
                        Following for {user.followingSince}
                      </div>
                    </div>
                  </div>
                  <button
                    className='text-gray-400 hover:text-gray-600 transition-colors'
                    onClick={() => window.open(`https://instagram.com/${user.username.replace("@", "")}`, "_blank")}
                  >
                    <ExternalLink className='w-4 h-4' />
                  </button>
                </div>
              ))}
            </div>

            <div className='mt-6 p-4 bg-yellow-50 rounded-lg'>
              <p className='text-sm text-yellow-800'>
                <strong>Tip:</strong> Consider unfollowing users you've been following for a long time who don't follow you back.
              </p>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResultsModal;
