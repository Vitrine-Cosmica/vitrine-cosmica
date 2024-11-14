document.addEventListener('DOMContentLoaded', function() {

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/cosmica.css'; 

    document.head.appendChild(link);


    const pageCosmica = document.getElementById('PageCosmica');
    

    pageCosmica.innerHTML = `
    <img src="assets/img/grup.svg" alt="" class="union">
        <h1 class="titulo-cosmica">Cósmica upcycle</h1>
        <h2 class="subtitulo-cosmica">Quem faz e como faz?</h2>
        <p class="texto-upcycle">
            Em 2020, a Cósmica começou. <br>
            Sem muitos planos sobre o que se tornaria, nasceu como um pequeno empreendimento de uma carioca que, há pouco tempo, havia se aventurado a viver em terras do sul. <br>
            Sempre enxerguei valor em coisas que as pessoas já não viam mais. Sempre olhei para o “lixo” de um outro ângulo... o de uma oportunidade. Talvez a falta de grana para comprar materiais nos leve a olhar para esses materiais chamados de “lixo” com muito mais criatividade. As primeiras bolsas saíram de quatro calças jeans que garimpei em um bazar. A primeira mochila foi feita com retalhos de roupas que eu mesma havia produzido no curso de costura. E assim começou o que seria a Cósmica hoje. <br>
            Confesso que nem conhecia o termo “upcycle” na época. <br>
            Nossa prioridade é utilizar ao máximo materiais já existentes, desde os tecidos até papéis para embalagens e etiquetas, sempre minimizando o uso de plástico. Para aviamentos, compramos apenas a quantidade necessária para cada coleção, escolhendo materiais de alta qualidade que garantem resistência e durabilidade ao produto final. Dessa forma, otimizamos os recursos e reduzimos o impacto ambiental em todas as etapas do processo.
        </p>

        <h1 class="titulo-galeria">Galeria Cósmica</h1>
        
    `;



});