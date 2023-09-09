export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open') // Adiciona open na classe, fazendo com que ela apareça sobreposta (propriedades pelo CSS) com o resultado (dos valores capturados e calculados pelo JS). O conteudo da mensagem já foi gerado pelo Modal anterior, este modal apenas coloca na tela.
  },
  close() {
    Modal.wrapper.classList.remove('open') // Remove o open na classe geral da caixa, fazendo com que ao clicar no X ela seja fechada
  }
}

Modal.buttonClose.onclick = function() {
  Modal.close() // Remove o open na classe geral da caixa, fazendo com que ao clicar no X ela seja fechada
}  

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
