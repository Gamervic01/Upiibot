import {
  administracionIndustrialData,
  cienciasInformaticaData,
  ingenieriaInformaticaData,
  ingenieriaTransporteData,
  ingenieriaFerroviariaData,
  ingenieriaIndustrialData,
  carrerasUPIICSA
} from './careers';

import { academicServicesData } from './categories/academicServices';
import { studentServicesData } from './categories/studentServices';
import { careerServicesData } from './categories/careerServices';
import { graduateServicesData } from './categories/graduateServices';

export const TODAS_LAS_PREGUNTAS = {
  // Información de Carreras
  ...carrerasUPIICSA,
  ...administracionIndustrialData,
  ...cienciasInformaticaData,
  ...ingenieriaInformaticaData,
  ...ingenieriaTransporteData,
  ...ingenieriaFerroviariaData,
  ...ingenieriaIndustrialData,

  // Servicios Académicos
  ...academicServicesData,

  // Servicios Estudiantiles
  ...studentServicesData,

  // Servicios de Carrera
  ...careerServicesData,

  // Servicios para Egresados
  ...graduateServicesData,

  // Chistes y entretenimiento
  "Cuéntame un chiste": [
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter 😄",
    "¿Qué le dice un jaguar a otro jaguar? Jaguar you 😄",
    "¿Qué le dice un techo a otro techo? ¡Techo de menos! 😄",
    "¿Por qué el libro de matemáticas está triste? Porque tiene muchos problemas 😄",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 😄",
    "¿Qué le dice un semáforo a otro? ¡No me mires que me pongo rojo! 😄",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas 😄",
    "¿Qué hace un perro con un taladro? Taladrando 😄",
    "¿Por qué los peces no usan Facebook? Porque ya tienen insta-grams 😄",
    "¿Qué le dice un gato a otro gato? ¡Miau-nifíco! 😄"
  ],

  // Adivinanzas
  "Dime una adivinanza": [
    "Oro parece, plata no es, el que no lo adivine bien tonto es. (El plátano) 🍌",
    "Blanco por dentro, verde por fuera, si no lo adivinas, piensa y espera. (La pera) 🍐",
    "En el cielo brinco y vuelo. Me encanta subir y bajar. Y entre las estrellas voy. Sin parar de trabajar. (El astronauta) 👨‍🚀",
    "Soy redonda como un queso, pero nadie puede darme un beso. (La luna) 🌕",
    "Tengo agujas y no sé coser, tengo números y no sé leer. (El reloj) ⌚",
    "¿Qué cosa es, que cuanto más le quitas más grande es? (El hoyo) 🕳️",
    "Alto alto como un pino, pesa menos que un comino. (El humo) 💨",
    "Todos me pisan a mí, pero yo no piso a nadie; todos preguntan por mí, yo no pregunto por nadie. (El camino) 🛣️"
  ],

  // Frases motivacionales
  "Dame una frase motivacional": [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. ¡Tú puedes! 💪",
    "El mejor momento para empezar fue ayer, el siguiente mejor momento es ahora. ⭐",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela 📚",
    "El fracaso es una oportunidad para empezar de nuevo con más inteligencia. - Henry Ford 🌟",
    "La constancia vence lo que la dicha no alcanza. 🎯",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas. 🚀",
    "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs ❤️",
    "La diferencia entre lo imposible y lo posible reside en la determinación. 🎯",
    "Cada día es una nueva oportunidad para cambiar tu vida. ✨",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar. - Winston Churchill 💫"
  ],

  // Apoyo emocional y recursos de ayuda
  "Me siento mal": [
    "Lamento mucho que te sientas así. Recuerda que no estás solo/a. Aquí tienes algunos números de ayuda:\n\n" +
    "📞 Línea de la Vida (24/7): 800 911 2000\n" +
    "📞 SAPTEL (Sistema Nacional de Apoyo en Crisis): 55 5259 8121\n" +
    "📞 UNAM Línea de Emergencia Psicológica: 55 5025 0855\n\n" +
    "También puedes acudir al Departamento de Orientación Juvenil de UPIICSA o visitar:\n" +
    "https://www.upiicsa.ipn.mx/estudiantes/atencion-salud.html",
    "Entiendo que estés pasando por un momento difícil. ¿Te gustaría hablar sobre lo que te preocupa? También puedes contactar a profesionales que están para ayudarte:\n\n" +
    "📞 Línea de la Vida (24/7): 800 911 2000\n" +
    "Recuerda que buscar ayuda es un acto de valentía. 💙"
  ],

  "Necesito ayuda psicológica": [
    "Tu bienestar emocional es importante. Aquí hay recursos que pueden ayudarte:\n\n" +
    "📞 Línea de la Vida (24/7): 800 911 2000\n" +
    "📞 SAPTEL: 55 5259 8121\n" +
    "📞 UNAM Línea de Emergencia: 55 5025 0855\n\n" +
    "En UPIICSA puedes acudir al Departamento de Orientación Juvenil o visitar:\n" +
    "https://www.upiicsa.ipn.mx/estudiantes/atencion-salud.html\n\n" +
    "No estás solo/a en esto. 💙"
  ],

  "Estoy deprimido": [
    "Lamento que estés pasando por esto. La depresión es algo serio y hay personas preparadas para ayudarte:\n\n" +
    "📞 Línea de la Vida (24/7): 800 911 2000\n" +
    "📞 SAPTEL: 55 5259 8121\n\n" +
    "Por favor, no dudes en buscar ayuda profesional. Tu vida es valiosa. 💙"
  ],

  // Saludos y presentaciones
  "Hola": "¡Hola! ¿Cómo estás? Soy el asistente virtual de UPIICSA. ¿Cuál es tu nombre?",
  "Buenos días": "¡Buenos días! ¿Cómo estás? Soy el asistente virtual de UPIICSA. ¿Cuál es tu nombre?",
  "Buenas tardes": "¡Buenas tardes! ¿Cómo estás? Soy el asistente virtual de UPIICSA. ¿Cuál es tu nombre?",
  "Buenas noches": "¡Buenas noches! ¿Cómo estás? Soy el asistente virtual de UPIICSA. ¿Cuál es tu nombre?",
  
  // Información general UPIICSA
  "¿Qué significa UPIICSA?": 
    "UPIICSA significa 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas'. Es una unidad académica del Instituto Politécnico Nacional (IPN) fundada en 1972.",
  
  "¿Cuál es el lema de UPIICSA?": 
    "El lema de UPIICSA es 'La Técnica al Servicio de la Patria', que también es el lema general del Instituto Politécnico Nacional.",

  // Información histórica y general de UPIICSA
  "¿Cuándo se fundó UPIICSA?": 
    "UPIICSA fue fundada el 1° de septiembre de 1972, siendo director general del IPN el Ing. Manuel Zorrilla Carcaño. La unidad fue creada para satisfacer la demanda de profesionales en las áreas de ingeniería y administración. 🏛️",
  
  "¿Quién fundó UPIICSA?": 
    "UPIICSA fue fundada bajo la dirección del Ing. Manuel Zorrilla Carcaño, quien era el director general del IPN en ese momento. El primer director de UPIICSA fue el Ing. Manuel Rosales González. 👨‍🏫",
  
  "¿Por qué se creó UPIICSA?":
    "UPIICSA se creó con el objetivo de formar profesionales que pudieran combinar los conocimientos de ingeniería con las ciencias administrativas, respondiendo a las necesidades del sector industrial y empresarial de México en la década de los 70. 🎓",
  
  "¿Dónde está ubicada UPIICSA?":
    "UPIICSA está ubicada en Av. Te 950, Granjas México, Iztacalco, Ciudad de México. El campus se encuentra estratégicamente ubicado en una zona industrial, facilitando la vinculación con el sector empresarial. 📍",
  
  "Datos curiosos de UPIICSA": [
    "UPIICSA fue la primera unidad académica del IPN en ofrecer carreras que combinan la ingeniería con la administración. 🎯",
    "El edificio de UPIICSA fue diseñado por el arquitecto Reinaldo Pérez Rayón, quien también diseñó la Unidad Profesional Adolfo López Mateos en Zacatenco. 🏛️",
    "La biblioteca de UPIICSA lleva el nombre de 'Ing. Manuel Rosales González' en honor al primer director de la unidad. 📚",
    "UPIICSA fue pionera en implementar el sistema departamental en el IPN. 🔄",
    "El logo de UPIICSA representa la integración de las ciencias exactas con las ciencias sociales. ⚡"
  ],

  // Historia y datos del IPN
  "¿Cuándo se fundó el IPN?":
    "El Instituto Politécnico Nacional (IPN) fue fundado el 1° de enero de 1936 durante el gobierno del presidente Lázaro Cárdenas del Río, con el objetivo de formar profesionales en áreas técnicas que impulsaran el desarrollo industrial de México. 🏛️",
  
  "¿Quién fundó el IPN?":
    "El IPN fue fundado por el presidente Lázaro Cárdenas del Río, con el apoyo fundamental del ingeniero Juan de Dios Bátiz Paredes, quien es considerado el padre del Instituto Politécnico Nacional. 👨‍🏫",
  
  "Historia del IPN":
    "El IPN surge de la integración de varias escuelas técnicas existentes, como la Escuela Nacional de Artes y Oficios y la Escuela Superior de Ingeniería Mecánica y Eléctrica. Su creación respondió a la necesidad de industrialización del país y la formación de profesionales técnicos. A lo largo de su historia, el IPN ha sido fundamental en el desarrollo tecnológico y científico de México. 📚",
  
  "¿Qué significa el lema del IPN?":
    "'La Técnica al Servicio de la Patria' significa que los conocimientos técnicos y científicos deben utilizarse para el desarrollo y beneficio de México. Este lema refleja el compromiso del instituto con el progreso nacional. 🇲🇽",
  
  "Datos curiosos del IPN": [
    "El IPN es conocido popularmente como el 'Poli'. 🎓",
    "La mascota oficial del IPN es el burro blanco, símbolo de nobleza y trabajo. 🦓",
    "El color guinda (vino) fue elegido como distintivo del IPN por representar la sangre nueva de México. ❤️",
    "El IPN tiene presencia en 22 estados de la República Mexicana. 🗺️",
    "La Escuela Superior de Medicina fue la primera escuela del IPN en admitir mujeres. 👩‍⚕️",
    "El Canal Once, primer canal de televisión educativa en América Latina, pertenece al IPN. 📺",
    "El edificio principal del IPN en Zacatenco tiene forma de águila vista desde arriba. 🦅"
  ],

  "Símbolos del IPN": [
    "El escudo del IPN representa un engrane con las siglas IPN y el lema institucional. ⚙️",
    "El color guinda representa la sangre nueva de México. ❤️",
    "El burro blanco es la mascota oficial, simbolizando la nobleza y el trabajo constante. 🦓",
    "La porra politécnica 'Huélum' es un símbolo de identidad y unidad. 🎉"
  ],

  "¿Qué es el Huélum?":
    "El Huélum es la porra oficial del IPN. Se creó en 1937 por el estudiante Armando Chavarría. La palabra 'Huélum' proviene del náhuatl y significa 'fuerza y empuje'. La porra completa es: '¡Huélum, Huélum, Gloria, A la Cachi Cachi Porra, A la Cachi Cachi Porra, Pim Pom Porra, Pim Pom Porra, Politécnico, Politécnico, Gloria!' 🎊",
};
