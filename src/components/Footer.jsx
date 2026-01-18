import { Heart } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-4">
      <div className="section-container py-0">
        <div className="text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by {config.personal.name} • © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
