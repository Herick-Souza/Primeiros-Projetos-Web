document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productForm');
    const cancelButton = document.getElementById('cancelButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });

    cancelButton.addEventListener('click', function() {
        window.history.back();
    });
});
