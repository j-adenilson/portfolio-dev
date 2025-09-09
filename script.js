function enviarWhatsApp(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511967592457';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, '_blank');
}
