var chatInput = document.querySelector('#chat-input');

chatInput.addEventListener('keydown', function (event) {
    // Si se presionó la tecla Enter
    if (event.key === 'Enter') {
      // Obtiene el texto del mensaje
      var message = chatInput.value;
  
      // Llama a la función addMessage con el mensaje como argumento
      addMessage(message);
  
      // Limpia el valor del elemento de entrada de texto
      chatInput.value = '';
    }
  });
  



// document.getElementById('chat-input').addEventListener('keypress', function(event) {
//     // Comprueba si se ha presionado la tecla Enter (código de tecla 13)
//     if (event.keyCode === 13) {
//       // Obtén el valor del mensaje ingresado
//       var message = this.value;
//       // Limpia el valor del elemento input
//       this.value = '';
//       // Agrega el mensaje a la clase message-list
//       addMessage(message);
//     }
//   });

function addMessage(message) {
    // Obtiene una referencia al elemento p con la clase nuevo-mensaje
    var nuevoMensajeElement = document.querySelector('.nuevo-mensaje');
  
    // Establece el texto del mensaje en el elemento p
    nuevoMensajeElement.textContent = message;
  
    // Obtiene la hora actual
    var currentTime = new Date();
  
    // Obtiene una referencia al elemento span con la clase hora-mensaje
    var horaMensajeElement = document.querySelector('.hora-mensaje');
  
    // Establece la hora en formato hh:mm en el elemento span
    horaMensajeElement.textContent = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  }





//   function addMessage(message) {
//     // Crea un elemento div con la clase message
//     var messageElement = document.createElement('div');
//     messageElement.className = 'message is-sender';
  
//     // Crea un elemento div con la clase message-body
//     var messageBodyElement = document.createElement('div');
//     messageBodyElement.className = 'message-body';
  
//     // Crea un elemento p con la clase message-text y agrega el mensaje al elemento
//     var messageTextElement = document.createElement('p');
//     messageTextElement.className = 'message-text';
//     messageTextElement.textContent = message;
//     messageBodyElement.appendChild(messageTextElement);
  
//     // Agrega el elemento message-body al elemento message
//     messageElement.appendChild(messageBodyElement);
  
//     // Agrega el elemento message a la clase message-list
//     document.querySelector('.message-list').appendChild(messageElement);
//   }
