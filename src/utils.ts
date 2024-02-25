import state, { type State } from './store'

export const afterSwap = () => {
  console.log({ state: state.get() })

  const inputs = document.querySelectorAll(
    'input'
  ) as NodeListOf<HTMLInputElement>
  for (const input of inputs) {
    const name = input.name as keyof State

    if (!input.value) input.value = state.get()[name] ?? ''

    input.onchange = (e) =>
      state.setKey(name, (e.currentTarget as HTMLInputElement).value)
  }
}

export const pageLoad = () => {
  const list = document.querySelector('ul.menu-links')
  const bg = document.querySelector('div.menu-bg')
  const menu = document.querySelector<HTMLElement>('#menu-btn')
  const links = document.querySelectorAll<HTMLElement>('a.nav-link')

  const hide = () => {
    bg?.classList.remove('show')
    list?.classList.remove('show')
  }
  const show = () => {
    bg?.classList.add('show')
    list?.classList.add('show')
  }

  const toggle = () => {
    bg?.classList.toggle('show')
    list?.classList.toggle('show')
  }

  if (menu) menu.onclick = toggle

  for (const link of links) {
    link.onblur = hide
    link.onclick = toggle
    link.onfocus = show
  }
}

export default afterSwap
