
/* ====== CONFIG ====== */
// Optional: paste a Formspree (or similar) URL to receive appointment requests by email.
const FORM_ENDPOINT = "";   // e.g. "https://formspree.io/f/xxxxxxx"

/* ====== SAFE STORAGE ====== */
const store = {
  get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};

/* ====== STATIC TRANSLATIONS ====== */
const T = {
en:{banner_txt:"¿Prefiere leer en español? Este sitio está disponible en español.",banner_btn:"Ver en español →",eb_m:"Talk to someone",eb_p:"Find your path",eb_r:"Year by year",eb_mo:"Money matters",eb_pa:"For families",eb_d:"Mark your calendar",skip:"Skip to content",nav_mentors:"Mentors",nav_paths:"Pathways",nav_resources:"Resources",nav_money:"Paying for college",nav_parents:"Parents",
hero_tag:"For students & families · Grades 9–12",hero_h:"Hi! Let's figure out what's next, together.",hero_p:"Talk to a real mentor, explore college, work, and military paths, and get simple step-by-step help for every grade, for you and your family.",
cta1:"Book a mentor",cta2:"Explore my options",
q1_h:"I want to talk to someone",q1_p:"Schedule time with a counselor or alumni mentor.",q2_h:"I don't know what I want to do",q2_p:"Pick your interests and see majors, careers, and paths.",q3_h:"What should I do this year?",q3_p:"A checklist for 9th, 10th, 11th, and 12th grade.",q4_h:"How do we pay for college?",q4_p:"Financial aid, scholarships, and loans explained simply.",
m_h:"Mentorship & appointments",m_p:"Explore your interests, talk about concerns, learn your options, and build a relationship with someone who can guide you, starting early, not just senior year.",m_sample:"Sample mentors shown. Real counselor and alumni profiles will be added by your school.",
req_h:"Request an appointment",f_name:"Name",f_role:"I am a…",role_s:"Student",role_p:"Parent / guardian",f_grade:"Grade",f_mentor:"Mentor",f_date:"Preferred date",f_format:"Format",fmt_o:"Online (video call)",fmt_p:"In person",f_lang:"Language for the meeting",f_contact:"Email or phone",f_topic:"What would you like to talk about?",f_topic_ph:"Example: I'm not sure what major to pick.",f_submit:"Send request",
mon_h:"Monthly check-in meetings",mon_p:"Every student meets with a mentor once a month. Parents are welcome to join. Add the recurring meeting to your calendar:",mon_when:"First Tuesday of every month · 4:00 PM",mon_where:"Counseling office or online link (set by your school)",mon_ics:"Add to my calendar (.ics)",
ask_h:"Good things to bring up",ask1:"What I enjoy and what I'm good at",ask2:"Classes I should take next",ask3:"Worries about cost or about being first in my family to go",ask4:"Jobs, trades, military, or gap-year options",
p_h:"Explore your pathways",p_p:"There is no single \"right\" path. Tap everything that sounds interesting to you.",pt_h:"The four main routes",
r_h:"What to do each year",r_p:"Pick your grade. Check items off as you go. Your progress is saved on this device.",res_h:"Build your resume",res_p:"Colleges and employers look for what you do outside class, not only grades.",act_h:"After-school & volunteering ideas",act_link:"Find volunteer opportunities near you ↗",
mo_h:"Paying for college, explained",mo_p:"Start with free money (grants and scholarships), then work, and only then loans. Never pay to file the FAFSA, it is free.",
pa_h:"Parent & family corner",pa_p:"You do not need to know the college system to help. These are the words and questions that matter most.",gl_h:"Simple glossary",q_h:"Questions to ask the counselor",pa_acct:"Coming soon: family accounts, so parents can join meetings and read what was discussed.",
d_h:"Dates to remember",d_note:"Dates change each year. Always confirm on the official website or with your counselor.",
foot:"Parallax is a student-built prototype. Sample content only; verify details with your school counselor."},
es:{banner_txt:"Prefer English? This site is available in English.",banner_btn:"View in English →",eb_m:"Habla con alguien",eb_p:"Encuentra tu camino",eb_r:"Año por año",eb_mo:"Sobre el dinero",eb_pa:"Para las familias",eb_d:"Marca tu calendario",skip:"Saltar al contenido",nav_mentors:"Mentores",nav_paths:"Caminos",nav_resources:"Recursos",nav_money:"Pagar la universidad",nav_parents:"Padres",
hero_tag:"Para estudiantes y familias · Grados 9–12",hero_h:"¡Hola! Descubramos juntos qué sigue.",hero_p:"Habla con un mentor real, explora caminos hacia la universidad, el trabajo y el ejército, y recibe ayuda paso a paso para cada grado, para ti y tu familia.",
cta1:"Reservar un mentor",cta2:"Explorar mis opciones",
q1_h:"Quiero hablar con alguien",q1_p:"Agenda una cita con un consejero o un mentor egresado.",q2_h:"No sé qué quiero hacer",q2_p:"Elige tus intereses y mira carreras, profesiones y caminos.",q3_h:"¿Qué debo hacer este año?",q3_p:"Una lista para 9.º, 10.º, 11.º y 12.º grado.",q4_h:"¿Cómo pagamos la universidad?",q4_p:"Ayuda financiera, becas y préstamos explicados fácilmente.",
m_h:"Mentoría y citas",m_p:"Explora tus intereses, habla de tus preocupaciones, conoce tus opciones y crea una relación con alguien que te guíe, desde temprano, no solo en el último año.",m_sample:"Se muestran mentores de ejemplo. Tu escuela agregará los perfiles reales de consejeros y egresados.",
req_h:"Solicitar una cita",f_name:"Nombre",f_role:"Soy…",role_s:"Estudiante",role_p:"Padre / madre / tutor",f_grade:"Grado",f_mentor:"Mentor",f_date:"Fecha preferida",f_format:"Formato",fmt_o:"En línea (videollamada)",fmt_p:"En persona",f_lang:"Idioma de la reunión",f_contact:"Correo o teléfono",f_topic:"¿De qué te gustaría hablar?",f_topic_ph:"Ejemplo: No estoy seguro de qué carrera elegir.",f_submit:"Enviar solicitud",
mon_h:"Reuniones mensuales",mon_p:"Cada estudiante se reúne con un mentor una vez al mes. Los padres pueden unirse. Agrega la reunión recurrente a tu calendario:",mon_when:"Primer martes de cada mes · 4:00 p. m.",mon_where:"Oficina de consejería o enlace en línea (lo define tu escuela)",mon_ics:"Agregar a mi calendario (.ics)",
ask_h:"Temas para tratar",ask1:"Lo que me gusta y en lo que soy bueno",ask2:"Qué clases debo tomar después",ask3:"Preocupaciones por el costo o por ser el primero de la familia en ir",ask4:"Trabajos, oficios, ejército o un año sabático",
p_h:"Explora tus caminos",p_p:"No existe un único camino \"correcto\". Toca todo lo que te llame la atención.",pt_h:"Los cuatro caminos principales",
r_h:"Qué hacer cada año",r_p:"Elige tu grado. Marca cada tarea al terminarla. Tu progreso se guarda en este dispositivo.",res_h:"Crea tu currículum",res_p:"Las universidades y los empleadores valoran lo que haces fuera de clase, no solo las calificaciones.",act_h:"Actividades extracurriculares y voluntariado",act_link:"Encuentra oportunidades de voluntariado cerca de ti ↗",
mo_h:"Cómo pagar la universidad",mo_p:"Empieza con dinero gratis (subvenciones y becas), luego trabajo, y solo al final préstamos. Nunca pagues por llenar la FAFSA: es gratis.",
pa_h:"Rincón para padres y familias",pa_p:"No necesita conocer el sistema universitario para ayudar. Estas son las palabras y preguntas más importantes.",gl_h:"Glosario sencillo",q_h:"Preguntas para el consejero",pa_acct:"Próximamente: cuentas familiares, para que los padres puedan unirse a las reuniones y leer lo que se habló.",
d_h:"Fechas importantes",d_note:"Las fechas cambian cada año. Confírmalas siempre en el sitio oficial o con tu consejero.",
foot:"Parallax es un prototipo creado por estudiantes. Contenido de ejemplo; verifica los detalles con tu consejero escolar."}
};

/* ====== DATA (bilingual pairs) ====== */
const MENTORS = [
 {av:{bg:"#dfe9fa",skin:"#e0ac85",hair:"#3b2a20",shirt:"#4f74b0",long:true},name:"Ms. Rivera",type:"counselor",role:{en:"School counselor · All pathways",es:"Consejera escolar · Todos los caminos"},langs:"EN · ES",avail:{en:"Mon & Wed afternoons",es:"Lunes y miércoles por la tarde"}},
 {av:{bg:"#ffe9b3",skin:"#c68a5b",hair:"#26354f",shirt:"#26354f"},name:"Daniel Ortiz",type:"alumni",role:{en:"Alumnus · Engineering, state university",es:"Egresado · Ingeniería, universidad estatal"},langs:"EN · ES",avail:{en:"Tue evenings (online)",es:"Martes por la noche (en línea)"}},
 {av:{bg:"#dff1e6",skin:"#b97b50",hair:"#1d1d2b",shirt:"#f2b441",long:true},name:"Priya Shah",type:"alumni",role:{en:"Alumna · Community college → Nursing",es:"Egresada · Colegio comunitario → Enfermería"},langs:"EN",avail:{en:"Thu evenings (online)",es:"Jueves por la noche (en línea)"}},
 {av:{bg:"#fde0dc",skin:"#f1c27d",hair:"#5a3a22",shirt:"#7f9bc4"},name:"Marcus Lee",type:"alumni",role:{en:"Alumnus · Skilled trades & military",es:"Egresado · Oficios y ejército"},langs:"EN",avail:{en:"Saturday mornings",es:"Sábados por la mañana"}}
];
const MENTOR_FILTERS = [["all",{en:"All",es:"Todos"}],["counselor",{en:"Counselors",es:"Consejeros"}],["alumni",{en:"Alumni",es:"Egresados"}]];

const INTERESTS = {
 tech:{label:{en:"💻 Technology",es:"💻 Tecnología"},
   majors:{en:"Computer Science, Information Systems, Cybersecurity",es:"Ciencias de la Computación, Sistemas de Información, Ciberseguridad"},
   careers:{en:"Software developer, data analyst, IT specialist",es:"Desarrollador de software, analista de datos, especialista en TI"},
   work:{en:"IT certificates (CompTIA), coding bootcamps, apprenticeships",es:"Certificados de TI (CompTIA), bootcamps de programación, aprendizajes"},
   mil:{en:"Cyber operations, communications, IT specialist",es:"Operaciones cibernéticas, comunicaciones, especialista en TI"}},
 health:{label:{en:"🩺 Health",es:"🩺 Salud"},
   majors:{en:"Nursing, Public Health, Biology, Kinesiology",es:"Enfermería, Salud Pública, Biología, Kinesiología"},
   careers:{en:"Nurse, physical therapist, dental hygienist, doctor",es:"Enfermero/a, fisioterapeuta, higienista dental, médico/a"},
   work:{en:"CNA, EMT, medical assistant, pharmacy tech programs",es:"Programas de asistente de enfermería, paramédico, asistente médico, técnico de farmacia"},
   mil:{en:"Medic, health-care specialist",es:"Paramédico, especialista en atención médica"}},
 business:{label:{en:"📈 Business",es:"📈 Negocios"},
   majors:{en:"Business, Accounting, Marketing, Economics, Finance",es:"Administración, Contabilidad, Mercadotecnia, Economía, Finanzas"},
   careers:{en:"Accountant, marketer, entrepreneur, financial analyst",es:"Contador/a, mercadólogo/a, emprendedor/a, analista financiero"},
   work:{en:"Entry-level office jobs, sales, small-business start-up",es:"Empleos de oficina, ventas, iniciar un negocio pequeño"},
   mil:{en:"Logistics, finance, human resources",es:"Logística, finanzas, recursos humanos"}},
 arts:{label:{en:"🎨 Arts & Design",es:"🎨 Arte y Diseño"},
   majors:{en:"Graphic Design, Film, Architecture, Music, Communications",es:"Diseño Gráfico, Cine, Arquitectura, Música, Comunicación"},
   careers:{en:"Designer, video editor, architect, musician",es:"Diseñador/a, editor/a de video, arquitecto/a, músico/a"},
   work:{en:"Freelance, portfolio-based jobs, design certificates",es:"Trabajo independiente, empleos con portafolio, certificados de diseño"},
   mil:{en:"Public affairs, media, graphics",es:"Asuntos públicos, medios, gráficos"}},
 trades:{label:{en:"🔧 Building & Trades",es:"🔧 Construcción y Oficios"},
   majors:{en:"Construction Management, Engineering Technology",es:"Gestión de Construcción, Tecnología de Ingeniería"},
   careers:{en:"Electrician, welder, HVAC technician, mechanic",es:"Electricista, soldador, técnico de aire acondicionado, mecánico"},
   work:{en:"Paid apprenticeships, trade school, union programs",es:"Aprendizajes pagados, escuelas técnicas, programas sindicales"},
   mil:{en:"Engineering, mechanics, construction",es:"Ingeniería, mecánica, construcción"}},
 helping:{label:{en:"🍎 Helping & Teaching",es:"🍎 Ayudar y Enseñar"},
   majors:{en:"Education, Social Work, Psychology",es:"Educación, Trabajo Social, Psicología"},
   careers:{en:"Teacher, counselor, social worker, coach",es:"Maestro/a, consejero/a, trabajador/a social, entrenador/a"},
   work:{en:"Teaching assistant, childcare, community programs",es:"Asistente de maestro, cuidado infantil, programas comunitarios"},
   mil:{en:"Chaplain assistant, training, human services",es:"Asistente de capellán, capacitación, servicios humanos"}},
 science:{label:{en:"🔬 Science",es:"🔬 Ciencias"},
   majors:{en:"Chemistry, Biology, Environmental Science, Physics",es:"Química, Biología, Ciencias Ambientales, Física"},
   careers:{en:"Lab technician, researcher, environmental scientist",es:"Técnico/a de laboratorio, investigador/a, científico/a ambiental"},
   work:{en:"Lab assistant, environmental technician certificates",es:"Asistente de laboratorio, certificados de técnico ambiental"},
   mil:{en:"Nuclear, weather, laboratory specialist",es:"Nuclear, meteorología, especialista de laboratorio"}},
 law:{label:{en:"⚖️ Law & Public Service",es:"⚖️ Derecho y Servicio Público"},
   majors:{en:"Political Science, Criminal Justice, Public Policy",es:"Ciencias Políticas, Justicia Penal, Políticas Públicas"},
   careers:{en:"Lawyer, paralegal, police officer, firefighter",es:"Abogado/a, asistente legal, policía, bombero/a"},
   work:{en:"Paralegal certificate, police/fire academy, city jobs",es:"Certificado de asistente legal, academia de policía/bomberos, empleos municipales"},
   mil:{en:"Military police, intelligence, legal specialist",es:"Policía militar, inteligencia, especialista legal"}}
};
const LBL = {
  majors:{en:"Majors to look at",es:"Carreras universitarias para explorar"},
  careers:{en:"Careers",es:"Profesiones"},
  work:{en:"Work & certificates",es:"Trabajo y certificados"},
  mil:{en:"Military roles",es:"Puestos militares"},
  none:{en:"Tap an interest above to see ideas.",es:"Toca un interés arriba para ver ideas."}
};
const ROUTES = [
 {b:"b1",ico:"🎓",t:{en:"College",es:"Universidad"},d:{en:"4-year university or 2-year community college. Good for careers that require a degree. Community college is a lower-cost way to start and transfer.",es:"Universidad de 4 años o colegio comunitario de 2 años. Ideal para carreras que requieren título. El colegio comunitario es una forma más económica de empezar y transferirse."},l:["https://bigfuture.collegeboard.org","BigFuture (College Board)"]},
 {b:"b2",ico:"🛠️",t:{en:"Work, trades & certificates",es:"Trabajo, oficios y certificados"},d:{en:"Go straight into a job, a paid apprenticeship, or a short training program that leads to a licensed career.",es:"Empieza directo en un empleo, un aprendizaje pagado o un programa corto que lleva a una carrera con licencia."},l:["https://www.careeronestop.org","CareerOneStop"]},
 {b:"b3",ico:"🎖️",t:{en:"Military",es:"Ejército"},d:{en:"Paid training, benefits, and money for college (GI Bill). Talk to a recruiter AND a counselor. Ask every question before deciding.",es:"Capacitación pagada, beneficios y dinero para la universidad (GI Bill). Habla con un reclutador Y con un consejero. Haz todas tus preguntas antes de decidir."},l:["https://www.todaysmilitary.com","Today's Military"]},
 {b:"b4",ico:"🌎",t:{en:"Gap year or service",es:"Año sabático o servicio"},d:{en:"A planned year of service, work, or travel before college, such as AmeriCorps. Make a plan with a mentor first.",es:"Un año planeado de servicio, trabajo o viaje antes de la universidad, como AmeriCorps. Haz un plan con un mentor primero."},l:["https://americorps.gov","AmeriCorps"]}
];

const GRADES = {
 9:{title:{en:"9th grade: Explore & build habits",es:"9.º grado: Explorar y crear hábitos"},items:[
  {en:"Meet your school counselor and learn your graduation requirements",es:"Conoce a tu consejero y aprende los requisitos de graduación"},
  {en:"Try 1–2 clubs, sports, or volunteer activities",es:"Prueba 1–2 clubes, deportes o actividades de voluntariado"},
  {en:"Keep your grades strong. Every year counts for GPA",es:"Mantén buenas calificaciones. Cada año cuenta para el promedio (GPA)"},
  {en:"Take our interest explorer above and share results with a mentor",es:"Usa el explorador de intereses de arriba y comparte los resultados con un mentor"},
  {en:"Start a simple record of activities, awards, and hours",es:"Empieza un registro sencillo de actividades, premios y horas"}]},
 10:{title:{en:"10th grade: Narrow it down",es:"10.º grado: Reducir opciones"},items:[
  {en:"Take the PSAT (practice for the SAT)",es:"Toma el PSAT (práctica para el SAT)"},
  {en:"Start free SAT/ACT practice (Khan Academy)",es:"Empieza la práctica gratuita del SAT/ACT (Khan Academy)"},
  {en:"Choose challenging classes (AP, dual credit) that fit your interests",es:"Elige clases desafiantes (AP, crédito dual) que se ajusten a tus intereses"},
  {en:"Visit a college, trade school, or job site (virtual tours count)",es:"Visita una universidad, escuela técnica o lugar de trabajo (los recorridos virtuales cuentan)"},
  {en:"Talk to an alumni mentor about their path",es:"Habla con un mentor egresado sobre su camino"},
  {en:"Look for a summer job, program, or volunteer role",es:"Busca un empleo de verano, programa o puesto de voluntariado"}]},
 11:{title:{en:"11th grade: Test & plan",es:"11.º grado: Exámenes y plan"},items:[
  {en:"Take the SAT or ACT (try twice if you can)",es:"Toma el SAT o ACT (inténtalo dos veces si puedes)"},
  {en:"Build a list of 6–8 schools or programs: reach, match, and safety",es:"Haz una lista de 6–8 escuelas o programas: ambiciosos, probables y seguros"},
  {en:"Ask 2 teachers or mentors for recommendation letters",es:"Pide cartas de recomendación a 2 maestros o mentores"},
  {en:"Use a net-price calculator on each school's website to estimate cost",es:"Usa la calculadora de precio neto en el sitio de cada escuela para estimar el costo"},
  {en:"Start searching for scholarships",es:"Empieza a buscar becas"},
  {en:"Update your resume and activity list",es:"Actualiza tu currículum y lista de actividades"}]},
 12:{title:{en:"12th grade: Apply & decide",es:"12.º grado: Aplicar y decidir"},items:[
  {en:"Finish applications (Common App or school and state systems) before deadlines",es:"Termina las solicitudes (Common App o sistemas de las escuelas y del estado) antes de las fechas límite"},
  {en:"Write and edit your personal essay. Ask a mentor to review",es:"Escribe y revisa tu ensayo personal. Pide a un mentor que lo lea"},
  {en:"Fill out the FAFSA as soon as you can (the 2027–28 form opened September 23, 2026). Parents will need tax info",es:"Llena la FAFSA lo antes posible (el formulario 2027–28 abrió el 23 de septiembre de 2026). Los padres necesitarán información de impuestos"},
  {en:"Apply to at least 5 scholarships",es:"Solicita al menos 5 becas"},
  {en:"Compare financial aid award letters side by side",es:"Compara las cartas de ayuda financiera lado a lado"},
  {en:"Choose your school or program and submit your deposit by May 1",es:"Elige tu escuela o programa y paga el depósito antes del 1 de mayo"},
  {en:"Say thank you to the people who helped you",es:"Agradece a las personas que te ayudaron"}]}
};

const RESUME = [
 {en:"Lead something: club officer, team captain, or start a small project",es:"Lidera algo: oficial de club, capitán de equipo o crea un proyecto pequeño"},
 {en:"Stay with fewer activities for several years rather than many for a few weeks",es:"Quédate con pocas actividades por varios años en lugar de muchas por pocas semanas"},
 {en:"Use action words and numbers: \"Organized a food drive that collected 300 items\"",es:"Usa verbos de acción y números: \"Organicé una colecta que reunió 300 artículos\""},
 {en:"Include jobs and family responsibilities. They show real skills",es:"Incluye trabajos y responsabilidades familiares. Demuestran habilidades reales"},
 {en:"Keep it to one page and ask a mentor to review it",es:"Mantenla en una página y pide a un mentor que la revise"}
];
const ACTS = [
 {en:"School clubs, student council, sports, band, or Enactus-style business clubs",es:"Clubes escolares, consejo estudiantil, deportes, banda o clubes de negocios"},
 {en:"Volunteer at a library, food bank, hospital, or animal shelter",es:"Voluntariado en una biblioteca, banco de alimentos, hospital o refugio de animales"},
 {en:"Tutor younger students or help classmates",es:"Dar tutoría a estudiantes más jóvenes o ayudar a compañeros"},
 {en:"Part-time job or paid internship",es:"Empleo de medio tiempo o pasantía pagada"},
 {en:"Free online courses (Khan Academy, Coursera, YouTube skills)",es:"Cursos gratuitos en línea (Khan Academy, Coursera, YouTube)"},
 {en:"Summer programs at nearby colleges. Many are free for qualifying students",es:"Programas de verano en universidades cercanas. Muchos son gratis para estudiantes que califican"}
];

const MONEY = [
 {t:{en:"Federal Pell Grant",es:"Beca federal Pell"},
  p:[{en:"Free money for undergraduates with financial need. You do not pay it back.",es:"Dinero gratis para estudiantes de pregrado con necesidad financiera. No se devuelve."},
     {en:"For 2026–27 the maximum award is $7,395 and the minimum is $740. Amounts can change.",es:"Para 2026–27, el máximo es $7,395 y el mínimo $740. Las cantidades pueden cambiar."},
     {en:"How to get it: file the FAFSA. It can now also help pay for some short job-training programs.",es:"Cómo obtenerla: llena la FAFSA. Ahora también puede ayudar a pagar algunos programas cortos de capacitación laboral."}],
  l:["https://studentaid.gov/understand-aid/types/grants/pell","Pell Grants – studentaid.gov"]},
 {t:{en:"State and college grants",es:"Subvenciones estatales y de la universidad"},
  p:[{en:"Many states and colleges give their own grants, often using the FAFSA to decide who gets them.",es:"Muchos estados y universidades otorgan sus propias subvenciones, y suelen usar la FAFSA para decidir quién las recibe."},
     {en:"Deadlines can be early, so ask your counselor about your state's aid and check each college's financial aid page.",es:"Las fechas límite pueden ser tempranas, así que pregunta a tu consejero por la ayuda de tu estado y revisa la página de ayuda financiera de cada universidad."}],
  l:["https://studentaid.gov/understand-aid/types/grants","Types of grants – studentaid.gov"]},
 {t:{en:"Scholarships",es:"Becas"},
  p:[{en:"Awards for grades, activities, background, field of study, and more. You do not pay them back.",es:"Premios por calificaciones, actividades, origen, área de estudio y más. No se devuelven."},
     {en:"Look at your school, colleges, local groups, employers, and free search sites. See the scholarship guide below.",es:"Busca en tu escuela, universidades, grupos locales, empleadores y sitios gratuitos de búsqueda. Mira la guía de becas más abajo."},
     {en:"Never pay a fee to apply or to \"find\" scholarships.",es:"Nunca pagues una cuota para solicitar o \"encontrar\" becas."}],
  l:["https://bigfuture.collegeboard.org/scholarships","BigFuture Scholarship Search"]},
 {t:{en:"Work-study",es:"Trabajo-estudio"},
  p:[{en:"A part-time job, usually on campus, funded by financial aid. You earn a paycheck while you study.",es:"Un empleo de medio tiempo, normalmente en el campus, financiado por la ayuda financiera. Ganas un sueldo mientras estudias."},
     {en:"You qualify by filing the FAFSA. Not every school offers it, and funds are limited, so apply early.",es:"Calificas al llenar la FAFSA. No todas las escuelas lo ofrecen y los fondos son limitados, así que aplica temprano."}],
  l:["https://studentaid.gov/understand-aid/types/work-study","Work-study – studentaid.gov"]},
 {t:{en:"Federal student loans",es:"Préstamos federales para estudiantes"},
  p:[{en:"Money you must pay back with interest. Take only what you need.",es:"Dinero que debes devolver con intereses. Pide solo lo que necesites."},
     {en:"Dependent undergraduates can borrow $5,500, then $6,500, then $7,500 per year, up to $31,000 total.",es:"Los estudiantes dependientes de pregrado pueden pedir $5,500, luego $6,500 y luego $7,500 por año, hasta $31,000 en total."},
     {en:"Ask: How much will I owe in total? What will my monthly payment be?",es:"Pregunta: ¿Cuánto deberé en total? ¿Cuál será mi pago mensual?"}],
  l:["https://studentaid.gov/understand-aid/types/loans","Federal loans – studentaid.gov"]}
];
const GLOSS = [
 {w:"GPA",d:{en:"Grade Point Average: the average of a student's grades, usually on a 4.0 scale.",es:"Promedio de calificaciones de un estudiante, normalmente en una escala de 4.0."}},
 {w:"FAFSA",d:{en:"Free Application for Federal Student Aid. It is free and opens in the fall of senior year.",es:"Solicitud Gratuita de Ayuda Federal para Estudiantes. Es gratis y abre en el otoño del último año."}},
 {w:"FSA ID",d:{en:"A username and password that works as your electronic signature on the FAFSA. Never share it.",es:"Un usuario y contraseña que funcionan como tu firma electrónica en la FAFSA. Nunca lo compartas."}},
 {w:"SAI",d:{en:"Student Aid Index: a number from the FAFSA that colleges use to decide how much aid you may receive.",es:"Índice de Ayuda Estudiantil: un número de la FAFSA que las universidades usan para decidir cuánta ayuda puedes recibir."}},
 {w:"SAT / ACT",d:{en:"Standardized tests some colleges use. Many schools have made them optional.",es:"Exámenes estandarizados que usan algunas universidades. Muchas ya los hacen opcionales."}},
 {w:{en:"Transcript",es:"Expediente académico (transcript)"},d:{en:"The official record of a student's classes and grades.",es:"El registro oficial de las clases y calificaciones de un estudiante."}},
 {w:{en:"Community college",es:"Colegio comunitario"},d:{en:"Two-year school that costs less. Credits can transfer to a 4-year university.",es:"Escuela de dos años que cuesta menos. Los créditos pueden transferirse a una universidad de 4 años."}},
 {w:{en:"Major",es:"Carrera (major)"},d:{en:"The main subject a student studies in college.",es:"La materia principal que estudia un estudiante en la universidad."}},
 {w:{en:"Dual credit",es:"Crédito dual"},d:{en:"College classes taken in high school that count for both high school and college credit.",es:"Clases universitarias que se toman en la preparatoria y cuentan para ambos créditos."}},
 {w:{en:"Sticker price",es:"Precio de lista"},d:{en:"The full published cost of a college before any aid.",es:"El costo completo publicado de una universidad antes de cualquier ayuda."}},
 {w:{en:"Net price",es:"Precio neto"},d:{en:"What you actually pay after grants and scholarships.",es:"Lo que realmente pagas después de subvenciones y becas."}},
 {w:{en:"Grant",es:"Subvención (grant)"},d:{en:"Money for college that you do not pay back, usually based on financial need.",es:"Dinero para la universidad que no se devuelve, normalmente según la necesidad financiera."}},
 {w:{en:"Scholarship",es:"Beca"},d:{en:"Money for college that you do not pay back, often based on merit, background, or interests.",es:"Dinero para la universidad que no se devuelve, muchas veces por mérito, origen o intereses."}},
 {w:{en:"Work-study",es:"Trabajo-estudio"},d:{en:"A part-time job, often on campus, funded through financial aid.",es:"Un empleo de medio tiempo, muchas veces en el campus, financiado con ayuda financiera."}},
 {w:{en:"Award letter",es:"Carta de ayuda financiera"},d:{en:"The offer a college sends listing the aid you may receive.",es:"La oferta que envía una universidad con la lista de la ayuda que podrías recibir."}},
 {w:{en:"Early Decision",es:"Decisión temprana"},d:{en:"Applying early with a binding promise to attend if admitted.",es:"Aplicar temprano con la promesa obligatoria de asistir si te admiten."}},
 {w:{en:"Apprenticeship",es:"Aprendizaje (apprenticeship)"},d:{en:"Paid job training where you learn a trade on the job.",es:"Capacitación pagada donde aprendes un oficio trabajando."}}
];
const PARENT_Q = [
 {en:"Is my child on track to graduate and to meet college requirements?",es:"¿Mi hijo/a va bien para graduarse y cumplir los requisitos universitarios?"},
 {en:"Which classes or programs fit my child's interests?",es:"¿Qué clases o programas encajan con los intereses de mi hijo/a?"},
 {en:"What should we do this year, and what are the deadlines?",es:"¿Qué debemos hacer este año y cuáles son las fechas límite?"},
 {en:"What financial help is available for our family?",es:"¿Qué ayuda financiera hay para nuestra familia?"},
 {en:"Can we have a meeting with an interpreter or in Spanish?",es:"¿Podemos tener una reunión con intérprete o en español?"}
];
const DATES = [
 {d:{en:"Fall of senior year",es:"Otoño del último año"},t:{en:"FAFSA opens (the 2027–28 form opened Sept 23, 2026). File as early as you can.",es:"Abre la FAFSA (el formulario 2027–28 abrió el 23 de septiembre de 2026). Llénala lo antes posible."}},
 {d:{en:"October",es:"Octubre"},t:{en:"PSAT/NMSQT for 11th graders. Practice for the SAT and National Merit.",es:"PSAT/NMSQT para estudiantes de 11.º grado. Práctica para el SAT y para National Merit."}},
 {d:{en:"November",es:"Noviembre"},t:{en:"Many Early Action and Early Decision deadlines.",es:"Fechas límite de muchas solicitudes de Acción Temprana y Decisión Temprana."}},
 {d:{en:"December – February",es:"Diciembre – febrero"},t:{en:"Most Regular Decision deadlines. Many scholarship deadlines too.",es:"Fechas límite de la mayoría de las solicitudes de Decisión Regular. También de muchas becas."}},
 {d:{en:"March – April",es:"Marzo – abril"},t:{en:"Admission decisions and financial aid award letters arrive. Compare them.",es:"Llegan las decisiones de admisión y las cartas de ayuda financiera. Compáralas."}},
 {d:{en:"May 1",es:"1 de mayo"},t:{en:"National decision day. Choose your school and send your deposit.",es:"Día nacional de decisión. Elige tu escuela y envía tu depósito."}}
];


Object.assign(T.en,{types_h:"Types of aid at a glance",expl_h:"Explore by interest",meet_h:"Meet the mentors",nav_home:"Home",menu:"Menu",
about_eb:"About Parallax",about_h:"What is Parallax?",
about_p:"Parallax is a free guidance website for high school students (grades 9–12) and their families. We bring mentors, clear information, and step-by-step help together in one easy place, in English and Spanish.",
why_h:"Why we built it",
why1_h:"Counselors are stretched thin",why1_p:"Students often can't get enough one-on-one time. Our mentors and monthly check-ins fill the gap.",
why2_h:"Planning starts too late",why2_p:"Most help shows up in senior year. We start in 9th grade, with a clear checklist for every year.",
why3_h:"Paying for college is confusing",why3_p:"Financial aid, scholarships, and loans, explained in plain language with links to official sites.",
why4_h:"Families want to help too",why4_p:"A parent corner, a simple glossary, and Spanish translation so everyone can follow along.",
offer_eb:"What's inside",offer_h:"What you'll find here",
off1_p:"Book time with a school counselor or alumni mentor and join monthly check-ins.",
off2_p:"Pick your interests and see majors, careers, work, and military options.",
off3_p:"A checklist for 9th–12th grade, plus resume and volunteering ideas.",
off4_p:"Grants, scholarships, work-study, and loans, explained simply.",
off5_p:"A simple glossary, questions to ask, and ways to help your child each year.",
off_go:"Open →",
how_eb:"Easy as 1-2-3",how_h:"How it works",
how1_h:"Pick your grade",how1_p:"See what to focus on this year.",
how2_h:"Explore your options",how2_p:"Tap your interests to see paths that fit you.",
how3_h:"Talk to a mentor",how3_p:"Book a time that works for you or your family.",
who_eb:"Made for you",who_h:"Who is Parallax for?",
who1_h:"Students",who1_p:"Grades 9–12 who want to explore options, get ready for what's next, and have someone to ask.",
who2_h:"Parents & families",who2_p:"No college experience needed. Everything is in plain language and available in Spanish.",
ready_h:"Ready to get started?",
tips_eb:"Free help",tips_h:"Where to look for scholarships",scam_h:"Avoid scams",
help_eb:"Step by step",help_h:"How you can help each year",
ph_m:"Book time with a counselor or alumni mentor.",ph_p:"Pick what interests you and see where it can lead.",ph_r:"Pick your grade and see what to do this year.",ph_mo:"Start with free money. Learn the difference between grants, scholarships, and loans.",ph_pa:"You don't need to know the college system to help. We'll explain it."});
Object.assign(T.es,{types_h:"Tipos de ayuda de un vistazo",expl_h:"Explora por interés",meet_h:"Conoce a los mentores",nav_home:"Inicio",menu:"Menú",
about_eb:"Sobre Parallax",about_h:"¿Qué es Parallax?",
about_p:"Parallax es un sitio web gratuito de orientación para estudiantes de preparatoria (grados 9–12) y sus familias. Reunimos mentores, información clara y ayuda paso a paso en un solo lugar fácil de usar, en inglés y español.",
why_h:"Por qué lo creamos",
why1_h:"Los consejeros tienen poco tiempo",why1_p:"Muchos estudiantes no logran tener suficiente tiempo individual. Nuestros mentores y reuniones mensuales ayudan a cubrir ese vacío.",
why2_h:"Se empieza a planear muy tarde",why2_p:"La mayor parte de la ayuda llega en el último año. Nosotros empezamos en 9.º grado, con una lista clara para cada año.",
why3_h:"Pagar la universidad es confuso",why3_p:"Ayuda financiera, becas y préstamos explicados en lenguaje sencillo, con enlaces a sitios oficiales.",
why4_h:"Las familias también quieren ayudar",why4_p:"Un rincón para padres, un glosario sencillo y traducción al español para que todos puedan participar.",
offer_eb:"Qué hay dentro",offer_h:"Lo que encontrarás aquí",
off1_p:"Agenda una cita con un consejero escolar o un mentor egresado y únete a las reuniones mensuales.",
off2_p:"Elige tus intereses y mira carreras, profesiones, trabajo y opciones militares.",
off3_p:"Una lista para 9.º–12.º grado, además de ideas para tu currículum y voluntariado.",
off4_p:"Subvenciones, becas, trabajo-estudio y préstamos explicados fácilmente.",
off5_p:"Un glosario sencillo, preguntas para hacer y formas de ayudar a su hijo/a cada año.",
off_go:"Abrir →",
how_eb:"Fácil como 1-2-3",how_h:"Cómo funciona",
how1_h:"Elige tu grado",how1_p:"Mira en qué enfocarte este año.",
how2_h:"Explora tus opciones",how2_p:"Toca tus intereses para ver caminos que van contigo.",
how3_h:"Habla con un mentor",how3_p:"Agenda un horario que le funcione a tu familia.",
who_eb:"Hecho para ti",who_h:"¿Para quién es Parallax?",
who1_h:"Estudiantes",who1_p:"Grados 9–12 que quieren explorar opciones, prepararse para lo que sigue y tener a quién preguntar.",
who2_h:"Padres y familias",who2_p:"No se necesita experiencia universitaria. Todo está en lenguaje sencillo y disponible en español.",
ready_h:"¿Listo para empezar?",
tips_eb:"Ayuda gratuita",tips_h:"Dónde buscar becas",scam_h:"Evita estafas",
help_eb:"Paso a paso",help_h:"Cómo puede ayudar cada año",
ph_m:"Agenda una cita con un consejero o mentor egresado.",ph_p:"Elige lo que te interesa y mira a dónde puede llevarte.",ph_r:"Elige tu grado y mira qué hacer este año.",ph_mo:"Empieza con dinero gratis. Aprende la diferencia entre subvenciones, becas y préstamos.",ph_pa:"No necesita conocer el sistema universitario para ayudar. Se lo explicamos."});

const SCHOLAR=[
 {u:"https://bigfuture.collegeboard.org/scholarships",n:"BigFuture Scholarship Search",d:{en:"free search by College Board",es:"búsqueda gratuita de College Board"}},
 {u:"https://www.fastweb.com",n:"Fastweb",d:{en:"free matching site",es:"sitio gratuito de búsqueda"}},
 {u:"https://www.scholarships.com",n:"Scholarships.com",d:{en:"free search",es:"búsqueda gratuita"}},
 {u:"https://studentaid.gov",n:"StudentAid.gov",d:{en:"official federal aid site",es:"sitio oficial de ayuda federal"}}
];
const SCAM=[
 {en:"Never pay to apply for scholarships or to file the FAFSA. It is free.",es:"Nunca pagues para solicitar becas ni para llenar la FAFSA. Es gratis."},
 {en:"Be careful with anyone who \"guarantees\" you will win a scholarship.",es:"Ten cuidado con quien \"garantice\" que ganarás una beca."},
 {en:"Use official .gov and school websites for financial aid forms.",es:"Usa sitios oficiales .gov y de las escuelas para los formularios de ayuda financiera."},
 {en:"Never share your FSA ID password with anyone.",es:"Nunca compartas la contraseña de tu FSA ID con nadie."}
];
const HELP=[{g:9},{g:10},{g:11},{g:12}];

/* ====== STATE ====== */
let lang = store.get("lang", (navigator.language||"en").toLowerCase().startsWith("es") ? "es" : "en");
let grade = store.get("grade", 9);
let mentorFilter = "all";
let picked = store.get("interests", []);
const L = o => o[lang];
const $ = s => document.querySelector(s);
const put=(sel,html)=>{const e=$(sel); if(e) e.innerHTML=html;};


/* ====== SHARED LAYOUT ====== */
const LOGO="data:image/webp;base64,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";
const PAGE=document.body.dataset.page||"index";
const NAV=[["index","nav_home"],["mentors","nav_mentors"],["pathways","nav_paths"],["resources","nav_resources"],["money","nav_money"],["parents","nav_parents"]];
function buildLayout(){
  const nav=NAV.map(([p,k])=>`<a href="${p}.html" data-i18n="${k}"${p===PAGE?' aria-current="page"':''}></a>`).join("");
  $("#site-header").innerHTML=`<div class="langbar"><span data-i18n="banner_txt"></span><button id="bannerBtn" type="button" data-i18n="banner_btn"></button></div>
  <header><div class="wrap bar">
    <a class="logo" href="index.html" aria-label="Parallax"><img src="${LOGO}" alt="Parallax logo"></a>
    <nav id="mainNav" aria-label="Main">${nav}</nav>
    <div class="langsw" role="group" aria-label="Language / Idioma"><button type="button" data-l="en">English</button><button type="button" data-l="es">Español</button></div>
    <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mainNav">☰ <span data-i18n="menu"></span></button>
  </div></header>`;
  $("#site-footer").innerHTML=`<footer><div class="wrap">
    <div class="lg"><img src="${LOGO}" alt="Parallax"></div>
    <div class="footnav">${nav.replace(/ aria-current="page"/,"")}</div>
    <p data-i18n="foot"></p></div></footer>`;
  const fl=document.createElement("link"); fl.rel="icon"; fl.href=LOGO; document.head.appendChild(fl);
}
function addWaves(){
  document.querySelectorAll(".wave").forEach(w=>w.remove());
  const mk=(f,t)=>{const d=document.createElement("div");d.className="wave";d.setAttribute("aria-hidden","true");d.style.background=f;
    d.innerHTML=`<svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C240,84 480,0 720,32 C960,64 1200,8 1440,40 L1440,80 L0,80 Z" fill="${t}"/></svg>`;return d;};
  const secs=[...document.querySelectorAll("main > section")];
  const bg=e=>getComputedStyle(e).backgroundColor;
  secs.forEach((s,i)=>{ if(i<secs.length-1) s.after(mk(bg(s),bg(secs[i+1]))); });
  const last=secs[secs.length-1]; const foot=document.querySelector("footer");
  if(last&&foot){ foot.prepend(mk(bg(last),getComputedStyle(foot).backgroundColor)); }
}

/* ====== RENDERERS ====== */
function applyStatic(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e=>{const v=T[lang][e.dataset.i18n]; if(v) e.textContent=v;});
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.placeholder=T[lang][e.dataset.i18nPh]);
  document.querySelectorAll("[data-i18n-aria]").forEach(e=>e.setAttribute("aria-label",T[lang][e.dataset.i18nAria]));
  document.querySelectorAll(".langsw button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===lang));
}
function avatar(a){return `<svg viewBox="0 0 80 80" aria-hidden="true"><rect width="80" height="80" fill="${a.bg}"/>${a.long?`<rect x="22" y="26" width="36" height="34" rx="16" fill="${a.hair}"/>`:""}<rect x="14" y="56" width="52" height="40" rx="22" fill="${a.shirt}"/><circle cx="40" cy="36" r="16" fill="${a.skin}"/><path d="M24,34 a16,16 0 0 1 32,0 q-16,-10 -32,0z" fill="${a.hair}"/><circle cx="34" cy="38" r="2" fill="#26354f"/><circle cx="46" cy="38" r="2" fill="#26354f"/><path d="M34,44 q6,5 12,0" stroke="#26354f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`}
function renderMentors(){
  if(!$("#mentorGrid"))return;
  $("#mentorFilter").innerHTML = MENTOR_FILTERS.map(([k,l])=>`<button type="button" class="tab" aria-pressed="${mentorFilter===k}" aria-selected="${mentorFilter===k}" data-k="${k}">${L(l)}</button>`).join("");
  $("#mentorFilter").querySelectorAll("button").forEach(b=>b.onclick=()=>{mentorFilter=b.dataset.k;renderMentors();});
  const list = MENTORS.filter(m=>mentorFilter==="all"||m.type===mentorFilter);
  $("#mentorGrid").innerHTML = list.map(m=>`
    <div class="card"><div class="mentor-top">${avatar(m.av)}<div><span class="tag">${m.type==="counselor"?(lang==="en"?"Counselor":"Consejero"):(lang==="en"?"Alumni":"Egresado")}</span>
    <h3>${m.name}</h3></div></div><p class="muted" style="margin:0 0 6px">${L(m.role)}</p>
    <p style="margin:0">🗓 ${L(m.avail)}<br>🗣 ${m.langs}</p>
    <button class="btn ghost sm" style="margin-top:12px" data-pick="${m.name}">${lang==="en"?"Request this mentor":"Solicitar este mentor"}</button></div>`).join("");
  $("#mentorGrid").querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>{$("#fMentor").value=b.dataset.pick;$("#apptForm").scrollIntoView({behavior:"smooth",block:"center"});$("#fName").focus();});
  const sel=$("#fMentor"), cur=sel.value;
  sel.innerHTML = MENTORS.map(m=>`<option>${m.name}</option>`).join(""); if(cur) sel.value=cur;
}
function renderInterests(){
  if(!$("#interestChips"))return;
  $("#interestChips").innerHTML = Object.entries(INTERESTS).map(([k,v])=>`<button type="button" class="chip" data-k="${k}" aria-pressed="${picked.includes(k)}">${L(v.label)}</button>`).join("");
  $("#interestChips").querySelectorAll("button").forEach(b=>b.onclick=()=>{
    const k=b.dataset.k; picked = picked.includes(k)?picked.filter(x=>x!==k):[...picked,k]; store.set("interests",picked); renderInterests();});
  $("#pathResults").innerHTML = picked.length ? `<div class="grid">` + picked.map(k=>{const v=INTERESTS[k];
    return `<div class="card"><h3>${L(v.label)}</h3>
      <p><strong>🎓 ${L(LBL.majors)}:</strong><br>${L(v.majors)}</p>
      <p><strong>💼 ${L(LBL.careers)}:</strong><br>${L(v.careers)}</p>
      <p><strong>🛠️ ${L(LBL.work)}:</strong><br>${L(v.work)}</p>
      <p style="margin:0"><strong>🎖️ ${L(LBL.mil)}:</strong><br>${L(v.mil)}</p></div>`}).join("") + `</div>`
    : `<p class="muted">${L(LBL.none)}</p>`;
}
function renderRoutes(){
  if(!$("#routes"))return;
  $("#routes").innerHTML = ROUTES.map(r=>`<div class="card"><span class="badge ${r.b}" aria-hidden="true">${r.ico}</span><h3>${L(r.t)}</h3><p class="muted">${L(r.d)}</p><a href="${r.l[0]}" target="_blank" rel="noopener">${r.l[1]} ↗</a></div>`).join("");
}
function renderGrades(){
  if(!$("#gradeTabs"))return;
  $("#gradeTabs").innerHTML = [9,10,11,12].map(g=>`<button role="tab" class="tab" aria-selected="${g==grade}" data-g="${g}">${lang==="en"?g+"th":g+".º"}</button>`).join("");
  $("#gradeTabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{grade=+b.dataset.g;store.set("grade",grade);renderGrades();});
  const g=GRADES[grade], done=store.get("done",{});
  const total=g.items.length, n=g.items.filter((_,i)=>done[`${grade}-${i}`]).length;
  $("#gradePanel").innerHTML = `<h3>${L(g.title)}</h3><p class="lead">${L(GRADE_EXTRA[grade].focus)}</p>
    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}"><div style="width:${n/total*100}%"></div></div>
    <ul class="check">${g.items.map((it,i)=>`<li><input type="checkbox" id="c${grade}-${i}" data-k="${grade}-${i}" ${done[`${grade}-${i}`]?"checked":""}><label for="c${grade}-${i}">${L(it)}</label></li>`).join("")}</ul><div class="callout blue"><strong>${lang==="en"?"Parents can help:":"Los padres pueden ayudar:"}</strong> ${L(GRADE_EXTRA[grade].parents)}</div>`;
  $("#gradePanel").querySelectorAll("input").forEach(c=>c.onchange=()=>{const d=store.get("done",{});d[c.dataset.k]=c.checked;store.set("done",d);renderGrades();});
}
function renderLists(){
  put("#resumeList", RESUME.map(x=>`<li>${L(x)}</li>`).join(""));
  put("#actList", ACTS.map(x=>`<li>${L(x)}</li>`).join(""));
  put("#moneyList", MONEY.map((m,i)=>`<details ${i===0?"open":""}><summary>${L(m.t)}</summary><ul>${m.p.map(x=>`<li>${L(x)}</li>`).join("")}</ul><p><a href="${m.l[0]}" target="_blank" rel="noopener">${m.l[1]} ↗</a></p></details>`).join(""));
  put("#glossary", GLOSS.map(g=>`<div class="term"><dt>${typeof g.w==="string"?g.w:L(g.w)}</dt><dd>${L(g.d)}</dd></div>`).join(""));
  put("#parentQs", PARENT_Q.map(x=>`<li>${L(x)}</li>`).join(""));
  put("#dateGrid", DATES.map(x=>`<div class="card"><span class="tag">${L(x.d)}</span><p style="margin:0">${L(x.t)}</p></div>`).join(""));
  put("#scholarList", SCHOLAR.map(x=>`<li><a href="${x.u}" target="_blank" rel="noopener">${x.n} ↗</a> <span class="muted">· ${L(x.d)}</span></li>`).join(""));
  put("#scamList", SCAM.map(x=>`<li>${L(x)}</li>`).join(""));
  put("#helpList", HELP.map(h=>`<div class="card"><span class="tag">${lang==="en"?h.g+"th grade":h.g+".º grado"}</span><p style="margin:0">${L(GRADE_EXTRA[h.g].parents)}</p></div>`).join(""));
}
function renderBlocks(){document.querySelectorAll("[data-block]").forEach(e=>{const b=BLOCKS[e.dataset.block]; if(b) e.innerHTML=b[lang];});}
function renderAll(){applyStatic();renderBlocks();renderMentors();renderInterests();renderRoutes();renderGrades();renderLists();
  const ok=$("#apptOk"); if(ok&&!ok.hidden){ok.textContent = lang==="en"?"✅ Request received. A counselor will contact you to confirm.":"✅ Solicitud recibida. Un consejero se comunicará contigo para confirmar.";}}


/* ====== BOOT ====== */
const _renderAll=renderAll;
function titleFor(){document.title = PAGE==="index" ? (lang==="en"?"Parallax – College & Career Guidance":"Parallax – Guía universitaria y profesional") : "Parallax – "+T[lang]["nav_"+(PAGE==="pathways"?"paths":PAGE)];}
function setLang(l){lang=l;store.set("lang",lang);_renderAll();titleFor();}
buildLayout();
document.querySelectorAll(".langsw button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$("#bannerBtn").onclick=()=>setLang(lang==="en"?"es":"en");
$("#menuBtn").onclick=()=>{const n=$("#mainNav"),o=n.classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",o);};

const af=$("#apptForm");
if(af){
  af.onsubmit=async e=>{
    e.preventDefault();
    const data={name:$("#fName").value,role:$("#fRole").value,grade:$("#fGrade").value,mentor:$("#fMentor").value,date:$("#fDate").value,format:$("#fFormat").value,language:$("#fLang").value,contact:$("#fContact").value,topic:$("#fTopic").value};
    if(FORM_ENDPOINT){try{await fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)});}catch(err){}}
    const ok=$("#apptOk"); ok.hidden=false;
    ok.textContent = lang==="en"?"✅ Request received. A counselor will contact you to confirm.":"✅ Solicitud recibida. Un consejero se comunicará contigo para confirmar.";
    e.target.reset(); ok.scrollIntoView({block:"nearest"});
  };
  $("#fDate").min = new Date().toISOString().slice(0,10);
}
const ib=$("#icsBtn");
if(ib) ib.onclick=()=>{
  const firstTue=(y,m)=>{const x=new Date(y,m,1,16);while(x.getDay()!==2)x.setDate(x.getDate()+1);return x;};
  const d=new Date(); let s=firstTue(d.getFullYear(),d.getMonth()); if(s<new Date()) s=firstTue(d.getFullYear(),d.getMonth()+1);
  const f=x=>x.getFullYear()+String(x.getMonth()+1).padStart(2,"0")+String(x.getDate()).padStart(2,"0")+"T"+String(x.getHours()).padStart(2,"0")+String(x.getMinutes()).padStart(2,"0")+"00";
  const e=new Date(s.getTime()+3600000);
  const ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Parallax//EN","BEGIN:VEVENT","UID:parallax-monthly@parallax","DTSTAMP:"+f(new Date())+"Z","DTSTART:"+f(s),"DTEND:"+f(e),"RRULE:FREQ=MONTHLY;BYDAY=1TU","SUMMARY:Parallax Monthly Mentor Check-in","END:VEVENT","END:VCALENDAR"].join("\r\n");
  const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([ics],{type:"text/calendar"})); a.download="parallax-monthly-meeting.ics"; a.click();
};
renderAll(); titleFor();
window.addEventListener("load",addWaves);
