import React, { useEffect } from 'react';
import { useGoatCounter } from '../hooks/useGoatCounter';

interface GoatCounterProviderProps {
  children: React.ReactNode;
  autoTrackPageViews?: boolean;
}

export const GoatCounterProvider: React.FC<GoatCounterProviderProps> = ({
  children,
  autoTrackPageViews = true,
}) => {
  const { trackPageView } = useGoatCounter();

  useEffect(() => {
    if (autoTrackPageViews) {
      // Track initial page view
      trackPageView(window.location.pathname, document.title);

      // Track page views on navigation (for SPA)
      const handleLocationChange = () => {
        trackPageView(window.location.pathname, document.title);
      };

      // Listen for popstate events (browser back/forward)
      window.addEventListener('popstate', handleLocationChange);

      // For React Router or other SPA routing, you might want to add additional listeners
      // This is a basic implementation that works with browser navigation

      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
    }
  }, [autoTrackPageViews, trackPageView]);

  return <>{children}</>;
};
