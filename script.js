let btnSend = document.querySelector('#btnSend')
let textArea = document.querySelector('#textArea')
let textInput = document.querySelector('#textInput')
let listItems = document.querySelector('.list-items')
listItems.classList.remove('list-items')
textArea.onfocus = () => {
  btnSend.classList.remove('btnSend')
  textArea.onblur = () => {
    setTimeout(() => {
      btnSend.classList.add('btnSend')
    }, 80)
  }
  btnSend.onclick = () => {
    btnSend.classList.add('btnSend')
    let block = document.createElement('p')
    block.classList.add(
      'list-items',
      'animate__animated',
      'animate__backInDown'
    )
    block.textContent = textArea.value
    listItems.appendChild(block)
    textArea.value = ''
  }
}
