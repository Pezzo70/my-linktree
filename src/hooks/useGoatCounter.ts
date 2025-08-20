import { useCallback } from 'react';

declare global {
  interface Window {
    goatcounter?: {
      count: (path?: string, title?: string, referrer?: string) => void;
    };
  }
}

export const useGoatCounter = () => {
  const track = useCallback((path?: string, title?: string, referrer?: string) => {
    if (typeof window !== 'undefined' && window.goatcounter) {
      window.goatcounter.count(path, title, referrer);
    }
  }, []);

  const trackPageView = useCallback((path?: string, title?: string) => {
    track(path, title);
  }, [track]);

  const trackEvent = useCallback((eventName: string, path?: string) => {
    track(path || `/${eventName}`, eventName);
  }, [track]);

  return {
    track,
    trackPageView,
    trackEvent,
  };
};
