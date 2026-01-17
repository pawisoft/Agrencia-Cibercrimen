//--- FASE 1: Configuración del HQ
const CONFIG = {
  nombreAgencia: "Agencia JUNKERS",
  separador: "-",
  anchoSeparador: 50,
  columnasReporte: {
    nombre: { titulo: "NOMBRE", ancho: 18 },
    peligrosidad: { titulo: "PELIGROSIDAD", ancho: 12 }
  },
  prefijoCodigoValido: "SN4TCH3RS",
  palabrasClave: ["Peligro", "Riesgo"]
};

// Base de datos
const baseDeDatos = [];

console.log("Inicio Sistema...");

//---FASE 2: La Base de Datos
let sospechoso1 = {
  nombre: "Redhacker",
  codigo: "DRT-009",
  nivelPeligrosidad: 10,
  capturado: true,
  delitos: ["Hackeo", "Robo de Datos", "Robo de wifi"]
};
baseDeDatos.push(sospechoso1);

let sospechoso2 = {
  nombre: "hackerSenior",
  codigo: "SDT-034",
  nivelPeligrosidad: 5,
  capturado: false,
  delitos: ["Hackeo", "Robo de Datos"]
};
let sospechoso3 = {
  nombre: "hackerFullRed",
  codigo: "ZXT-456",
  nivelPeligrosidad: 3,
  capturado: true,
  delitos: ["Hackeo", "Robo de Datos"]
};
baseDeDatos.push(sospechoso2);
baseDeDatos.push(sospechoso3);

//---FASE 3: Herramientas de Gestión
function registrarSospechoso(nombre, codigo, nivelPeligrosidad, capturado, delitos) {
  let sospechoso = { nombre, codigo, nivelPeligrosidad, capturado, delitos };
  baseDeDatos.push(sospechoso);
  console.log(`Sospechoso ${nombre} registrado correctamente`);
}

function listaSospechosos() {
  for (let i = 0; i < baseDeDatos.length; i++) {
    console.log(`Agente: el sospechoso ${baseDeDatos[i].nombre}, tiene un nivel de peligro de ${baseDeDatos[i].nivelPeligrosidad}`);
  }
}

//---FASE 4: El Decodificador
function analizarCodigo(sospechoso) {
  const CodigoLimpio = sospechoso.codigo.trim();
  const EsValido = CodigoLimpio.startsWith(CONFIG.prefijoCodigoValido);

  if (!EsValido) {
    return `Código inválido para ${sospechoso.nombre}. Estado: Estándar.`;
  }

  const extraido = CodigoLimpio.substring(CONFIG.prefijoCodigoValido.length);
  const contieneClave = CONFIG.palabrasClave.some((clave) => extraido.includes(clave));

  return contieneClave
    ? `Código de Alta Prioridad para ${sospechoso.nombre}.`
    : `Código Estándar para ${sospechoso.nombre}.`;
}

//---FASE 5: Reporte Final
function imprimirSeparador() {
  console.log(CONFIG.separador.repeat(CONFIG.anchoSeparador));
}

function pad(texto, ancho) {
  return String(texto).padEnd(ancho, " ");
}

function generarReporteSeguridad() {
  imprimirSeparador();
  console.log(`${CONFIG.nombreAgencia} - Reporte de Seguridad`);
  imprimirSeparador();

  const encabezado =
    `${pad(CONFIG.columnasReporte.nombre.titulo, CONFIG.columnasReporte.nombre.ancho)}|` +
    `${pad(CONFIG.columnasReporte.peligrosidad.titulo, CONFIG.columnasReporte.peligrosidad.ancho)}`;
  console.log(encabezado);
  console.log(CONFIG.separador.repeat(encabezado.length));

  for (let i = 0; i < baseDeDatos.length; i++) {
    const s = baseDeDatos[i];
    const fila =
      `${pad(s.nombre, CONFIG.columnasReporte.nombre.ancho)}|` +
      `${pad(s.nivelPeligrosidad, CONFIG.columnasReporte.peligrosidad.ancho)}`;
    console.log(fila);
  }
  imprimirSeparador();
}

//---FASE 6: Despliegue y Créditos
listaSospechosos();
console.log(analizarCodigo(sospechoso1));
console.log(analizarCodigo(sospechoso2));
console.log(analizarCodigo(sospechoso3));
generarReporteSeguridad();

let agente1 = "Paulina Pizarro";
let agente2 = "Javiera Loyola";
console.log(`Sistema creado por los agentes: ${agente1}🕵🏻‍♀️ y ${agente2}🕵🏻‍♀️`);