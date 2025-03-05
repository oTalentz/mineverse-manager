
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import DownloadModal from './DownloadModal';
import { Link } from 'react-router-dom';

const DownloadButton: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 font-bold"
          onClick={() => setShowDownloadModal(true)}
        >
          <Download className="mr-2 h-5 w-5" />
          Baixar Launcher
        </Button>

        <Link to="/launcher">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 font-bold"
          >
            Acessar Launcher Online
          </Button>
        </Link>
      </div>

      {showDownloadModal && (
        <DownloadModal onClose={() => setShowDownloadModal(false)} />
      )}
    </>
  );
};

export default DownloadButton;
