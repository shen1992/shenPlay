import { useRef, useEffect } from 'react';

export default function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    // 当value改变的时候再重新对current进行赋值
    ref.current = value
  }, [value]);
  
  // 先返回current
  return ref.current
}
