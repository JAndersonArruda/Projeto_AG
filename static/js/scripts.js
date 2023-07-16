document.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.querySelector('.nav-container');
    var navSecondary = document.querySelector('.nav-container-secundary');

    navContainer.addEventListener('click', function() {
        navSecondary.classList.toggle('show');
    });
});

document.getElementById("problemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;

    // Aqui você pode fazer algo com os dados, como enviar para um servidor

    // Exemplo de exibição dos dados no console
    console.log("Nome: " + name);
    console.log("E-mail: " + email);
    console.log("Descrição: " + description);

    // Limpa o formulário após o envio
    document.getElementById("problemForm").reset();
});

function submitRating() {
    var rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
        alert("Avaliação enviada: " + rating.value + " estrelas");
    } else {
        alert("Por favor, selecione uma avaliação.");
    }
}
