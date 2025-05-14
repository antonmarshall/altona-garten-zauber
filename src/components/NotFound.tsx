import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-garden-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-garden-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif mb-6">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Button 
          className="bg-garden-primary hover:bg-garden-primary/90"
          onClick={() => navigate('/')}
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
};

export default NotFound; 