
import { useState } from 'react';
import { aboutData } from '../data';
import { addCacheBuster } from '../utils/cache';

interface ProfileImageProps {
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ProfileImage = ({ className = "", onLoad, onError }: ProfileImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(() => addCacheBuster(aboutData.profileImage));

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    console.log('GitHub image failed, trying fallback:', aboutData.fallbackImage);
    if (currentSrc !== addCacheBuster(aboutData.fallbackImage)) {
      setCurrentSrc(addCacheBuster(aboutData.fallbackImage));
    } else {
      setHasError(true);
      onError?.();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Blur placeholder that appears while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" />
      )}
      
      {/* Main profile image with dynamic cache busting */}
      <img
        src={currentSrc}
        alt="Yash Kokate Profile"
        className={`${className} transition-all duration-500 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        // Force cache bypass for immediate updates
        loading="eager"
        decoding="async"
        key={currentSrc} // Force re-render when src changes
        style={{
          imageRendering: 'auto',
          imageOrientation: 'from-image'
        }}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div className={`${className} bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-2xl mb-2">👤</div>
            <p className="text-xs text-muted-foreground">Profile Image</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
