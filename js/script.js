import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {  notANumber, calculateIMC } from './utils.js'

// Variáveis 
const form = document.querySelector('form') 
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//  .oninput é um evento relacionado ao textarea
inputWeight.oninput = function() {AlertError.close()}
inputHeight.oninput = function() {AlertError.close()}

// Funções 
form.onsubmit = function(event) { //Quando enviar o formulário (botão de calcular o IMC)
  event.preventDefault() //Não enviar o formulário
  
  const weight = inputWeight.value
  const height = inputHeight.value


  const showAlertError = notANumber(weight) || notANumber(height) // Caixa de Erro, quando retornar 2 valores DIFERENTES de Falso e falso, exibe a mensgem

  if (showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close()

  
  const result = calculateIMC(weight, height) // Retorna o cálculo do IMC
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message // Texto do `Seu IMC é de ${result}`, com os valores capturados em inputWeight.value e inputHeight.value, Que foram calculados em IMC(weight, height).
  Modal.open() // Abre a caixa branca com os dados
}


