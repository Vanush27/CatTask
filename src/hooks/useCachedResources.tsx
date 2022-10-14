import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync().then();
  }, []);
  return isLoadingComplete;
};

export default useCachedResources;
