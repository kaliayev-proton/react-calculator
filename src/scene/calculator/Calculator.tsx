import { Button } from "./component/Button"
import { keyboardNumbers, operations } from "./constants"

export const Calculator = () => {
  return (
    <section className="flex w-full">
      <div className="grid grid-cols-3 gap-4 bg-purple-200">
        {keyboardNumbers.map((num) => (<Button text={num} className="bg-purple-500 hover:bg-purple-700 text-white" />))}
        <Button text={'.'} className="bg-purple-500 hover:bg-purple-700 text-white" />
        <Button text={'='} className="bg-blue hover:bg-purple-700 text-white" />
      </div>
      <div className="grid gap-4 bg-purple-200 p-4">
        {operations.map(op => <Button text={op} className="bg-blue hover:bg-purple-700 text-white" />)}
      </div>
    </section>
  )
}
