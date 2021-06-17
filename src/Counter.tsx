import React, {useState} from 'react';
import { PreProcessedFileInfo } from 'typescript';
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

  return (
  <div>
    <div> value: {value}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
 </div>
  );
};

export default Counter;