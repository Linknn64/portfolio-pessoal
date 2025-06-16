

    document.getElementById('saudacaoBtn').addEventListener('click', () => {
        document.getElementById('mensagemSaudacao').textContent = 'Olá! Bem-vindo ao meu portfólio!';
    });
    
    const saudacaoBtn = document.getElementById('saudacaoBtn');
    const skillsSection = document.getElementById('skillsSection'); // Nova referência
    
    saudacaoBtn.addEventListener('click', () => {
     skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
