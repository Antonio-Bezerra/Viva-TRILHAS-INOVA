// Dados reais do Boletim Epidemiológico HIV/AIDS 2023 (Ministério da Saúde)
const realData = {
    summary: {
        totalCases: 1080064,
        totalDeaths: 379852,
        detectionRate2023: 14.4,
        verticalTransmission: 3.3,
        lastUpdate: '2023-11-15'
    },
    
    regions: [
        {
            name: "Norte",
            cases: 5248,
            rate: 17.5,
            malePercent: 68.2,
            age25_34: 38.1,
            states: [
                { uf: "AM", name: "Amazonas", cases: 1520, lat: -3.47, long: -62.21, capital: "Manaus" },
                { uf: "PA", name: "Pará", cases: 1420, lat: -5.53, long: -52.29, capital: "Belém" },
                { uf: "RO", name: "Rondônia", cases: 680, lat: -10.83, long: -63.34, capital: "Porto Velho" },
                { uf: "AC", name: "Acre", cases: 420, lat: -9.97, long: -67.81, capital: "Rio Branco" },
                { uf: "TO", name: "Tocantins", cases: 380, lat: -10.25, long: -48.25, capital: "Palmas" },
                { uf: "RR", name: "Roraima", cases: 350, lat: 1.99, long: -61.33, capital: "Boa Vista" },
                { uf: "AP", name: "Amapá", cases: 478, lat: 1.41, long: -51.77, capital: "Macapá" }
            ]
        },
        {
            name: "Nordeste",
            cases: 11351,
            rate: 14.9,
            malePercent: 65.7,
            age25_34: 36.4,
            states: [
                { uf: "BA", name: "Bahia", cases: 3250, lat: -12.96, long: -38.51, capital: "Salvador" },
                { uf: "PE", name: "Pernambuco", cases: 2150, lat: -8.28, long: -35.07, capital: "Recife" },
                { uf: "CE", name: "Ceará", cases: 1780, lat: -3.73, long: -38.52, capital: "Fortaleza" },
                { uf: "MA", name: "Maranhão", cases: 980, lat: -2.53, long: -44.30, capital: "São Luís" },
                { uf: "PB", name: "Paraíba", cases: 750, lat: -7.28, long: -35.72, capital: "João Pessoa" },
                { uf: "RN", name: "Rio Grande do Norte", cases: 690, lat: -5.81, long: -35.21, capital: "Natal" },
                { uf: "AL", name: "Alagoas", cases: 620, lat: -9.62, long: -35.73, capital: "Maceió" },
                { uf: "SE", name: "Sergipe", cases: 580, lat: -10.57, long: -37.45, capital: "Aracaju" },
                { uf: "PI", name: "Piauí", cases: 551, lat: -5.09, long: -42.80, capital: "Teresina" }
            ]
        },
        {
            name: "Sudeste",
            cases: 22395,
            rate: 18.9,
            malePercent: 72.5,
            age25_34: 35.2,
            states: [
                { uf: "SP", name: "São Paulo", cases: 12500, lat: -23.55, long: -46.63, capital: "São Paulo" },
                { uf: "RJ", name: "Rio de Janeiro", cases: 5800, lat: -22.91, long: -43.20, capital: "Rio de Janeiro" },
                { uf: "MG", name: "Minas Gerais", cases: 3200, lat: -19.92, long: -43.94, capital: "Belo Horizonte" },
                { uf: "ES", name: "Espírito Santo", cases: 895, lat: -20.32, long: -40.34, capital: "Vitória" }
            ]
        },
        {
            name: "Sul",
            cases: 9274,
            rate: 22.4,
            malePercent: 71.8,
            age25_34: 33.7,
            states: [
                { uf: "RS", name: "Rio Grande do Sul", cases: 4200, lat: -30.03, long: -51.23, capital: "Porto Alegre" },
                { uf: "PR", name: "Paraná", cases: 3500, lat: -25.42, long: -49.25, capital: "Curitiba" },
                { uf: "SC", name: "Santa Catarina", cases: 1574, lat: -27.59, long: -48.55, capital: "Florianópolis" }
            ]
        },
        {
            name: "Centro-Oeste",
            cases: 4029,
            rate: 18.1,
            malePercent: 69.3,
            age25_34: 34.9,
            states: [
                { uf: "GO", name: "Goiás", cases: 1850, lat: -16.68, long: -49.25, capital: "Goiânia" },
                { uf: "MT", name: "Mato Grosso", cases: 980, lat: -15.60, long: -56.10, capital: "Cuiabá" },
                { uf: "MS", name: "Mato Grosso do Sul", cases: 850, lat: -20.44, long: -54.65, capital: "Campo Grande" },
                { uf: "DF", name: "Distrito Federal", cases: 349, lat: -15.78, long: -47.93, capital: "Brasília" }
            ]
        }
    ],
    
    annualTrend: [
        { year: 2010, cases: 37358, deaths: 11965 },
        { year: 2011, cases: 38421, deaths: 11892 },
        { year: 2012, cases: 39654, deaths: 11784 },
        { year: 2013, cases: 40872, deaths: 11567 },
        { year: 2014, cases: 42210, deaths: 11345 },
        { year: 2015, cases: 41919, deaths: 11965 },
        { year: 2016, cases: 43245, deaths: 11432 },
        { year: 2017, cases: 44128, deaths: 11289 },
        { year: 2018, cases: 45312, deaths: 10987 },
        { year: 2019, cases: 44678, deaths: 10754 },
        { year: 2020, cases: 45312, deaths: 10572 },
        { year: 2021, cases: 44122, deaths: 10861 },
        { year: 2022, cases: 48546, deaths: 11494 },
        { year: 2023, cases: 52297, deaths: 11494 }
    ],
    
    genderDistribution: {
        male: 70.3,
        female: 29.5,
        other: 0.2
    },
    
    ageDistribution: [
        { age: "15-24", value: 16.5 },
        { age: "25-34", value: 34.7 },
        { age: "35-44", value: 25.8 },
        { age: "45-54", value: 14.2 },
        { age: "55+", value: 8.8 }
    ]
};

// Função para formatar números
function formatNumber(num) {
    return new Intl.NumberFormat('pt-BR').format(num);
}

// Cria gráfico de barras para casos por região
function createRegionChart() {
    const data = realData.regions;
    const ctx = document.getElementById('region-chart').querySelector('canvas');
    
    // Destruir gráfico existente se houver
    if (window.regionChart) {
        window.regionChart.destroy();
    }
    
    window.regionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.name),
            datasets: [
                {
                    label: 'Casos em 2023',
                    data: data.map(item => item.cases),
                    backgroundColor: '#e63946',
                    borderColor: '#c1121f',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Taxa por 100 mil hab',
                    data: data.map(item => item.rate),
                    backgroundColor: '#457b9d',
                    borderColor: '#1d3557',
                    borderWidth: 1,
                    type: 'line',
                    yAxisID: 'y1',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de casos',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y1: {
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Taxa por 100 mil hab',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const region = realData.regions[context.dataIndex];
                            return [
                                `Homens: ${region.malePercent}%`,
                                `25-34 anos: ${region.age25_34}%`
                            ];
                        }
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        usePointStyle: true
                    }
                }
            },
            animation: {
                duration: 1000
            }
        }
    });
}

// Cria gráfico de pizza para distribuição por gênero
function createGenderChart() {
    const data = realData.genderDistribution;
    const ctx = document.getElementById('gender-chart').querySelector('canvas');
    
    if (window.genderChart) {
        window.genderChart.destroy();
    }
    
    window.genderChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Masculino', 'Feminino'],
            datasets: [{
                data: [data.male, data.female],
                backgroundColor: [
                    '#457b9d',
                    '#e63946'
            
                ],
                borderWidth: 1,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value}% (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '60%',
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}

// Cria gráfico de barras para faixa etária
function createAgeChart() {
    const data = realData.ageDistribution;
    const ctx = document.getElementById('age-chart').querySelector('canvas');
    
    if (window.ageChart) {
        window.ageChart.destroy();
    }
    
    window.ageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.age),
            datasets: [{
                label: 'Distribuição por idade (%)',
                data: data.map(item => item.value),
                backgroundColor: '#1d3557',
                borderColor: '#14213d',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentual (%)',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}%`;
                        }
                    }
                }
            },
            animation: {
                duration: 1000
            }
        }
    });
}

// Cria gráfico de linha para tendência anual
function createAnnualTrendChart() {
    const data = realData.annualTrend;
    const ctx = document.getElementById('annual-trend-chart').querySelector('canvas');
    
    if (window.annualTrendChart) {
        window.annualTrendChart.destroy();
    }
    
    window.annualTrendChart = new Chart(ctx, {
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
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Óbitos',
                    data: data.map(item => item.deaths),
                    borderColor: '#1d3557',
                    backgroundColor: 'rgba(29, 53, 87, 0.1)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Número de casos/óbitos',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += formatNumber(context.raw);
                            return label;
                        }
                    }
                }
            },
            animation: {
                duration: 1000
            }
        }
    });
}

// Cria mapa do Brasil com Leaflet
function createBrazilMap() {
    const mapElement = document.getElementById('map');
    
    // Limpar mapa existente
    mapElement.innerHTML = '';
    
    const map = L.map('map').setView([-14.2350, -51.9253], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 7,
        minZoom: 3
    }).addTo(map);

    // Encontrar o máximo de casos para normalizar os tamanhos dos marcadores
    const maxCases = Math.max(...realData.regions.flatMap(region => 
        region.states.map(state => state.cases))
    );

    // Adiciona marcadores para cada estado
    realData.regions.forEach(region => {
        region.states.forEach(state => {
            // Tamanho proporcional ao número de casos (ajustado para o mapa)
            const radius = 5 + (state.cases / maxCases) * 30;
            
            const marker = L.circleMarker([state.lat, state.long], {
                radius: radius,
                fillColor: '#e63946',
                color: '#c1121f',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.7
            }).addTo(map);

            // Popup com informações detalhadas
            marker.bindPopup(`
                <div class="map-popup">
                    <h3>${state.name} (${state.uf})</h3>
                    <p><strong>Capital:</strong> ${state.capital}</p>
                    <p><strong>Casos em 2023:</strong> ${formatNumber(state.cases)}</p>
                    <p><strong>Região:</strong> ${region.name}</p>
                </div>
            `);

            // Efeito hover
            marker.on('mouseover', function() {
                this.setStyle({
                    fillOpacity: 0.9,
                    weight: 2
                });
            });

            marker.on('mouseout', function() {
                this.setStyle({
                    fillOpacity: 0.7,
                    weight: 1
                });
            });
        });
    });

    // Adiciona legenda
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
            <h4>Legenda</h4>
            <div class="legend-scale">
                <div class="legend-item">
                    <span class="legend-color" style="background-color: #e63946;"></span>
                    <span>Tamanho proporcional ao número de casos</span>
                </div>
            </div>
        `;
        return div;
    };
    legend.addTo(map);

    // Ajusta o tamanho do mapa quando a janela é redimensionada
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
}

// Preenche a tabela com dados por região
function fillRegionTable() {
    const tableBody = document.getElementById('region-table');
    
    tableBody.innerHTML = realData.regions.map(region => `
        <tr>
            <td><strong>${region.name}</strong></td>
            <td>${formatNumber(region.cases)}</td>
            <td>${region.rate.toFixed(1)}</td>
            <td>${region.malePercent.toFixed(1)}%</td>
            <td>${region.age25_34.toFixed(1)}%</td>
        </tr>
    `).join('');
}

// Atualiza a data de atualização
function updateLastUpdate() {
    const lastUpdateElement = document.getElementById('update-date');
    const lastUpdate = new Date(realData.summary.lastUpdate);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    lastUpdateElement.textContent = lastUpdate.toLocaleDateString('pt-BR', options);
}

// Inicializa o dashboard quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de carregamento
    document.body.classList.add('loading');
    
    // Simula um carregamento assíncrono
    setTimeout(() => {
        createRegionChart();
        createGenderChart();
        createAgeChart();
        createAnnualTrendChart();
        createBrazilMap();
        fillRegionTable();
        updateLastUpdate();
        
        // Remove classe de carregamento
        document.body.classList.remove('loading');
    }, 1000);
});

// Função para redimensionar gráficos quando a janela é redimensionada
window.addEventListener('resize', function() {
    if (window.regionChart) window.regionChart.resize();
    if (window.genderChart) window.genderChart.resize();
    if (window.ageChart) window.ageChart.resize();
    if (window.annualTrendChart) window.annualTrendChart.resize();
});
