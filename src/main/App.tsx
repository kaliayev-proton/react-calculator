import { Calculator } from "../scene/calculator/Calculator"

export const App = () => {
  return (
    <section>
      <h1 className="bg-blue hover:bg-sky-700 shadow-md text-center uppercase text-white p-2">
        Calculator
      </h1>
      <Calculator />
    </section>
  )
}
