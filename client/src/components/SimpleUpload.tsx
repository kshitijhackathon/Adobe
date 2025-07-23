import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface SimpleUploadProps {
  onFileSelect: (file: File) => void;
}

export const SimpleUpload: React.FC<SimpleUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div 
        className="w-full max-w-4xl mx-auto cursor-pointer animate-fade-in-scale"
        onClick={openFileDialog}
      >
        <div className="bg-white/5 backdrop-blur-sm border-2 border-dashed border-gray-600 hover:border-[#ca6a34]/70 rounded-lg p-16 text-center transition-all duration-300 hover:animate-glow hover:bg-white/10">
          <Upload size={64} className="text-gray-400 mx-auto mb-6 animate-pulse-glow" />
          <h3 className="text-2xl font-bold text-white mb-4 animate-text-glow">
            DRAG & DROP THE PDF FILE
          </h3>
          <p className="text-gray-300 mb-6 animate-slide-in-up">
            Click here to select PDF file from computer. Maximum file size: 10MB
          </p>
          <Button 
            className="bg-[#531f17] text-white hover:bg-[#3f1711] rounded-[10px] px-8 py-3 animate-glow hover:animate-pulse-glow transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              openFileDialog();
            }}
          >
            <Upload className="mr-2 h-4 w-4" />
            Choose PDF File
          </Button>
        </div>
      </div>
    </>
  );
};