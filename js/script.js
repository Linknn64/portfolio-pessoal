

    document.getElementById('saudacaoBtn').addEventListener('click', () => {
        document.getElementById('mensagemSaudacao').textContent = 'Olá! Bem-vindo ao meu portfólio!';
    });
    
    const saudacaoBtn = document.getElementById('saudacaoBtn');
    const skillsSection = document.getElementById('skillsSection'); // Nova referência
    
    saudacaoBtn.addEventListener('click', () => {
     skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });

//seção de geolocalização gerada por IA (Gemini 2.5 flash)

const getLocationBtn = document.getElementById('getLocation'); // Adicione ID no HTML
const locationMessage = document.getElementById('locationMessage'); // Adicione ID no HTML

if (getLocationBtn && locationMessage) {
    getLocationBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                locationMessage.textContent = `Sua localização: Latitude ${lat}, Longitude ${lon}`;
            }, error => {
                locationMessage.textContent = `Erro ao obter localização: ${error.message}`;
            });
        } else {
            locationMessage.textContent = 'Geolocalização não é suportada por este navegador.';
        }
    });
}