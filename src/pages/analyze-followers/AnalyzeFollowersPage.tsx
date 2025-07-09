import { HelpCircle } from "lucide-react";
import { useState } from "react";
import Button from "../../components/Button";
import FileUpload from "../../components/FileUpload";
import BaseLayout from "../../layouts/BaseLayout";
import HelpModal from "./components/modals/HelpModal";
import ResultsModal from "./components/modals/ResultsModal";

interface AnalysisResults {
  totalFollowers: number;
  totalFollowing: number;
  notFollowingBack: Array<{
    username: string;
    followingSince: string;
  }>;
}

const AnalyzeFollowersPage = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFilesUploaded = (files: FileList) => {
    setIsAnalyzing(true);

    // Simulate file analysis
    setTimeout(() => {
      const mockResults: AnalysisResults = {
        totalFollowers: 1234,
        totalFollowing: 567,
        notFollowingBack: [
          { username: "@old_user", followingSince: "2 years" },
          { username: "@distant_profile", followingSince: "1 year" },
          { username: "@no_reciprocity", followingSince: "8 months" },
          { username: "@inactive_account", followingSince: "6 months" },
          { username: "@lost_follow", followingSince: "4 months" },
        ],
      };
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <BaseLayout showFooter={false}>
      <div className='bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-full'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Follower <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Analysis</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Upload your Instagram data to discover who doesn't follow you back</p>
          </div>

          <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 mb-8'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-semibold text-gray-900'>Data Upload</h2>
              <Button variant='primary' flat onClick={() => setShowHelpModal(true)} className='flex items-center space-x-2 text-sm'>
                <HelpCircle className='w-5 h-5' />
                <span className='font-medium'>How to get the data?</span>
              </Button>
            </div>

            <div className='mb-8'>
              <p className='text-gray-600 mb-4'>Upload the JSON files exported from Instagram: "followers" and "following"</p>
              <FileUpload onFilesUploaded={handleFilesUploaded} isAnalyzing={isAnalyzing} />
            </div>
          </div>

          {/* Results Section */}
          {results && !isAnalyzing && (
            <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Analysis Complete!</h2>
                <p className='text-gray-600'>We found {results.notFollowingBack.length} people who don't follow you back</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-blue-50 p-6 rounded-xl text-center'>
                  <div className='text-3xl font-bold text-blue-900 mb-2'>{results.totalFollowers.toLocaleString()}</div>
                  <div className='text-blue-600'>Total Followers</div>
                </div>
                <div className='bg-green-50 p-6 rounded-xl text-center'>
                  <div className='text-3xl font-bold text-green-900 mb-2'>{results.totalFollowing.toLocaleString()}</div>
                  <div className='text-green-600'>Following</div>
                </div>
                <div className='bg-red-50 p-6 rounded-xl text-center'>
                  <div className='text-3xl font-bold text-red-900 mb-2'>{results.notFollowingBack.length}</div>
                  <div className='text-red-600'>Don't Follow Back</div>
                </div>
              </div>

              <div className='text-center'>
                <Button variant='primary' onClick={() => setShowResultsModal(true)} className='text-lg px-8 py-3'>
                  View Complete Results
                </Button>
              </div>
            </div>
          )}
        </div>

        <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
        {results && <ResultsModal isOpen={showResultsModal} onClose={() => setShowResultsModal(false)} data={results.notFollowingBack} />}
      </div>
    </BaseLayout>
  );
};

export default AnalyzeFollowersPage;
