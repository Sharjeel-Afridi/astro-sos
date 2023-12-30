import state, { type State } from './store'

const afterSwap = () => {
  console.log({state: state.get()})

  const inputs = document.querySelectorAll(
    'input'
  ) as NodeListOf<HTMLInputElement>
  inputs.forEach((input) => {
    const name = input.name as keyof State

    
    if (!input.value) input.value = state.get()[name] ?? ''

    input.onchange = (e) =>
      state.setKey(name, (e.currentTarget as HTMLInputElement).value)
  })
}

export default afterSwap