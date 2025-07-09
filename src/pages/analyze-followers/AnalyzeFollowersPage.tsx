import { HelpCircle, UserCheck, Users, UserX } from "lucide-react";
import { useState } from "react";
import FileUpload from "../../components/FileUpload";
import Header from "../../components/Header";
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

const Analysis = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFilesUploaded = (files: FileList) => {
    setIsAnalyzing(true);

    // Simular análise dos arquivos
    setTimeout(() => {
      const mockResults: AnalysisResults = {
        totalFollowers: 1234,
        totalFollowing: 567,
        notFollowingBack: [
          { username: "@usuario_antigo", followingSince: "2 anos" },
          { username: "@perfil_distante", followingSince: "1 ano" },
          { username: "@sem_reciprocidade", followingSince: "8 meses" },
          { username: "@conta_inativa", followingSince: "6 meses" },
          { username: "@follow_perdido", followingSince: "4 meses" },
        ],
      };
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50'>
      <Header />

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Análise de <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Seguidores</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Faça upload dos seus dados do Instagram para descobrir quem não te segue de volta
          </p>
        </div>

        <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 mb-8'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-semibold text-gray-900'>Upload dos Dados</h2>
            <button
              onClick={() => setShowHelpModal(true)}
              className='flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors'
            >
              <HelpCircle className='w-5 h-5' />
              <span className='text-sm font-medium'>Como obter os dados?</span>
            </button>
          </div>

          <div className='mb-8'>
            <p className='text-gray-600 mb-4'>Faça upload dos arquivos JSON exportados do Instagram: "seguidores" e "seguindo"</p>
            <FileUpload onFilesUploaded={handleFilesUploaded} isAnalyzing={isAnalyzing} />
          </div>
        </div>

        {/* Seção de Resultados */}
        {results && (
          <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Resultados da Análise</h2>

            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-blue-50 p-6 rounded-xl text-center'>
                <Users className='w-8 h-8 text-blue-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-blue-900 mb-1'>{results.totalFollowers}</div>
                <div className='text-sm text-blue-600'>Total de Seguidores</div>
              </div>

              <div className='bg-green-50 p-6 rounded-xl text-center'>
                <UserCheck className='w-8 h-8 text-green-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-green-900 mb-1'>{results.totalFollowing}</div>
                <div className='text-sm text-green-600'>Total Seguindo</div>
              </div>

              <div
                className='bg-red-50 p-6 rounded-xl text-center cursor-pointer hover:bg-red-100 transition-colors'
                onClick={() => setShowResultsModal(true)}
              >
                <UserX className='w-8 h-8 text-red-600 mx-auto mb-3' />
                <div className='text-3xl font-bold text-red-900 mb-1'>{results.notFollowingBack.length}</div>
                <div className='text-sm text-red-600'>Não seguem de volta</div>
                <div className='text-xs text-red-500 mt-2'>Clique para ver detalhes</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
      <ResultsModal isOpen={showResultsModal} onClose={() => setShowResultsModal(false)} data={results?.notFollowingBack || []} />
    </div>
  );
};

export default Analysis;
