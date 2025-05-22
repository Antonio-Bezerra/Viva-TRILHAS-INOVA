// Simulação de API - em um projeto real, substitua por chamadas reais
const mockAPI = {
    getSummary: () => ({
        totalCases: 45000,
        totalDeaths: 12000,
        treatmentCoverage: 72,
        meta90: 85,
        lastUpdate: '2023-11-15'
    }),
    
    getCasesByUF: () => [
        { uf: 'SP', cases: 15000, deaths: 2000, rate: 32.1, coverage: 75 },
        { uf: 'RJ', cases: 9000, deaths: 1200, rate: 52.3, coverage: 70 },
        { uf: 'MG', cases: 8000, deaths: 900, rate: 37.8, coverage: 73 },
        { uf: 'BA', cases: 5000, deaths: 800, rate: 33.5, coverage: 68 },
        { uf: 'RS', cases: 4500, deaths: 600, rate: 39.2, coverage: 77 },
        { uf: 'PR', cases: 4000, deaths: 500, rate: 35.0, coverage: 74 },
        { uf: 'PE', cases: 3800, deaths: 550, rate: 39.8, coverage: 69 },
        { uf: 'CE', cases: 3500, deaths: 480, rate: 37.6, coverage: 71 }
    ],
    
    getAnnualTrend: () => [
        { year: 2018, cases: 38000, deaths: 11000 },
        { year: 2019, cases: 40000, deaths: 10500 },
        { year: 2020, cases: 42000, deaths: 10000 },
        { year: 2021, cases: 43000, deaths: 9800 },
        { year: 2022, cases: 44000, deaths: 9500 },
        { year: 2023, cases: 45000, deaths: 9200 }
    ],
    
    getGenderDistribution: () => ({
        male: 65,
        female: 33,
        other: 2
    }),
    
    getAgeDistribution: () => [
        { age: '15-24', value: 15 },
        { age: '25-34', value: 35 },
        { age: '35-44', value: 25 },
        { age: '45-54', value: 15 },
        { age: '55+', value: 10 }
    ]
};

// Função para formatar números
function formatNumber(num) {
    return new Intl.NumberFormat('pt-BR').format(num);
}

// Atualiza os KPIs
function updateKPIs() {
    const summary = mockAPI.getSummary();
    
    document.getElementById('total-cases').textContent = formatNumber(summary.totalCases);
    document.getElementById('total-deaths').textContent = formatNumber(summary.totalDeaths);
    document.getElementById('treatment-coverage').textContent = `${summary.treatmentCoverage}%`;
    document.getElementById('meta-90').textContent = `${summary.meta90}%`;
    document.getElementById('update-date').textContent = summary.lastUpdate.split('-').reverse().join('/');
}

// Cria gráfico de barras para casos por UF
function createUFChart() {
    const data = mockAPI.getCasesByUF();
    const ctx = document.getElementById('uf-chart');
    
    // Remove loading message
    ctx.innerHTML = '<canvas></canvas>';
    
    new Chart(ctx.querySelector('canvas'), {
        type: 'bar',
        data: {
            labels: data.map(item => item.uf),
            datasets: [{
                label: 'Casos de HIV',
                data: data.map(item => item.cases),
                backgroundColor: '#e63946',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Cria gráfico de linha para tendência anual
function createAnnualTrendChart() {
    const data = mockAPI.getAnnualTrend();
    const ctx = document.getElementById('annual-trend-chart');
    
    ctx.innerHTML = '<canvas></canvas>';
    
    new Chart(ctx.querySelector('canvas'), {
        type: 'line',
        data: {
            labels: data.map(item => item.year),
            datasets: [
                {
                    label: 'Casos',
                    data: data.map(item => item.cases),
                    borderColor: '#e63946',
                    backgroundColor: 'rgba(230, 57, 70, 0.1)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Óbitos',
                    data: data.map(item => item.deaths),
                    borderColor: '#1d3557',
                    backgroundColor: 'rgba(29, 53, 87, 0.1)',
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Cria gráfico de pizza para distribuição por gênero
function createGenderChart() {
    const data = mockAPI.getGenderDistribution();
    const ctx = document.getElementById('gender-chart');
    
    ctx.innerHTML = '<canvas></canvas>';
    
    new Chart(ctx.querySelector('canvas'), {
        type: 'pie',
        data: {
            labels: ['Masculino', 'Feminino', 'Outros'],
            datasets: [{
                data: [data.male, data.female, data.other],
                backgroundColor: [
                    '#457b9d',
                    '#e63946',
                    '#a8dadc'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Cria gráfico de barras para faixa etária
function createAgeChart() {
    const data = mockAPI.getAgeDistribution();
    const ctx = document.getElementById('age-chart');
    
    ctx.innerHTML = '<canvas></canvas>';
    
    new Chart(ctx.querySelector('canvas'), {
        type: 'bar',
        data: {
            labels: data.map(item => item.age),
            datasets: [{
                label: 'Distribuição por idade',
                data: data.map(item => item.value),
                backgroundColor: '#1d3557'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Cria mapa (simplificado)
function createMap() {
    const container = document.getElementById('map');
    container.innerHTML = ''; // Remove loading message
    
    // Simulação de mapa - em um projeto real, use Leaflet com geojson
    container.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <div style="text-align: center;">
                <h3 style="color: var(--dark-color); margin-bottom: 1rem;">Mapa de Calor por UF</h3>
                <p style="color: #666;">Em uma implementação real, este espaço conteria um mapa interativo
                mostrando a distribuição geográfica dos casos usando bibliotecas como Leaflet.js.</p>
                <p style="margin-top: 1rem;">Dados disponíveis na tabela abaixo.</p>
            </div>
        </div>
    `;
}

// Preenche a tabela com dados por UF
function fillUFTable() {
    const data = mockAPI.getCasesByUF();
    const tableBody = document.getElementById('uf-table');
    
    tableBody.innerHTML = data.map(item => `
        <tr>
            <td>${item.uf}</td>
            <td>${formatNumber(item.cases)}</td>
            <td>${formatNumber(item.deaths)}</td>
            <td>${item.rate.toFixed(1)}</td>
            <td>${item.coverage}%</td>
        </tr>
    `).join('');
}

// Inicializa o dashboard quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    updateKPIs();
    createUFChart();
    createAnnualTrendChart();
    createGenderChart();
    createAgeChart();
    createMap();
    fillUFTable();
});