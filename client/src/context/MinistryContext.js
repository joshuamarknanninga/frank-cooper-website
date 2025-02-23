import { createContext, useContext } from 'react';
import { fetchContent } from '../../utils/api';

const MinistryContext = createContext();

export function MinistryProvider({ children }) {
  const [content, setContent] = useState({});
  
  const updateContent = async (key) => {
    const data = await fetchContent(key);
    setContent(prev => ({ ...prev, [key]: data }));
  };

  return (
    <MinistryContext.Provider value={{ content, updateContent }}>
      {children}
    </MinistryContext.Provider>
  );
}

export const useMinistry = () => useContext(MinistryContext);