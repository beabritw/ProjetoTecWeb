document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.LoginButton');
    const inputs = document.querySelectorAll('.inputs-login');

    const usuarios = [
        { email: 'henrique@gmail.com', senha: '123456' },
        { email: 'beatriz@gmail.com', senha: '123456' }
    ];

    loginButton.addEventListener('click', function () {
        const email = inputs[0].value.trim().toLowerCase();
        const senha = inputs[1].value.trim();

        if (!email || !senha) {
            alert('Preencha todos os campos.');
            return;
        }

        const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuarioValido) {
            alert('Login bem-sucedido.');
        } else {
            alert('Email ou senha inválidos.');
        }
    });
});
