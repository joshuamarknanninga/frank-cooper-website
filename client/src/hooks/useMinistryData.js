import { useEffect, useState } from 'react';
import { fetchContent } from '../utils/api';

export function useMinistryData() {
  const [content, setContent] = useState({
    heroContent: {},
    sermons: [],
    events: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [hero, sermons, events] = await Promise.all([
          fetchContent('hero'),
          fetchContent('sermons'),
          fetchContent('events')
        ]);
        
        setContent({
          heroContent: hero,
          sermons,
          events,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setContent(prev => ({
          ...prev,
          isLoading: false,
          error: error.message
        }));
      }
    };

    loadData();
  }, []);

  return content;
}