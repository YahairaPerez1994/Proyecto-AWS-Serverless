import React, { useState } from 'react';
import '../preciodia/playacontent.css';
import lupa from '../img/lupa.png';
import './playacontenhis.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // Asegurarse de importar ChartJS para evitar errores

const PlayaContenHis = () => {
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedPeriod, setSelectedPeriod] = useState(""); // Estado para el periodo seleccionado
    const [selectedPort, setSelectedPort] = useState(""); // Estado para el puerto seleccionado
    const [apiData, setApiData] = useState(null); // Estado para almacenar los datos de la API
  
  const speciesList = [
"Aguja, agujilla, aguja tipo 1, Agujilla verde, marao de California, pez aguja, picuda",
"Aguja, wahoo, agujilla, peto, barracuda",
"Agujilla, picuda, barracuda",
"Agujilla, picuda, barracuda, agujilla blanca",
"Albacora, Atún de aleta larga",
"Almeja",
"Almeja, concha blanca",
"Almeja,mejillón de altura, taca, raja",
"Anchoa",
"Anchoveta, anchoveta peruana, peladilla",
"Angelote",
"Angelote, pez angel",
"Anguila común, culebra de mar",
"Atun chauchero",
"Atún de aleta amarilla, albacora",
"Atún de aleta azul",
"Atún de ojo grande, patudo",
"Ayamarca, pacific anchovy, ayamarea",
"Ayanque, cachema (norte),  corvinilla del norte",
"Babosa, caracol babosa, abalón, tapadera, orejón, abulón,  perforador",
"Babunco, gallinazo",
"Bacalao de profundidad",
"Bagre",
"Bagre blanco, bagre marino",
"Bagre cabeza de piedra, bagre",
"Bagre con faja, bagre",
"Bagre rojo, bagre pepe",
"Barbudo amarillo",
"Barbudo azul, barbudo, piñarro, barbudo común, barbon",
"Barquillo, barbudo",
"Barracuda, picuda, agujilla",
"Barrilete negro, barrilete perla, bonito negro, macarela",
"Barrilete negro, tamborin, melva, fragata, botellita",
"Barrilete, bonito, rayado",
"Bereche",
"Bereche cola amarilla, bereche brillante, bereche ñato, bereche",
"Bereche,rayado",
"Berrugata, viuda, vieja",
"Bio-bio, congrio culebra",
"Bocadulce, salema, chopas",
"Bocón, trambollo, tamboreta, rape",
"Bonito, chauchilla, cerrajon, mono, marrajo",
"Borracho, sueño, borracho gigante",
"Burro, arnillo, caracha, gallinazo, pintada, sargo de roca",
"Caballa, caballa verle, macarela, caballeta, estornino",
"Cabeza dura, chivilico, roncador",
"Cabinza",
"Cabinza serranida, indio",
"Cabrilla, cagálo, bagalo, cabrilla comun",
"Cachema, ayanque, ayangue",
"Calamar común",
"Calamar pitillo, Calamar dardo, Calamar",
"Callana, corcovado",
"Camaron titi",
"Camaroncito rojo, Camarón rojo, Múnida",
"Camiseta, mariposa, cometa, pez asada",
"Camote, bacalao, rollizo, canguro",
"Camotillo",
"Camotillo, camote, cabrilla, cagua",
"Camotillo, camote, carajito",
"Cangrejo araña",
"Cangrejo camote, jaiba mora, cangrejo de fango",
"Cangrejo cockeri",
"Cangrejo del manglar",
"Cangrejo nadador",
"Cangrejo nadador, jaiva morada",
"Cangrejo peludo",
"Cangrejo popeye",
"Cangrejo violáceo",
"Caracol bola, caracol blanco",
"Caracol coco",
"Caracol conus, cono",
"Caracol dos puntas, caracol fresa, caracol cerezo",
"Caracol gringo, caracol",
"Caracol peludo, caracol",
"Caracol piña, caracol repollo",
"Caracol rosado,Caracol chino,Burza",
"Caracol ruso, caracol",
"Caracol, caracol negro, caracol común, caracol plomo",
"Castañeta manchada",
"Castañuela, castañeta, castañeta manchada, catañeta comun, chavela",
"Cazón chileno, cazón de aleta, tiburon de aleta, tollo cazón",
"Cazón mantequero, cuero duro",
"Cazón vidrio",
"Cazón, tiburón, cazón chileno",
"Chalaco, trambollo, tomollo, trambollo con escamas, chalaco, peje viejo",
"Chamaco, chancharro",
"Chanque, tolina, pata de burro, abalón",
"Chaparra, mojarra",
"Chavela, mojarra, mojarra blanca,  chavelita",
"Chavelita, Castañuela, Chavelo, castañeta manchada",
"Cherlo, calato, choromelo, chanchorro",
"Chilindrina, pampanito pintado",
"China, mojarra ciega, camotillo,corvinilla ciega, mojarrilla grande",
"Chiri, palometa, cometrapo, pampano, pampanito",
"Chita dorada, burrito",
"Chita, sargo del sur",
"Chochoque",
"Chorito negro",
"Choro zapato,choro,cholga",
"Choro, cholga, mejillón",
"Chula, misho, viña, señorita, muchachita",
"Chumbo plumudo, pampano de hebra, pampanito",
"Cochayuyo",
"Coche, peje chancho, chucuturula, pez gatillo",
"Cocinero, chiri, cocinero ñato, chumbo ñato norteño",
"Cocinero, chumbo, jurel del norte",
"Coco, suco, roncador, coco dorado, lambe coco, chula",
"Cojinoba mocosa",
"Cojinoba, palmera, palmerita, palmerona",
"Concha blanca, palabrita,marucha,concha mariposa, almeja, conchitas",
"Concha corazon,piconuda, piconudo, pichonudo",
"Concha de abanico, señorita",
"Concha huequera, concha de los esteros",
"Concha negra, concha prieta, concha de los manglares",
"Concha pala",
"Concha pata de burro",
"Concha pintada, vongole, piojosa",
"Congrio aleta pintada, congrio gato, congrio perlita",
"Congrio chilindrina, congrio pintado, congrio colorado, brotula pintada",
"Congrio moreno, congrio manchado, congrio pintado, congrio mulato, congrio",
"Congrio negro",
"Congrio rosado, congrio rojo",
"Corvina cherela, charela, cachema, cachema cola alunada, corvina del norte, corvinilla, chavela corvina",
"Corvina dorada,  guavina, charela",
"Corvina, corvinilla, corvina pampera, gringa",
"Curaca, Callana, Camiseta (P)",
"Diablico",
"Diablo manta, manta, diablo, chupa sangre",
"Diablo, pez diablo, chamaco, punal,diablo chalaco",
"Doncella, princesa",
"Doncellita, carapachudo",
"Dorado, fortuno cola amarilla, pardo",
"Emperador",
"Erizo",
"Escolar, pez aceite",
"Espejo, pampanito, jorobadito, pámpano, reloj",
"Espejo, reloj, jorobado",
"Falso volador,  vocador",
"Falso volador, vocador,  cabrilla voladora",
"Fortuno, fortuna",
"Gallinazo, gallinaza,gallina",
"Gatita, tiburón gato",
"Gavilán, basha, raya hocico de vaca",
"Guavina, corvina guavina, corvina, ayanque cola de rombo, corvinilla",
"Guitarra común, guitarra",
"Guitarra con bandas, guitarra bruja, guitarra rayada",
"Guitarra hocico blanco",
"Jaiva",
"Jaiva, jaiva gigante, jaiva azul",
"Jerguilla, leonora, nonora",
"Jorobado, espejo",
"Jurel fino, jurelillo",
"Jurel ojón",
"Jurel, furel, cairel, jurel del Pacífico Sur, jurelillo",
"Jureleta, Cocinero ñato, Chumbo, cocinero",
"Langosta",
"Langostino",
"Langostino blanco",
"Langostino café",
"Langostino cascara dura",
"Langostino pomada",
"Langostino pomada, Langostino amarillo",
"Lapa",
"Lapa blanco",
"Lenguado común, lenguado, lenguado fino",
"Lenguado con caninos,  lenguado dientudo, cingua",
"Lenguado de boca chica, lengüeta, lenguado, lengueta zapata, lenguado boquichico",
"Lenguado de cuatro ocelos, lenguado cuatro ojos",
"Lenguado de ojo grande, lenguado ojón, lenguado",
"Lenguado tres ocelos",
"Lenguado, lenguado veteado",
"Lengüeta",
"Lisa plateada",
"Lisa, lisa común, comebarro, lisa rayada",
"Lorna, cholo, roncacho, losna",
"Luna real, pez sol, opah",
"Macha, almeja amarilla",
"Machete de hebra, dinamarca, machelo hebra pinchagua",
"Machete, machetillo, machuelo",
"Manta",
"Manta de Munk, manta",
"Manta diablo, manta",
"Maraño de peña, carajito,carajo",
"Marotilla, sargo del norte",
"Marrajo",
"Mejillón, concha negra",
"Merlin negro,merlin,aguja",
"Merlin, Merlin azul, negro, rayado",
"Merluza peruana, merluza, pescadilla, pescada, peje palo, huaycuya, merlango",
"Merlín azul, merlin",
"Merlín rayado",
"Mero",
"Mero Ojo chico, mero ojo chiquito, mero, cherne",
"Mero Pintado",
"Mero colorado, mero rojo",
"Mero jabón, mero moteado",
"Mero murique, murique",
"Mero negro, mero de peña",
"Mero pescado, mero pintado",
"Mero pintado, cherne",
"Mero, curaca, chino",
"Mirador de estrellas, miraestrellas, miracielo, perro",
"Mis mis,  misho, bobo, miscuy",
"Misho, muchachita, chula, zorro",
"Mojarrilla, mojarrilla común",
"Mono",
"Morena",
"Navaja",
"Navajuela, chaveta, navaja, pico de pato",
"Negro,  negrillo",
"Ofensivo, ronco",
"Ojo de uva, ojón, papañagua",
"Ojon rayado, chulita, chula",
"Ostión, Ostra",
"Ostra, ostión",
"Ovas de volador, Cau cau",
"Pampanito, chiri, palometa, chiri lomo negro",
"Pampano toro",
"Pardo, fortuno",
"Pardo, pez hojita, citarita, chuyes, riki riki, parbo",
"Pargo, pargo rojo, paramo",
"Parlamo,pez diablo",
"Peje blanco, cabezón, blanquillo",
"Peje fino, peje blanco",
"Peje gallo, ñato",
"Peje perro, vieja",
"Peje sapo, chinguillo",
"Pejerrey",
"Pepino de mar",
"Pepino de mar, ancoco",
"Percebes",
"Perela, cabrilla perela, cabrilla fina, cágalo, muñe, muñi",
"Periche",
"Perico, dorado",
"Perico, pez loro",
"Pez Diablo, chamaca",
"Pez aceitoso",
"Pez aguja, belona, aguja belona",
"Pez agujilla, balao, Agujilla roja",
"Pez choclo, Chopa, salema, chopa arco iris",
"Pez choclo, ronco ojon, ofensivo",
"Pez cinta, sable",
"Pez corneta, pez flauta",
"Pez espada, espada",
"Pez fraile",
"Pez loro, loro, peje loro",
"Pez torpedo, aguja tipo 4",
"Pez vela, vela",
"Pez volador hocicon, aguja tipo 3",
"Pez volador, lisa voladora",
"Pez volador, lisa voladora, pez volador ali negra, volador de cuatro alas",
"Picuda, Aguja, Agujón sable",
"Pintadilla,  pintacha, páramo, boca dulce",
"Plumilla, plumero",
"Pococho de mar, beriquete",
"Polla, polla rayada",
"Pota, calamar gigante",
"Princesa, doncella",
"Pulpo",
"Puñal, diablico, diablo, rojo, diablico rojo, richichi",
"Pámpano de hebra",
"Pámpano fino",
"Pámpano, pampanito, cometrapo, palometa",
"Páramo, cometrapo, pajaritos",
"Quimera",
"Raya batea, batana",
"Raya bruja, raya de Vélez, raya de velezi",
"Raya c. espinas, tapadera",
"Raya coluda",
"Raya eléctrica gigante, raya eléctrica",
"Raya espinosa",
"Raya espinosa de cola corta, raya espinosa, pastelillo, wiri wiri, raya espinoza",
"Raya mariposa, raya papel, raya tuyo",
"Raya pelágica",
"Raya pintada",
"Raya águila chilena, raya águila, peje águila",
"Raya águila peruana, raya águila, raya",
"Robalito de aleta dorada, robalito",
"Robalo, lubina, robalíto",
"Rollizo, camote",
"Roncador",
"Roncador rayado, alianza",
"Róbalo, robalíto",
"Sable, sable negro",
"Samasa, anchoveta blanca",
"San Pedro rojo, chiro",
"San pedrano, doncella",
"Sardina",
"Sardina,  sardina común",
"Sargo de peña",
"Sargo rayado",
"Semita",
"Semáforo, ojo de plata, peje sol, linterna",
"Sierra, verle",
"Sierrilla, perrito, voladora, párlamo, perritos, chaqueta de cuero",
"Suco rayado",
"Suño, gato, tiburón gato, fancho",
"Tamborin",
"Tamborín",
"Tiburon negro dormilon",
"Tiburon pardo, cazon, tiburon de aleta punta negra, tiburon, volador",
"Tiburón azul, chiri, tiburón, tintorera",
"Tiburón diamante, diamante, mako, tiburón bonito",
"Tiburón espinoso, tiburón negro espinoso, tiburon chapota, tiburón de profundidad",
"Tiburón martillo, cruceta",
"Tiburón pardo",
"Tiburón zorro común, peje zorro,tiburon zorro comun",
"Tiburón zorro ojón, tiburon zorro de ojo grande",
"Tiburón zorro pelágico",
"Tollo aguado, tiburon negro narigon, tiburón de profundidad",
"Tollo blanco, pirucho",
"Tollo común, tollo mamita,  tollo prieto, piruche",
"Tollo fino, tollo con bandas, Tollo ley",
"Tollo gato",
"Tollo manchado, tollo rara",
"Tollo mantequero",
"Torpedo, tembladera, raya eléctrica",
"Trambollo,  tomollo, chalapo ojos",
"Unicornio, pez lija, pez lima",
"Vieja bocona, diablo rojo, puñal",
"Vieja, vieja negra",
"Viña",
"Yuyo,  mococho, chicorea de mar",
"Ziño, anémona",
"Zorro",
"boquichico",
"carachama",
"cho ichio",
"corvina",
"cunshi, bagre",
"doncella",
"hambira",
"lisa",
"manta gigante, manta, manta raya, mortaja voladora",
"maparate",
"mota",
"palometa",
"panshin",
"paña blanca",
"paña roja",
"pluma,cabeza de zorro,mero,camote,peje zorro,zorro,plumero",
"ractacara",
"sabalo",
"shiripira",
"ulilla",
"yahuarachi",
];
const portList = [
    "07 DE JUNIO", "ACAPULCO", "ANCON", "ATICO", "BELEN", "CABALLOCOCHA",
    "CABO BLANCO", "CALLAO", "CAMANA", "CANCAS", "CARQUIN", "CASMA", "CERRO AZUL",
    "CHALA", "CHANCAY", "CHIMBOTE", "CHORRILLOS", "CONTAMANA", "CULEBRAS",
    "EL AÑURO", "EL DORADO", "EL Ã‘URO", "EL ÑURO", "GRAU", "HUACHO", "ILO",
    "ISLAY", "ISLILLA", "LA CRUZ", "LA PLANCHADA", "LAS DELICIAS", "LOMAS",
    "LOS CHIMUS", "LOS ORGANOS", "MALABRIGO", "MANCORA", "MATARANI", "MORRO SAMA",
    "PACASMAYO", "PAITA", "PARACHIQUE", "PIMENTEL", "PUCUSANA", "PUERTO",
    "PUERTO ETEN", "PUERTO PIZARRO", "PUERTO RICO", "PUERTO VIEJO", "PUNCHANA",
    "QUILCA", "REQUENA", "SALAVERRY", "SAMANCO", "SAN ANDRES", "SAN JOSE",
    "SAN JUAN DE MARCONA", "SANTA ROSA", "SUPE", "TALARA", "VEGUETA", "YACILA",
    "YURIMAGUAS", "ZORRITOS"
];

const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
};

const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
};

const handlePortChange = (event) => {
    setSelectedPort(event.target.value);
};

const handleSearch = async () => {
    if (!selectedSpecies || !selectedPeriod || !selectedPort) {
        alert('Por favor selecciona todas las opciones');
        return;
    }

    const apiUrl = `https://46s14d7xm0.execute-api.us-east-1.amazonaws.com/preprod/infomar/precioPorSpan?nombre_comun=${encodeURIComponent(selectedSpecies)}&puerto=${encodeURIComponent(selectedPort)}&span=${encodeURIComponent(selectedPeriod)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setApiData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Hubo un error al buscar los datos');
        console.log(error); // Agregar esta línea para imprimir más detalles sobre el error
    }
    };
const generateRandom = () => {
    // Genera un color aleatorio en formato hexadecimal
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };
  
  const barChartData = apiData
    ? {
        labels: Object.keys(apiData.Data),
        datasets: [
          {
            label: 'Precio en playa (Soles/kg)',
            data: Object.values(apiData.Data),
            backgroundColor: [
              '#FFAE6A', // Color de la primera barra
              '#FF8243', // Color de la segunda barra
              '#E26A2C', // Color de la tercera barra
              '#C65314', // Color de la cuarta barra
              // Continúa añadiendo más colores si hay más datos
            ],
            
          },
        ],
      }
    : {};
  
    const options = {
     
      scales: {
        y: {
          axis: 'y', // Mostrar el eje Y en el gráfico
          ticks: {
            callback: function(value) {
              return `S/${Math.round(value)}`; // Formatear el valor como número entero
            },
            maxTicksLimit: 6, // Máximo 6 números
            color: 'black' // Color de la fuente del eje Y
          },
      
          
        },
      },
    };

        return (
            <div className="dropdown-container">
                <label className='label' htmlFor="speciesDropdown">Especie:</label>
                <select id="speciesDropdown" value={selectedSpecies} onChange={handleSpeciesChange}>
                    <option value="">Seleccionar</option>
                    {speciesList.map((species, index) => (
                        <option key={index} value={species}>{species}</option>
                    ))}
                </select>
                <div className="port-dropdown-container">
                    <label className='label' htmlFor="portDropdown">Puerto:</label>
                    <select id="portDropdown" value={selectedPort} onChange={handlePortChange}>
                        <option value="">Seleccionar</option>
                        {portList.map((port, index) => (
                            <option key={index} value={port}>{port}</option>
                        ))}
                    </select>
                </div>
                <div className="period-dropdown-container">
                    <label className='labelp' htmlFor="periodDropdown">Periodo:</label>
                    <select id="periodDropdown" value={selectedPeriod} onChange={handlePeriodChange}>
                        <option value="" disabled>Seleccionar</option>
                        <option value="7 días">7 dias</option>
                        <option value="1 mes">1 mes</option>
                        <option value="2 meses">2 meses</option>
                        <option value="3 meses">3 meses</option>
                        <option value="6 meses">6 meses</option>
                    </select>
                    <button className="his-button" onClick={handleSearch}>
                        <img src={lupa} alt="Buscar" className="lupa-icon" />
                    </button>
                </div>
                {apiData && (
                    <div className="api-data">
                        <div className="chart-container">
                            <Bar data={barChartData} options={options} />
                            <div className="source">
                                Fuente: INFOMAR - IMARPE {/* Indicación de la fuente */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };
    
    export default PlayaContenHis;
    