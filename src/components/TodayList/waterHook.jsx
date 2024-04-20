import { useState } from 'react';

const useWaterHook = (initialResult, initialTime) => {
    const [result, setResult] = useState(initialResult);
    const [time, setTime] = useState(initialTime);
  
    return { result, time, setResult, setTime };
};

export default useWaterHook;