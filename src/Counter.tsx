import { SSL_OP_NO_TLSv1_1 } from 'constants';
import React, {useEffect,useRef,useState} from 'react';
//useState は状態管理　リアクトのライブラリからこの機能を持ってきている

// type Dispatch = (value: number | ((PrevState: number) =>number)) => void;

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue ] = useState<number>(initialValue);

const increment = () => {
  setValue(prevState => prevState + 1);
};
const decrement = () => {
  setValue(prevState => prevState - 1);
};

const renderTimes = useRef<number>(0);
useEffect(()=> {
 renderTimes.current = renderTimes.current +1;
});
const ref = useRef<HTMLInputElement>(null!);
const focusInput = ()=> {
  ref.current.focus();
  // const current = ref.current;
  // if(current !=null)current.focus();
};

  return (
  <div>
    <div> value: {value}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <div>this compornent was re-rendered {renderTimes.current}times!</div>
    <input ref ={ref} type="text"/>
    <button onClick = {focusInput}>Click Me!!!</button>
 </div>
  );
};

export default Counter;