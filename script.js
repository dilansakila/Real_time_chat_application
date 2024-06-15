function sendMessage() {
    const messageInput = document.getElementById('');
    const message = messageInput.value.trim();
    if (message !== '') {
      const chatMessages = docunt.querySelector('.chat-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement)
      messageInput.value = '';
      chatMessages.scrollTop = ;
    }
  }