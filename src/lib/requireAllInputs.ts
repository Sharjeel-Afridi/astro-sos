const inputs = document.querySelectorAll<HTMLInputElement>('input')
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous') as HTMLButtonElement
const reportBtn = document.getElementById('report')

let inputGiven = false
// let checkboxChecked = false

const currentUrl = window.location.href
const parts = currentUrl.split('/')
const lastPart = parseInt(parts[parts.length - 1])

if (reportBtn) {
  reportBtn.addEventListener('click', () => {
    window.location.href = '/1'
  })
}

if (nextBtn) {
  previousBtn.addEventListener('click', () => {
    if (lastPart !== 1) {
      window.location.href = `/${lastPart - 1}`
    } else {
      window.location.href = '/'
    }
  })

  nextBtn.addEventListener('click', () => {
    console.log('button')
    for (const input of inputs) {
      switch (input.type) {
        case 'checkbox':
        case 'radio':
          inputGiven = input.checked
          break
        case 'text':
          if (input.value) inputGiven = true
          break
      }
    }

    if (inputGiven) {
      if (lastPart === 3) {
        window.location.href = '/success'
      } else {
        window.location.href = `/${lastPart + 1}`
      }
    } else {
      alert('Please provide input.')
    }
  })
}
