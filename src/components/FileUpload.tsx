import { FileText, Loader2, Upload } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  onFilesUploaded: (files: FileList) => void;
  isAnalyzing: boolean;
}

const FileUpload = ({ onFilesUploaded, isAnalyzing }: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    setUploadedFiles(fileArray);
    onFilesUploaded(files);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  if (isAnalyzing) {
    return (
      <div className='border-2 border-dashed border-purple-200 rounded-2xl p-12 text-center bg-purple-50'>
        <Loader2 className='w-12 h-12 text-purple-600 mx-auto mb-4 animate-spin' />
        <h3 className='text-lg font-semibold text-purple-900 mb-2'>Analyzing your data...</h3>
        <p className='text-purple-600'>This may take a few seconds</p>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
          isDragOver ? "border-purple-400 bg-purple-50" : "border-gray-300 bg-gray-50 hover:border-purple-300 hover:bg-purple-25"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <Upload className='w-12 h-12 text-gray-400 mx-auto mb-4' />
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Drag and drop your files here</h3>
        <p className='text-gray-600 mb-4'>or click to select JSON files</p>
        <div className='text-sm text-gray-500'>Accepted files: followers.json, following.json</div>
      </div>

      <input ref={fileInputRef} type='file' multiple accept='.json' onChange={handleFileInput} className='hidden' />

      {uploadedFiles.length > 0 && (
        <div className='mt-4 space-y-2'>
          <h4 className='text-sm font-medium text-gray-700'>Selected files:</h4>
          {uploadedFiles.map((file, index) => (
            <div key={index} className='flex items-center space-x-2 text-sm text-gray-600'>
              <FileText className='w-4 h-4' />
              <span>{file.name}</span>
              <span className='text-gray-400'>({(file.size / 1024).toFixed(1)} KB)</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
