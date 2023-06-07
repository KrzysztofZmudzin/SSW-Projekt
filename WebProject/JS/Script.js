document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = 'Wiadomość została wysłana!';
    messageDiv.classList.add('message');

    var confirmButton = document.createElement('button');
    confirmButton.innerHTML = 'OK';
    confirmButton.classList.add('confirm-button');

    messageDiv.appendChild(confirmButton);
    document.body.appendChild(messageDiv);

    confirmButton.addEventListener('click', function() {
        messageDiv.remove();
        document.getElementById('contact-form').reset();
    });
});