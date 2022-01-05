import { useReducer } from "react";
import { Button } from "./component/Button"
import { calculatorReducer, initialState, keyboardKeys, keyboardNumbers, OPERATIONS, operations, switchCharacter, switchCharacterKey } from "./constants"
import { useKeyboard } from "./hook/useKeyboard";

export const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  useKeyboard({
    keys: keyboardKeys,
    cb: (key: string) => {
      const keyNumber: number = parseInt(key, 10);
      dispatch({ type: keyNumber >= 0 ? OPERATIONS.TYPE : switchCharacter(key), num: keyNumber })
    },
  });
  return (
    <section className="grid grid-cols-4 p-4 bg-purple-200 m-auto max-w-2xl mt-10 rounded-md shadow-md">
      <input type="text" className="col-span-4 text-right text-lg rounded-t-md p-1 text-lg" value={state.result} readOnly />
      <input type="text" className="col-span-4 mb-4 text-right text-lg rounded-b-md p-1 text-lg" value={state.values.map(val => switchCharacterKey(val)).join(' ')} readOnly />
      <div className="grid grid-cols-3 col-span-3 gap-4">
        {keyboardNumbers.map((num) => (<Button text={num} key={`button-${num}`} onClick={() => dispatch({ type: OPERATIONS.TYPE, num }) } className="bg-purple-500 hover:bg-purple-700 text-white" />))}
        <Button text={'.'} className="bg-purple-500 hover:bg-purple-700 text-white" />
        <Button text={'='} onClick={() => dispatch({ type: OPERATIONS.RES }) } className="bg-blue hover:bg-purple-700 text-white" />
      </div>
      <div className="grid gap-4 pl-4">
        {operations.map(type => <Button key={`button-${type}`} text={type} onClick={() => dispatch({ type }) } className="bg-blue hover:bg-purple-700 text-white" />)}
      </div>
    </section>
  )
}
