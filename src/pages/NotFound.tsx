
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 py-12">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="text-center relative z-10 glass-effect p-12 rounded-2xl shadow-xl max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-2xl text-slate-900 font-medium mb-6">Page Not Found</p>
          <p className="text-slate-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
            <Home size={16} />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
