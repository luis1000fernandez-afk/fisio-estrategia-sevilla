const data = [
    {
        id: "SEV-003",
        municipio: "Utrera",
        slug: "utrera",
        perfil: "Cabecera Comarca",
        poblacion: 51718,
        renta: 24200,
        clinicas: 8,
        ratio: 6464,
        puntuacion: 91,
        semaforo: "🟢",
        precio_m2: 9.25,
        msg: "Océano azul comarcal. Nicho en salud de la mujer.",
        fase2: {
            zonas: "Vistalegre / Av. Los Palacios",
            lider: "Clínica Fisio Utrera",
            gap: "Suelo Pélvico y Pediatría",
            gancho: "Recuperación post-parto sin dolor."
        }
    },
    {
        id: "SEV-007",
        municipio: "Los Palacios y Villafranca",
        slug: "los-palacios-y-villafranca",
        perfil: "Tradicional Agrícola",
        poblacion: 38698,
        renta: 22800,
        clinicas: 5,
        ratio: 7739,
        puntuacion: 89,
        semaforo: "🟢",
        precio_m2: 7.00,
        msg: "Excelente ratio de pacientes. Ideal para innovar en neuro.",
        fase2: {
            zonas: "Bulevar Norte / El Horcajo",
            lider: "Fisioterapia Los Palacios",
            gap: "Fisioterapia Neurológica y Mayores",
            gancho: "Devuélvele la independencia a tus mayores."
        }
    },
    {
        id: "SEV-001",
        municipio: "Dos Hermanas",
        slug: "dos-hermanas",
        perfil: "Gran Núcleo Metropolitano",
        poblacion: 138981,
        renta: 29500,
        clinicas: 25,
        ratio: 5559,
        puntuacion: 88,
        semaforo: "🟢",
        precio_m2: 12.00,
        msg: "Boom urbanístico. Entrenúcleos pide a gritos especialización clínica.",
        fase2: {
            zonas: "Entrenúcleos / Montequinto",
            lider: "C.F. Dos Hermanas",
            gap: "Fisioterapia Invasiva Ecoguiada",
            gancho: "Recuperación deportiva ultrarrápida."
        }
    },
    {
        id: "SEV-012",
        municipio: "Bormujos",
        slug: "bormujos",
        perfil: "Crecimiento Joven",
        poblacion: 22780,
        renta: 31500,
        clinicas: 5,
        ratio: 4556,
        puntuacion: 87,
        semaforo: "🟢",
        precio_m2: 10.00,
        msg: "Población muy joven y activa; altísimo potencial deportivo.",
        fase2: null
    },
    {
        id: "SEV-009",
        municipio: "Carmona",
        slug: "carmona",
        perfil: "Turístico / Residencial",
        poblacion: 29551,
        renta: 25100,
        clinicas: 4,
        ratio: 7387,
        puntuacion: 86,
        semaforo: "🟢",
        precio_m2: 6.50,
        msg: "Ratio envidiable. Fidelidad local en un entorno consolidado.",
        fase2: null
    },
    {
        id: "SEV-005",
        municipio: "La Rinconada",
        slug: "la-rinconada",
        perfil: "Crecimiento Industrial",
        poblacion: 40162,
        renta: 25900,
        clinicas: 6,
        ratio: 6693,
        puntuacion: 85,
        semaforo: "🟡",
        precio_m2: 7.50,
        msg: "Mercado dividido pero interesante. Foco en San José.",
        fase2: null
    },
    {
        id: "SEV-006",
        municipio: "Écija",
        slug: "ecija",
        perfil: "Cabecera Comarca",
        poblacion: 39530,
        renta: 23500,
        clinicas: 6,
        ratio: 6588,
        puntuacion: 84,
        semaforo: "🟡",
        precio_m2: 6.00,
        msg: "Autonomía geográfica frente a Sevilla. Excelente para fidelizar.",
        fase2: null
    },
    {
        id: "SEV-002",
        municipio: "Alcalá de Guadaíra",
        slug: "alcala-de-guadaira",
        perfil: "Industrial / Consolidado",
        poblacion: 76547,
        renta: 26800,
        clinicas: 15,
        ratio: 5103,
        puntuacion: 82,
        semaforo: "🟡",
        precio_m2: 8.50,
        msg: "Mercado maduro. Requiere alta especialización para destacar.",
        fase2: null
    },
    {
        id: "SEV-004",
        municipio: "Mairena del Aljarafe",
        slug: "mairena-del-aljarafe",
        perfil: "Renta Alta",
        poblacion: 47541,
        renta: 35400,
        clinicas: 14,
        ratio: 3395,
        puntuacion: 79,
        semaforo: "🟡",
        precio_m2: 11.00,
        msg: "Mucha demanda pero saturación severa de centros VIP.",
        fase2: null
    },
    {
        id: "SEV-008",
        municipio: "Coria del Río",
        slug: "coria-del-rio",
        perfil: "Tradicional Metropolitano",
        poblacion: 30887,
        renta: 24500,
        clinicas: 5,
        ratio: 6177,
        puntuacion: 78,
        semaforo: "🟡",
        precio_m2: 7.00,
        msg: "Cliente conservador; vital ubicarse en la calle comercial.",
        fase2: null
    },
    {
        id: "SEV-011",
        municipio: "Tomares",
        slug: "tomares",
        perfil: "Renta Alta",
        poblacion: 25370,
        renta: 38200,
        clinicas: 9,
        ratio: 2818,
        puntuacion: 75,
        semaforo: "🟡",
        precio_m2: 13.00,
        msg: "Límite de saturación alcanzado frente al volumen de habitantes.",
        fase2: null
    },
    {
        id: "SEV-010",
        municipio: "Camas",
        slug: "camas",
        perfil: "Frontera Capital",
        poblacion: 27443,
        renta: 25400,
        clinicas: 6,
        ratio: 4573,
        puntuacion: 74,
        semaforo: "🔴",
        precio_m2: 9.50,
        msg: "Fuga constante de pacientes a las clínicas del centro de Sevilla.",
        fase2: null
    },
    {
        id: "SEV-013",
        municipio: "Lebrija",
        slug: "lebrija",
        perfil: "Núcleo Independiente",
        poblacion: 27665,
        renta: 18500,
        clinicas: 4,
        ratio: 6916,
        puntuacion: 87,
        semaforo: "🟢",
        precio_m2: 6.00,
        msg: "Aislamiento envidiable. Capitaliza los pacientes de los pueblos colindantes.",
        fase2: null
    },
    {
        id: "SEV-014",
        municipio: "Morón de la Frontera",
        slug: "moron-de-la-frontera",
        perfil: "Aislamiento Geográfico",
        poblacion: 27357,
        renta: 18900,
        clinicas: 4,
        ratio: 6839,
        puntuacion: 86,
        semaforo: "🟢",
        precio_m2: 6.50,
        msg: "Público cautivo. Oportunidad en salud deportiva y readaptación.",
        fase2: null
    },
    {
        id: "SEV-015",
        municipio: "San Juan de Aznalfarache",
        slug: "san-juan-de-aznalfarache",
        perfil: "Frontera Capital Sur",
        poblacion: 22138,
        renta: 19500,
        clinicas: 6,
        ratio: 3689,
        puntuacion: 75,
        semaforo: "🟡",
        precio_m2: 8.00,
        msg: "Mucha densidad de población pero renta ajustada. Competencia en precio.",
        fase2: null
    },
    {
        id: "SEV-016",
        municipio: "Arahal",
        slug: "arahal",
        perfil: "La Campiña Agrícola",
        poblacion: 19476,
        renta: 18400,
        clinicas: 3,
        ratio: 6492,
        puntuacion: 85,
        semaforo: "🟢",
        precio_m2: 5.50,
        msg: "Gran lealtad del paciente local. Faltan servicios avanzados.",
        fase2: null
    },
    {
        id: "SEV-017",
        municipio: "Marchena",
        slug: "marchena",
        perfil: "La Campiña Tradicional",
        poblacion: 19264,
        renta: 19800,
        clinicas: 3,
        ratio: 6421,
        puntuacion: 85,
        semaforo: "🟢",
        precio_m2: 5.50,
        msg: "Demanda sin cubrir en pediatría y dolor crónico.",
        fase2: null
    },
    {
        id: "SEV-018",
        municipio: "Lora del Río",
        slug: "lora-del-rio",
        perfil: "Vega Alta",
        poblacion: 18417,
        renta: 18700,
        clinicas: 2,
        ratio: 9208,
        puntuacion: 90,
        semaforo: "🟢",
        precio_m2: 5.00,
        msg: "Ratio altísimo. Absoluta falta de fisioterapia invasiva y avanzada.",
        fase2: null
    },
    {
        id: "SEV-019",
        municipio: "Osuna",
        slug: "osuna",
        perfil: "Polo Universitario",
        poblacion: 17442,
        renta: 19200,
        clinicas: 3,
        ratio: 5814,
        puntuacion: 80,
        semaforo: "🟡",
        precio_m2: 6.50,
        msg: "Población flotante estudiantil y hospitalaria. Ideal Pilates Terapéutico.",
        fase2: null
    },
    {
        id: "SEV-020",
        municipio: "Castilleja de la Cuesta",
        slug: "castilleja-de-la-cuesta",
        perfil: "Aljarafe Consolidado",
        poblacion: 17230,
        renta: 22100,
        clinicas: 5,
        ratio: 3446,
        puntuacion: 75,
        semaforo: "🟡",
        precio_m2: 9.00,
        msg: "Espacio de transición hacia el Aljarafe. Elevada competencia del entorno.",
        fase2: null
    },
    {
        id: "SEV-021",
        municipio: "La Algaba",
        slug: "la-algaba",
        perfil: "Expansión Norte",
        poblacion: 16618,
        renta: 18100,
        clinicas: 2,
        ratio: 8309,
        puntuacion: 88,
        semaforo: "🟢",
        precio_m2: 7.00,
        msg: "Crecimiento reciente, muy cerca de Sevilla pero con escasez de clínicas locales.",
        fase2: null
    },
    {
        id: "SEV-022",
        municipio: "Espartinas",
        slug: "espartinas",
        perfil: "Residencial Alto",
        poblacion: 16401,
        renta: 31500,
        clinicas: 3,
        ratio: 5467,
        puntuacion: 84,
        semaforo: "🟡",
        precio_m2: 9.50,
        msg: "Población de alto poder adquisitivo. Exige clínicas boutique y tecnología.",
        fase2: null
    },
    {
        id: "SEV-023",
        municipio: "Sanlúcar la Mayor",
        slug: "sanlucar-la-mayor",
        perfil: "Centro Comarcal",
        poblacion: 14120,
        renta: 23400,
        clinicas: 3,
        ratio: 4706,
        puntuacion: 80,
        semaforo: "🟡",
        precio_m2: 8.50,
        msg: "Nudo de comunicaciones. Atrae pueblos del corredor del Guadiamar.",
        fase2: null
    },
    {
        id: "SEV-024",
        municipio: "Gines",
        slug: "gines",
        perfil: "Aljarafe Premium",
        poblacion: 13428,
        renta: 29800,
        clinicas: 4,
        ratio: 3357,
        puntuacion: 74,
        semaforo: "🟡",
        precio_m2: 10.50,
        msg: "Municipio pequeño pero de renta alta. Ya está bastante densificado.",
        fase2: null
    }
];

// DOM Elements
const grid = document.getElementById('results-grid');
const rentaSlider = document.getElementById('renta-slider');
const pobSlider = document.getElementById('poblacion-slider');
const rentaVal = document.getElementById('renta-value');
const pobVal = document.getElementById('poblacion-value');
const modal = document.getElementById('detail-modal');
const closeBtn = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// Formatting utilities
const fmtMoney = (val) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
const fmtNum = (val) => new Intl.NumberFormat('es-ES').format(val);

// Render the grid
function renderGrid() {
    grid.innerHTML = '';
    const minRenta = parseInt(rentaSlider.value);
    const minPob = parseInt(pobSlider.value);

    // Apply filters
    const filtered = data.filter(d => d.renta >= minRenta && d.poblacion >= minPob);

    filtered.forEach(pueblo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-score">${pueblo.semaforo}</div>
            <div class="card-title">${pueblo.municipio}</div>
            <div class="card-subtitle">${pueblo.perfil}</div>
            <div class="card-data">
                <div class="card-data-item">
                    <span>Población</span>
                    <span class="card-data-value">${fmtNum(pueblo.poblacion)}</span>
                </div>
                <div class="card-data-item">
                    <span>Renta Media</span>
                    <span class="card-data-value">${fmtMoney(pueblo.renta)}</span>
                </div>
            </div>
            <div class="card-data">
                <div class="card-data-item">
                    <span>Ratio (Hab/Clínica)</span>
                    <span class="card-data-value">${fmtNum(pueblo.ratio)}</span>
                </div>
            </div>
            <div class="card-msg">${pueblo.msg}</div>
        `;
        card.onclick = () => openModal(pueblo);
        grid.appendChild(card);
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#64748B;">No hay municipios que cumplan estos filtros.</p>';
    }
}

// Modal Logic & Break Even Calculator
function openModal(pueblo) {
    // Generate HTML for details
    let fase2Html = '';
    if (pueblo.fase2) {
        fase2Html = `
            <div class="section-title">3. Inteligencia Estratégica VIP</div>
            <div class="vip-card">
                <div class="vip-title">🎯 Oportunidad Detectada</div>
                <div class="vip-data"><b>Zonas Expansión:</b> ${pueblo.fase2.zonas}</div>
                <div class="vip-data"><b>Competencia:</b> ${pueblo.fase2.lider}</div>
                <div class="vip-gap">GAP (Nicho Libre): ${pueblo.fase2.gap}</div>
                <div class="vip-data" style="margin-top:10px; font-style:italic;">💡 "${pueblo.fase2.gancho}"</div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-hero">
            <h2>${pueblo.semaforo} ${pueblo.municipio}</h2>
            <p style="color:#64748B">${pueblo.perfil}</p>
        </div>

        <div class="section-title">1. KPIs Macroeconómicos</div>
        <div class="kpi-grid">
            <div class="kpi-box"><div class="kpi-label">Población</div><div class="kpi-value">${fmtNum(pueblo.poblacion)}</div></div>
            <div class="kpi-box"><div class="kpi-label">Renta Media</div><div class="kpi-value">${fmtMoney(pueblo.renta)}</div></div>
        </div>

        <div class="section-title">2. Saturación de Mercado</div>
        <div class="kpi-grid">
            <div class="kpi-box"><div class="kpi-label">Clínicas Actuales</div><div class="kpi-value">${pueblo.clinicas}</div></div>
            <div class="kpi-box"><div class="kpi-label">Ratio (Hab/Clínica)</div><div class="kpi-value">${fmtNum(pueblo.ratio)}</div></div>
        </div>

        ${fase2Html}

        <div class="calculator-card">
            <div class="calc-title">📊 Calculadora Break-Even</div>
            <div class="calc-input-group">
                <span>Costes Fijos Base (€):</span>
                <input type="number" id="calc-fijos" value="600">
            </div>
            <div class="calc-input-group">
                <span>Metros del local (m²):</span>
                <input type="number" id="calc-m2" value="60">
            </div>
            <div class="calc-input-group">
                <span>Precio Suelo Est. (€/m²):</span>
                <input type="number" id="calc-precio" value="${pueblo.precio_m2}">
            </div>
            <div class="calc-input-group">
                <span>Precio 1 Sesión (€):</span>
                <input type="number" id="calc-ticket" value="45">
            </div>
            <div class="calc-result" id="calc-result">
                Calculando...
            </div>
        </div>

        <div class="btn-group">
            <a href="https://www.google.com/maps/search/clinica+fisioterapia+${pueblo.slug}+sevilla/" target="_blank" class="btn btn-maps">🗺️ Ver Clínicas</a>
            <a href="https://www.idealista.com/venta-locales/${pueblo.slug}-sevilla/" target="_blank" class="btn btn-idealista">🏬 Buscar Locales</a>
        </div>
    `;

    // Attach Calculator Logic
    const inpFijos = document.getElementById('calc-fijos');
    const inpM2 = document.getElementById('calc-m2');
    const inpPrecio = document.getElementById('calc-precio');
    const inpTicket = document.getElementById('calc-ticket');
    const divResult = document.getElementById('calc-result');

    const recalculate = () => {
        const cf = parseFloat(inpFijos.value) || 0;
        const m2 = parseFloat(inpM2.value) || 0;
        const pm2 = parseFloat(inpPrecio.value) || 0;
        const ticket = parseFloat(inpTicket.value) || 0;

        if (ticket <= 0) {
            divResult.innerHTML = "El precio de la sesión debe ser mayor a 0.";
            return;
        }

        const alquilerEstimado = m2 * pm2;
        const costesTotales = cf + alquilerEstimado;
        const sesionesBreakeven = Math.ceil(costesTotales / ticket);

        divResult.innerHTML = `Necesitas <b>${sesionesBreakeven} sesiones al mes</b> (~ ${(sesionesBreakeven / 20).toFixed(1)}/día) para cubrir tus gastos de <b>${fmtMoney(costesTotales)}</b>. Todo lo demás será beneficio neto.`;
    };

    inpFijos.addEventListener('input', recalculate);
    inpM2.addEventListener('input', recalculate);
    inpPrecio.addEventListener('input', recalculate);
    inpTicket.addEventListener('input', recalculate);

    // Initial Calc
    recalculate();

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Modal
closeBtn.onclick = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}
modal.onclick = (e) => {
    if (e.target === modal) closeBtn.onclick();
}

// Event Listeners for Filters
rentaSlider.addEventListener('input', (e) => {
    rentaVal.innerText = fmtMoney(e.target.value);
    renderGrid();
});

pobSlider.addEventListener('input', (e) => {
    pobVal.innerText = fmtNum(e.target.value) + " hab.";
    renderGrid();
});

// Init
renderGrid();
