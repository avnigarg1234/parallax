/* ====== LONG-FORM CONTENT (English + Spanish) ====== */
const BLOCKS = {};
const H = (eb, h) => `<div class="sec-h"><span class="eyebrow">${eb}</span><h2>${h}</h2></div>`;
const UL = a => "<ul>" + a.map(x => `<li>${x}</li>`).join("") + "</ul>";
const OL = a => "<ol>" + a.map(x => `<li>${x}</li>`).join("") + "</ol>";
const FAQ = a => a.map(([q, x]) => `<details><summary>${q}</summary><p>${x}</p></details>`).join("");
const CARDS = a => `<div class="grid">` + a.map(([t, x, tag]) => `<div class="card">${tag ? `<span class="tag">${tag}</span>` : ""}<h3>${t}</h3><p class="muted" style="margin:0">${x}</p></div>`).join("") + `</div>`;

/* ---------- HOME ---------- */
BLOCKS["home.timeline"] = {
en: H("Plan ahead", "Your path, year by year") +
`<p class="lead">Big decisions feel smaller when you take them one year at a time. Here is the short version. Each grade has a full checklist on the <a href="resources.html">Resources page</a>.</p>
<div class="grid">
<a class="card big" href="resources.html"><span class="tag">9th grade</span><h3>Explore</h3><p class="muted">Meet your counselor, try clubs and activities, build strong study habits, and start keeping a record of what you do.</p></a>
<a class="card big" href="resources.html"><span class="tag">10th grade</span><h3>Narrow it down</h3><p class="muted">Take practice tests, choose challenging classes, visit a campus or workplace, and talk to someone who has done what you are curious about.</p></a>
<a class="card big" href="resources.html"><span class="tag">11th grade</span><h3>Test and plan</h3><p class="muted">Take the SAT or ACT, build a list of schools or programs, ask for recommendation letters, and begin scholarship searches.</p></a>
<a class="card big" href="resources.html"><span class="tag">12th grade</span><h3>Apply and decide</h3><p class="muted">Finish applications, file the FAFSA, compare award letters, and choose the path that fits you and your family.</p></a>
</div>`,
es: H("Planifica con tiempo", "Tu camino, año por año") +
`<p class="lead">Las decisiones grandes se sienten más pequeñas cuando las tomas un año a la vez. Este es el resumen. Cada grado tiene una lista completa en la <a href="resources.html">página de Recursos</a>.</p>
<div class="grid">
<a class="card big" href="resources.html"><span class="tag">9.º grado</span><h3>Explorar</h3><p class="muted">Conoce a tu consejero, prueba clubes y actividades, crea buenos hábitos de estudio y empieza a llevar un registro de lo que haces.</p></a>
<a class="card big" href="resources.html"><span class="tag">10.º grado</span><h3>Reducir opciones</h3><p class="muted">Toma exámenes de práctica, elige clases desafiantes, visita un campus o lugar de trabajo y habla con alguien que ya hizo lo que te interesa.</p></a>
<a class="card big" href="resources.html"><span class="tag">11.º grado</span><h3>Exámenes y plan</h3><p class="muted">Toma el SAT o el ACT, arma una lista de escuelas o programas, pide cartas de recomendación y empieza a buscar becas.</p></a>
<a class="card big" href="resources.html"><span class="tag">12.º grado</span><h3>Aplicar y decidir</h3><p class="muted">Termina las solicitudes, llena la FAFSA, compara las cartas de ayuda y elige el camino que mejor les convenga a ti y a tu familia.</p></a>
</div>`
};

BLOCKS["home.myths"] = {
en: H("Myths and facts", "What people often get wrong") +
`<p class="lead">A lot of students and families rule out their options because of things they have heard. Here are some of the most common ones.</p>
<div class="grid">
<div class="card"><span class="tag">Myth</span><h3>"College is too expensive for us."</h3><p class="muted"><strong>Fact:</strong> The price printed on a college website is rarely what families pay. Grants, scholarships, and work-study lower the cost, and community college is a low-cost way to start. Always look at the <em>net price</em>.</p></div>
<div class="card"><span class="tag">Myth</span><h3>"You have to be a straight-A student."</h3><p class="muted"><strong>Fact:</strong> Many colleges, trade programs, and employers care about effort, improvement, and what you do outside class. Strong grades help, but they are not the only thing.</p></div>
<div class="card"><span class="tag">Myth</span><h3>"College is the only good path."</h3><p class="muted"><strong>Fact:</strong> Skilled trades, apprenticeships, certificates, and military service lead to good careers too. The best path is the one that fits your goals.</p></div>
<div class="card"><span class="tag">Myth</span><h3>"Parents must speak English to help."</h3><p class="muted"><strong>Fact:</strong> Parents are the most important supporters a student has. Schools can offer interpreters, and Parallax is available in Spanish.</p></div>
<div class="card"><span class="tag">Myth</span><h3>"It's too early to think about this in 9th grade."</h3><p class="muted"><strong>Fact:</strong> You do not need to decide anything yet. But the classes and activities you choose now open doors later, and early planning lowers stress.</p></div>
<div class="card"><span class="tag">Myth</span><h3>"I have to know exactly what I want to be."</h3><p class="muted"><strong>Fact:</strong> Most people change their minds. Exploring and changing direction is normal, and a mentor can help you test ideas.</p></div>
</div>`,
es: H("Mitos y realidades", "Lo que mucha gente cree mal") +
`<p class="lead">Muchos estudiantes y familias descartan opciones por cosas que han escuchado. Estos son algunos de los mitos más comunes.</p>
<div class="grid">
<div class="card"><span class="tag">Mito</span><h3>"La universidad es demasiado cara para nosotros."</h3><p class="muted"><strong>Realidad:</strong> El precio que aparece en el sitio de una universidad casi nunca es lo que pagan las familias. Las subvenciones, las becas y el trabajo-estudio bajan el costo, y el colegio comunitario es una forma económica de empezar. Fíjate siempre en el <em>precio neto</em>.</p></div>
<div class="card"><span class="tag">Mito</span><h3>"Hay que sacar puras A."</h3><p class="muted"><strong>Realidad:</strong> A muchas universidades, programas técnicos y empleadores les importan el esfuerzo, la mejora y lo que haces fuera de clase. Las buenas calificaciones ayudan, pero no son lo único.</p></div>
<div class="card"><span class="tag">Mito</span><h3>"La universidad es el único buen camino."</h3><p class="muted"><strong>Realidad:</strong> Los oficios, los aprendizajes, los certificados y el servicio militar también llevan a buenas carreras. El mejor camino es el que va con tus metas.</p></div>
<div class="card"><span class="tag">Mito</span><h3>"Los padres tienen que hablar inglés para ayudar."</h3><p class="muted"><strong>Realidad:</strong> Los padres son el apoyo más importante de un estudiante. Las escuelas pueden ofrecer intérpretes, y Parallax está disponible en español.</p></div>
<div class="card"><span class="tag">Mito</span><h3>"Es muy pronto para pensar en esto en 9.º grado."</h3><p class="muted"><strong>Realidad:</strong> No necesitas decidir nada todavía. Pero las clases y actividades que elijas ahora abren puertas después, y planear con tiempo reduce el estrés.</p></div>
<div class="card"><span class="tag">Mito</span><h3>"Tengo que saber exactamente qué quiero ser."</h3><p class="muted"><strong>Realidad:</strong> La mayoría de la gente cambia de opinión. Explorar y cambiar de rumbo es normal, y un mentor puede ayudarte a probar ideas.</p></div>
</div>`
};

BLOCKS["home.faq"] = {
en: H("Questions", "Frequently asked questions") +
FAQ([
["Is Parallax free?", "Yes. Parallax is free for students and families. Mentors are school counselors and alumni volunteers."],
["Do I need an account?", "No. You can read everything on the site without signing in. Your checklist progress is saved on the device you are using. Family accounts, where parents can follow meeting notes, are planned for a later version."],
["Who is Parallax for?", "High school students in grades 9 through 12 and their parents or guardians. Younger siblings and families can also use the guides."],
["Can I use the site in Spanish?", "Yes. Use the English | Español switch at the top of any page. Your choice is remembered as you move between pages."],
["Is the information official?", "The guides are written in plain language and link to official sources such as StudentAid.gov. Deadlines and rules change, so always confirm important details with your school counselor or the official website."],
["Does Parallax replace my school counselor?", "No. Mentors work alongside your counselor to give you more time and support, not less."]
]),
es: H("Preguntas", "Preguntas frecuentes") +
FAQ([
["¿Parallax es gratis?", "Sí. Parallax es gratis para estudiantes y familias. Los mentores son consejeros escolares y egresados voluntarios."],
["¿Necesito una cuenta?", "No. Puedes leer todo el sitio sin iniciar sesión. El progreso de tu lista se guarda en el dispositivo que uses. Las cuentas familiares, donde los padres podrán ver las notas de las reuniones, están planeadas para una versión futura."],
["¿Para quién es Parallax?", "Para estudiantes de preparatoria de 9.º a 12.º grado y sus padres o tutores. Los hermanos menores y otras familias también pueden usar las guías."],
["¿Puedo usar el sitio en español?", "Sí. Usa el botón English | Español en la parte de arriba de cualquier página. Tu elección se recuerda al cambiar de página."],
["¿La información es oficial?", "Las guías están escritas en lenguaje sencillo y enlazan a fuentes oficiales como StudentAid.gov. Las fechas y reglas cambian, así que confirma siempre los detalles importantes con tu consejero o en el sitio oficial."],
["¿Parallax reemplaza a mi consejero escolar?", "No. Los mentores trabajan junto con tu consejero para darte más tiempo y apoyo, no menos."]
])
};

/* ---------- MENTORS ---------- */
BLOCKS["mentors.why"] = {
en: H("Why mentorship?", "Someone in your corner") +
`<p class="lead">Most students can name a teacher or coach they trust. Far fewer have someone who can sit down and talk through what comes after high school.</p>
<p>School counselors do important work, but many are responsible for hundreds of students, so one-on-one time is hard to find. Parallax mentors help fill that gap. Some are school counselors. Others are alumni who graduated from your school and know what the next few years are really like: the first semester, working while studying, changing a major, or starting a job right after graduation.</p>
<div class="cols">
<div class="card"><h3>A mentor can help you</h3>
${UL(["Explore your interests and strengths","Choose classes that fit your goals","Understand college, work, and military options","Make sense of a financial aid offer","Review a resume, essay, or application","Practice for an interview","Talk through worries and big decisions"])}</div>
<div class="card"><h3>A mentor is not</h3>
${UL(["A replacement for your counselor or teachers","Someone who makes the decision for you","A source of legal, medical, or financial advice","A recruiter for any school, company, or branch"])}
<p class="muted" style="margin:0">A mentor's job is to ask good questions, share what they have learned, and point you to reliable resources.</p></div>
</div>
<div class="callout"><strong>Start early.</strong> A first conversation in 9th or 10th grade is far more useful than a rushed one in senior year. Starting early gives you time to try things, change your mind, and build experience without pressure.</div>
<h3>Two kinds of mentors</h3>
<p><strong>School counselors</strong> know your school's graduation requirements, course options, testing dates, and local deadlines. <strong>Alumni mentors</strong> can describe real life after graduation, from community college to universities, trade programs, the military, and the workplace. Many students meet with both.</p>`,
es: H("¿Por qué una mentoría?", "Alguien de tu lado") +
`<p class="lead">La mayoría de los estudiantes puede nombrar a un maestro o entrenador de confianza. Muchos menos tienen a alguien con quien sentarse a hablar de lo que sigue después de la preparatoria.</p>
<p>Los consejeros escolares hacen un trabajo importante, pero muchos atienden a cientos de estudiantes, y es difícil conseguir tiempo individual. Los mentores de Parallax ayudan a cubrir ese vacío. Algunos son consejeros escolares. Otros son egresados de tu escuela que saben cómo son realmente los siguientes años: el primer semestre, trabajar mientras estudias, cambiar de carrera o empezar a trabajar justo después de graduarse.</p>
<div class="cols">
<div class="card"><h3>Un mentor puede ayudarte a</h3>
${UL(["Explorar tus intereses y fortalezas","Elegir clases que vayan con tus metas","Entender las opciones de universidad, trabajo y ejército","Comprender una oferta de ayuda financiera","Revisar un currículum, un ensayo o una solicitud","Practicar para una entrevista","Hablar de tus preocupaciones y decisiones importantes"])}</div>
<div class="card"><h3>Un mentor no es</h3>
${UL(["Un reemplazo de tu consejero o tus maestros","Alguien que decide por ti","Una fuente de asesoría legal, médica o financiera","Un reclutador de alguna escuela, empresa o rama militar"])}
<p class="muted" style="margin:0">El trabajo de un mentor es hacer buenas preguntas, compartir lo que ha aprendido y orientarte hacia recursos confiables.</p></div>
</div>
<div class="callout"><strong>Empieza temprano.</strong> Una primera conversación en 9.º o 10.º grado es mucho más útil que una con prisa en el último año. Empezar temprano te da tiempo para probar cosas, cambiar de opinión y ganar experiencia sin presión.</div>
<h3>Dos tipos de mentores</h3>
<p><strong>Los consejeros escolares</strong> conocen los requisitos de graduación, las clases, las fechas de exámenes y las fechas límite locales de tu escuela. <strong>Los mentores egresados</strong> pueden contarte cómo es la vida real después de graduarse: colegio comunitario, universidad, programas técnicos, el ejército y el trabajo. Muchos estudiantes se reúnen con ambos.</p>`
};

BLOCKS["mentors.how"] = {
en: H("How it works", "What to expect from an appointment") +
`<div class="steps">
<div class="step"><h3>Choose a mentor</h3><p class="muted">Browse the mentor cards and pick someone whose experience matches your questions. Not sure? Choose a counselor to start.</p></div>
<div class="step"><h3>Send a request</h3><p class="muted">Pick a date, say whether you prefer online or in person, and choose English or Spanish.</p></div>
<div class="step"><h3>Get confirmation</h3><p class="muted">A counselor confirms the time with you or your family. In this sample, confirmations come within a few school days.</p></div>
<div class="step"><h3>Meet and follow up</h3><p class="muted">Meetings usually last 20 to 30 minutes. You leave with one or two next steps, and you can book again anytime.</p></div>
</div>
<h3 style="margin-top:34px">Types of meetings</h3>
${CARDS([
["First meeting", "A relaxed conversation to get to know you, your interests, and what you want help with.", "Start here"],
["Monthly check-in", "A short meeting to look at your progress, celebrate wins, and set one goal for the next month.", "Every month"],
["Parent and family meeting", "Parents and guardians are welcome at any meeting. Ask for an interpreter or a meeting in Spanish.", "Families"],
["Application help session", "Focused time on essays, resumes, scholarship applications, or the FAFSA.", "Grades 11 and 12"]
])}
<h3 style="margin-top:34px">How to get ready</h3>
${UL(["Write down two or three questions before you arrive, even if they seem small.","Bring your latest grades or schedule if you have them.","Think about what you enjoy, what you are good at, and what worries you.","Bring a notebook or use your phone to jot down next steps.","Invite a parent or guardian if you would like them there."])}
<h3 style="margin-top:34px">Questions you can ask a mentor</h3>
<div class="cols">
<div class="card"><h3>Interests and strengths</h3>${UL(["What kinds of jobs fit someone who likes what I like?","How did you figure out what you wanted to do?","What is a normal day like in your job or school?"])}</div>
<div class="card"><h3>High school</h3>${UL(["Which classes should I take next year?","Is it worth taking AP or dual credit classes?","How can I raise my grades if they are slipping?"])}</div>
<div class="card"><h3>After high school</h3>${UL(["What are the differences between community college and a university?","What did you wish you knew before you applied?","What are the options besides college?"])}</div>
<div class="card"><h3>Money</h3>${UL(["How do scholarships and financial aid really work?","What is a reasonable amount to borrow, if any?","How did you pay for school or training?"])}</div>
<div class="card"><h3>Life after graduation</h3>${UL(["What was your first year like?","How did you find support when it was hard?","What would you do differently?"])}</div>
</div>
<div class="callout blue"><strong>Language help.</strong> You can choose Spanish for your meeting. If you or your family need an interpreter, mention it in your request and the counselor will arrange it.</div>`,
es: H("Cómo funciona", "Qué esperar de una cita") +
`<div class="steps">
<div class="step"><h3>Elige un mentor</h3><p class="muted">Mira las tarjetas de mentores y elige a alguien cuya experiencia coincida con tus preguntas. ¿No estás seguro? Empieza con un consejero.</p></div>
<div class="step"><h3>Envía una solicitud</h3><p class="muted">Elige una fecha, indica si prefieres en línea o en persona, y escoge inglés o español.</p></div>
<div class="step"><h3>Recibe la confirmación</h3><p class="muted">Un consejero confirma la hora contigo o con tu familia. En este ejemplo, las confirmaciones llegan en unos pocos días escolares.</p></div>
<div class="step"><h3>Reúnete y da seguimiento</h3><p class="muted">Las reuniones suelen durar de 20 a 30 minutos. Sales con uno o dos próximos pasos y puedes agendar otra cita cuando quieras.</p></div>
</div>
<h3 style="margin-top:34px">Tipos de reuniones</h3>
${CARDS([
["Primera reunión", "Una conversación relajada para conocerte, saber tus intereses y en qué quieres ayuda.", "Empieza aquí"],
["Reunión mensual", "Una reunión corta para revisar tu progreso, celebrar logros y fijar una meta para el próximo mes.", "Cada mes"],
["Reunión con padres y familia", "Los padres y tutores son bienvenidos en cualquier reunión. Pide un intérprete o una reunión en español.", "Familias"],
["Sesión de ayuda con solicitudes", "Tiempo enfocado en ensayos, currículums, solicitudes de becas o la FAFSA.", "Grados 11 y 12"]
])}
<h3 style="margin-top:34px">Cómo prepararte</h3>
${UL(["Escribe dos o tres preguntas antes de llegar, aunque parezcan pequeñas.","Lleva tus calificaciones o tu horario más recientes, si los tienes.","Piensa en lo que disfrutas, en lo que haces bien y en lo que te preocupa.","Lleva una libreta o usa tu teléfono para anotar los próximos pasos.","Invita a un padre o tutor si quieres que esté presente."])}
<h3 style="margin-top:34px">Preguntas que puedes hacerle a un mentor</h3>
<div class="cols">
<div class="card"><h3>Intereses y fortalezas</h3>${UL(["¿Qué trabajos le van a alguien a quien le gusta lo que a mí?","¿Cómo descubriste lo que querías hacer?","¿Cómo es un día normal en tu trabajo o escuela?"])}</div>
<div class="card"><h3>Preparatoria</h3>${UL(["¿Qué clases debo tomar el próximo año?","¿Vale la pena tomar clases AP o de crédito dual?","¿Cómo puedo subir mis calificaciones si están bajando?"])}</div>
<div class="card"><h3>Después de la preparatoria</h3>${UL(["¿Cuáles son las diferencias entre un colegio comunitario y una universidad?","¿Qué te hubiera gustado saber antes de aplicar?","¿Qué opciones hay además de la universidad?"])}</div>
<div class="card"><h3>Dinero</h3>${UL(["¿Cómo funcionan realmente las becas y la ayuda financiera?","¿Cuánto es razonable pedir prestado, si es que hay que hacerlo?","¿Cómo pagaste tus estudios o tu capacitación?"])}</div>
<div class="card"><h3>La vida después de graduarse</h3>${UL(["¿Cómo fue tu primer año?","¿Cómo encontraste apoyo cuando fue difícil?","¿Qué harías diferente?"])}</div>
</div>
<div class="callout blue"><strong>Ayuda con el idioma.</strong> Puedes elegir español para tu reunión. Si tú o tu familia necesitan un intérprete, menciónalo en tu solicitud y el consejero lo organizará.</div>`
};

BLOCKS["mentors.faq"] = {
en: H("Good to know", "Mentorship questions") +
FAQ([
["Is it free?", "Yes. There is no charge to meet with a counselor or alumni mentor."],
["Can my parents or guardians join?", "Yes, always. Parents are welcome at any meeting and can ask for an interpreter."],
["What if I do not know what to talk about?", "That is completely fine. Tell your mentor, \"I am not sure what I want to do.\" Most first meetings start exactly there."],
["Can I reschedule or switch mentors?", "Yes. Send a new request or let the counselor know. It is normal to meet a few mentors before finding the best match."],
["Where do meetings happen?", "In person at school, or online by video call, whichever you choose when you request the appointment. Meetings should use school-approved platforms."],
["Is what I say private?", "Mentors respect your privacy and will not share your conversations without a good reason. If a mentor is worried about your safety or someone else's, they are required to connect you with a trusted adult at school. Your school will set the exact policy."],
["Do mentors choose my path for me?", "Never. Mentors share information and ask questions. The decision is yours and your family's."]
]) +
`<div class="callout"><strong>Are you a graduate of our school?</strong> We are looking for alumni mentors. Volunteers usually give one or two hours a month, share their story, and answer questions. Contact your school counselor to sign up. (Sample text. Your school will confirm requirements such as a background check and training.)</div>`,
es: H("Es bueno saber", "Preguntas sobre la mentoría") +
FAQ([
["¿Es gratis?", "Sí. No hay ningún costo por reunirte con un consejero o un mentor egresado."],
["¿Pueden unirse mis padres o tutores?", "Sí, siempre. Los padres son bienvenidos en cualquier reunión y pueden pedir un intérprete."],
["¿Y si no sé de qué hablar?", "No hay problema. Dile a tu mentor: \"No estoy seguro de qué quiero hacer\". La mayoría de las primeras reuniones empieza justo ahí."],
["¿Puedo cambiar la cita o cambiar de mentor?", "Sí. Envía una nueva solicitud o avisa al consejero. Es normal reunirte con algunos mentores antes de encontrar el que mejor te funcione."],
["¿Dónde son las reuniones?", "En persona en la escuela, o en línea por videollamada, según lo que elijas al solicitar la cita. Las reuniones deben usar plataformas aprobadas por la escuela."],
["¿Lo que digo es privado?", "Los mentores respetan tu privacidad y no compartirán tus conversaciones sin un motivo importante. Si un mentor se preocupa por tu seguridad o la de otra persona, debe conectarte con un adulto de confianza en la escuela. Tu escuela definirá la política exacta."],
["¿Los mentores eligen mi camino por mí?", "Nunca. Los mentores comparten información y hacen preguntas. La decisión es tuya y de tu familia."]
]) +
`<div class="callout"><strong>¿Te graduaste de nuestra escuela?</strong> Buscamos mentores egresados. Los voluntarios suelen dar una o dos horas al mes, compartir su historia y responder preguntas. Comunícate con tu consejero escolar para inscribirte. (Texto de ejemplo. Tu escuela confirmará requisitos como verificación de antecedentes y capacitación.)</div>`
};

/* ---------- PATHWAYS ---------- */
const ROUTE = (ico, title, what, rows, first, link) => `<details class="route"><summary>${ico} ${title}</summary>
<p>${what}</p><dl class="facts">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
<h4>${first[0]}</h4>${UL(first[1])}<p><a href="${link[0]}" target="_blank" rel="noopener">${link[1]} ↗</a></p></details>`;

BLOCKS["pathways.intro"] = {
en: H("Start with you", "Before you pick a path, know yourself") +
`<p class="lead">There is no single right path. The best choice is the one that fits who you are, what you care about, and what your family can support. Start by thinking about three questions.</p>
<div class="grid">
<div class="card"><span class="badge b2" aria-hidden="true">💛</span><h3>What do I enjoy?</h3><p class="muted">Think about what you do when no one is making you. Building things, helping people, drawing, solving problems, working outdoors, leading a team?</p></div>
<div class="card"><span class="badge b1" aria-hidden="true">💪</span><h3>What am I good at?</h3><p class="muted">Include school subjects, but also skills like listening, organizing, fixing things, speaking two languages, or staying calm under pressure.</p></div>
<div class="card"><span class="badge b3" aria-hidden="true">⭐</span><h3>What matters to me?</h3><p class="muted">Stability, helping others, creativity, income, independence, being close to family, adventure. Your values matter as much as your skills.</p></div>
</div>
<div class="callout blue"><strong>Free tool:</strong> The <a href="https://www.mynextmove.org/explore/ip" target="_blank" rel="noopener">O*NET Interest Profiler ↗</a> is a short, free quiz from the U.S. Department of Labor that suggests careers based on your interests. Take it, then talk about the results with a mentor.</div>`,
es: H("Empieza contigo", "Antes de elegir un camino, conócete") +
`<p class="lead">No existe un único camino correcto. La mejor opción es la que va con quién eres, lo que te importa y lo que tu familia puede apoyar. Empieza pensando en tres preguntas.</p>
<div class="grid">
<div class="card"><span class="badge b2" aria-hidden="true">💛</span><h3>¿Qué disfruto?</h3><p class="muted">Piensa en lo que haces cuando nadie te obliga. ¿Construir cosas, ayudar a otros, dibujar, resolver problemas, trabajar al aire libre, liderar un equipo?</p></div>
<div class="card"><span class="badge b1" aria-hidden="true">💪</span><h3>¿En qué soy bueno?</h3><p class="muted">Incluye las materias escolares, pero también habilidades como escuchar, organizar, arreglar cosas, hablar dos idiomas o mantener la calma bajo presión.</p></div>
<div class="card"><span class="badge b3" aria-hidden="true">⭐</span><h3>¿Qué es importante para mí?</h3><p class="muted">Estabilidad, ayudar a otros, creatividad, ingresos, independencia, estar cerca de la familia, aventura. Tus valores importan tanto como tus habilidades.</p></div>
</div>
<div class="callout blue"><strong>Herramienta gratuita:</strong> El <a href="https://www.mynextmove.org/explore/ip" target="_blank" rel="noopener">Perfil de Intereses de O*NET ↗</a> es un cuestionario corto y gratuito del Departamento de Trabajo de EE. UU. que sugiere carreras según tus intereses. Hazlo y luego habla de los resultados con un mentor. (El sitio está en inglés.)</div>`
};

BLOCKS["pathways.routes"] = {
en: H("The four main routes", "Your options, in depth") +
`<p class="lead">Open each route to see what it is, how long it takes, what it costs, who it fits, and how to take a first step. Many people combine routes, for example working first and studying later.</p>` +
ROUTE("🎓", "College (community college or university)",
"College means earning a degree after high school. A <strong>community college</strong> offers two-year associate degrees and certificates and costs much less per year. Many students start there and transfer to a <strong>four-year university</strong> to finish a bachelor's degree. Universities can be public (run by a state) or private, large or small.",
[["Time", "2 years for an associate degree, about 4 years for a bachelor's degree."],["Cost", "Highest sticker price of the four routes, but grants, scholarships, and work-study can lower it a lot. Community college is usually the least expensive way to start."],["Good fit if", "You are aiming for a career that requires a degree (such as teaching, nursing, engineering, accounting), or you want time to explore subjects."],["Keep in mind", "Graduating matters more than where you start. Ask about transfer agreements, graduation rates, and support for first-generation students."]],
["First steps", ["Use the net price calculator on 3 to 5 school websites.","Look up schools on the College Scorecard.","Ask a counselor about dual credit classes that earn college credit while in high school."]],
["https://collegescorecard.ed.gov", "College Scorecard (U.S. Department of Education)"]) +
ROUTE("🛠️", "Work, trades, and certificates",
"This route means going straight into a job or learning a skilled trade. A <strong>registered apprenticeship</strong> is a paid job with classroom training, so you earn while you learn. A <strong>certificate</strong> program teaches a specific skill in a few weeks or months, such as welding, HVAC, medical assisting, or IT support. Some careers also require a <strong>license</strong> that you earn by passing an exam.",
[["Time", "A few weeks to about two years for most certificates. Apprenticeships commonly last three to five years."],["Cost", "Usually much lower than college, and apprenticeships are paid. Federal Pell Grants now also help pay for some short job-training programs of about 8 to 15 weeks."],["Good fit if", "You like hands-on work, want to earn income sooner, or want a clear route into a skilled career."],["Keep in mind", "Check that a program is accredited or registered, ask about job placement rates, and learn whether the credits could count toward a degree later."]],
["First steps", ["Search apprenticeships near you on Apprenticeship.gov.","Visit a trade school or ask to shadow someone in the trade for a day.","Ask whether your high school offers career and technical education (CTE) classes."]],
["https://www.apprenticeship.gov", "Apprenticeship.gov"]) +
ROUTE("🎖️", "Military",
"Joining the military means serving full-time or part-time in a branch such as the Army, Navy, Air Force, Marine Corps, Space Force, or Coast Guard, or in the National Guard or Reserves. You can enlist, attend a <strong>service academy</strong>, or join <strong>ROTC</strong> while in college. Service members receive paid training, housing or housing pay, health care, and education benefits such as the GI Bill.",
[["Time", "Enlistment contracts usually last several years, followed by reserve time. Officer paths last longer."],["Cost", "No tuition for training, and you are paid. College benefits depend on the type and length of service."],["Good fit if", "You want structure, adventure, job training, and are ready to serve and follow orders, including the chance of deployment."],["Keep in mind", "Enlisting is a serious legal commitment. Ask many questions, talk to a counselor and your family as well as a recruiter, and get every promise about your job, bonus, or school benefits in writing."]],
["First steps", ["Ask your counselor whether the ASVAB (the military's aptitude test) is offered at your school.","Compare branches and jobs at Today's Military.","If you are interested in becoming an officer, ask about ROTC scholarships and service academies early in 11th grade."]],
["https://www.todaysmilitary.com", "Today's Military"]) +
ROUTE("🌎", "Gap year or national service",
"A gap year is a planned break between high school and college. It can include a job, volunteering, travel, or a service program such as <strong>AmeriCorps</strong>, where members serve in communities and may earn a stipend and an education award for college or training.",
[["Time", "Usually 3 to 12 months, sometimes longer."],["Cost", "Varies. Some programs pay a small stipend, while travel programs can be costly."],["Good fit if", "You feel burned out, are unsure what to study, or want real-world experience before committing."],["Keep in mind", "Have a plan with goals and a start date for what comes next, and ask colleges whether you can defer your admission."]],
["First steps", ["Talk to a mentor about what you want to get out of the year.","Look at current programs on the AmeriCorps website.","Ask admissions offices how a gap year affects financial aid."]],
["https://americorps.gov", "AmeriCorps"]),
es: H("Los cuatro caminos principales", "Tus opciones, a fondo") +
`<p class="lead">Abre cada camino para ver qué es, cuánto dura, cuánto cuesta, para quién es y cómo dar un primer paso. Muchas personas combinan caminos, por ejemplo trabajan primero y estudian después.</p>` +
ROUTE("🎓", "Universidad (colegio comunitario o universidad)",
"Ir a la universidad significa obtener un título después de la preparatoria. Un <strong>colegio comunitario</strong> ofrece títulos asociados de dos años y certificados, y cuesta mucho menos por año. Muchos estudiantes empiezan ahí y se transfieren a una <strong>universidad de cuatro años</strong> para terminar la licenciatura. Las universidades pueden ser públicas (del estado) o privadas, grandes o pequeñas.",
[["Duración", "2 años para un título asociado, cerca de 4 años para una licenciatura."],["Costo", "El precio de lista más alto de los cuatro caminos, pero las subvenciones, becas y el trabajo-estudio pueden bajarlo mucho. El colegio comunitario suele ser la forma más económica de empezar."],["Es buena opción si", "Quieres una carrera que requiere título (como docencia, enfermería, ingeniería o contabilidad) o necesitas tiempo para explorar materias."],["Ten en cuenta", "Graduarse importa más que dónde empiezas. Pregunta por los acuerdos de transferencia, las tasas de graduación y el apoyo a estudiantes de primera generación."]],
["Primeros pasos", ["Usa la calculadora de precio neto en los sitios de 3 a 5 escuelas.","Busca escuelas en el College Scorecard.","Pregunta a un consejero por las clases de crédito dual que dan crédito universitario mientras estás en la preparatoria."]],
["https://collegescorecard.ed.gov", "College Scorecard (Departamento de Educación de EE. UU.)"]) +
ROUTE("🛠️", "Trabajo, oficios y certificados",
"Este camino significa entrar directo a un empleo o aprender un oficio especializado. Un <strong>aprendizaje registrado</strong> es un trabajo pagado con capacitación en el aula, así que ganas mientras aprendes. Un programa de <strong>certificado</strong> enseña una habilidad específica en unas semanas o meses, como soldadura, aire acondicionado, asistente médico o soporte técnico. Algunas carreras también exigen una <strong>licencia</strong> que se obtiene aprobando un examen.",
[["Duración", "De unas semanas a cerca de dos años para la mayoría de los certificados. Los aprendizajes suelen durar de tres a cinco años."],["Costo", "Normalmente mucho menor que la universidad, y los aprendizajes son pagados. Las becas federales Pell ahora también ayudan a pagar algunos programas cortos de capacitación laboral de unas 8 a 15 semanas."],["Es buena opción si", "Te gusta el trabajo práctico, quieres ganar ingresos más pronto o buscas un camino claro hacia una carrera especializada."],["Ten en cuenta", "Verifica que el programa esté acreditado o registrado, pregunta por las tasas de colocación laboral y averigua si los créditos podrían servir para un título más adelante."]],
["Primeros pasos", ["Busca aprendizajes cerca de ti en Apprenticeship.gov.","Visita una escuela técnica o pide acompañar a alguien del oficio por un día.","Pregunta si tu preparatoria ofrece clases de educación técnica y profesional (CTE)."]],
["https://www.apprenticeship.gov", "Apprenticeship.gov (en inglés)"]) +
ROUTE("🎖️", "Ejército",
"Unirse al ejército significa servir de tiempo completo o parcial en una rama como el Ejército, la Marina, la Fuerza Aérea, el Cuerpo de Marines, la Fuerza Espacial o la Guardia Costera, o en la Guardia Nacional o la Reserva. Puedes alistarte, asistir a una <strong>academia militar</strong> o unirte al <strong>ROTC</strong> durante la universidad. Los militares reciben capacitación pagada, vivienda o pago de vivienda, atención médica y beneficios educativos como el GI Bill.",
[["Duración", "Los contratos de alistamiento suelen durar varios años, seguidos de tiempo en la reserva. Los caminos para oficiales duran más."],["Costo", "No pagas la capacitación y recibes un sueldo. Los beneficios para la universidad dependen del tipo y la duración del servicio."],["Es buena opción si", "Buscas estructura, aventura y capacitación laboral, y estás listo para servir y seguir órdenes, incluida la posibilidad de ser enviado a otro lugar."],["Ten en cuenta", "Alistarse es un compromiso legal serio. Haz muchas preguntas, habla con un consejero y con tu familia además de con un reclutador, y pide por escrito toda promesa sobre tu puesto, bono o beneficios escolares."]],
["Primeros pasos", ["Pregunta a tu consejero si en tu escuela se ofrece el ASVAB (el examen de aptitud militar).","Compara ramas y puestos en Today's Military.","Si te interesa ser oficial, pregunta por becas ROTC y academias militares desde el inicio del 11.º grado."]],
["https://www.todaysmilitary.com", "Today's Military (en inglés)"]) +
ROUTE("🌎", "Año sabático o servicio nacional",
"Un año sabático es una pausa planeada entre la preparatoria y la universidad. Puede incluir un trabajo, voluntariado, viajes o un programa de servicio como <strong>AmeriCorps</strong>, donde los miembros sirven en sus comunidades y pueden recibir un estipendio y un premio educativo para la universidad o capacitación.",
[["Duración", "Normalmente de 3 a 12 meses, a veces más."],["Costo", "Varía. Algunos programas pagan un pequeño estipendio, mientras que los programas de viaje pueden ser costosos."],["Es buena opción si", "Te sientes agotado, no sabes qué estudiar o quieres experiencia real antes de comprometerte."],["Ten en cuenta", "Ten un plan con metas y fecha de inicio para lo que sigue, y pregunta a las universidades si puedes aplazar tu admisión."]],
["Primeros pasos", ["Habla con un mentor sobre lo que quieres lograr durante el año.","Mira los programas actuales en el sitio de AmeriCorps.","Pregunta a las oficinas de admisión cómo afecta un año sabático a la ayuda financiera."]],
["https://americorps.gov", "AmeriCorps (en inglés)"])
};

BLOCKS["pathways.compare"] = {
en: H("Side by side", "Comparing the routes") +
`<p class="lead">These are typical ranges, not promises. Costs and timelines vary by school, program, and state.</p>
<div class="tablewrap"><table class="compare"><thead><tr><th>Route</th><th>Typical time</th><th>Typical cost</th><th>Paid while learning?</th><th>Often leads to</th></tr></thead><tbody>
<tr><td><strong>Community college</strong></td><td>2 years, or transfer</td><td>Lower tuition</td><td>Often work part-time</td><td>Associate degree, certificate, transfer</td></tr>
<tr><td><strong>Four-year university</strong></td><td>4+ years</td><td>Highest sticker price, lots of aid</td><td>Sometimes (work-study, jobs)</td><td>Bachelor's degree and careers that require one</td></tr>
<tr><td><strong>Trades, apprenticeship, certificate</strong></td><td>Weeks to 5 years</td><td>Low, apprenticeships are paid</td><td>Yes in apprenticeships</td><td>Licensed, skilled careers</td></tr>
<tr><td><strong>Military</strong></td><td>Several years of service</td><td>No tuition, you are paid</td><td>Yes</td><td>Job training and education benefits</td></tr>
<tr><td><strong>Gap year or service</strong></td><td>3 to 12 months</td><td>Varies, some pay a stipend</td><td>Sometimes</td><td>Clarity, experience, sometimes an education award</td></tr>
</tbody></table></div>`,
es: H("Lado a lado", "Comparando los caminos") +
`<p class="lead">Estos son rangos típicos, no promesas. Los costos y duraciones varían según la escuela, el programa y el estado.</p>
<div class="tablewrap"><table class="compare"><thead><tr><th>Camino</th><th>Duración típica</th><th>Costo típico</th><th>¿Te pagan mientras aprendes?</th><th>Con frecuencia lleva a</th></tr></thead><tbody>
<tr><td><strong>Colegio comunitario</strong></td><td>2 años, o transferencia</td><td>Colegiatura menor</td><td>Muchos trabajan medio tiempo</td><td>Título asociado, certificado, transferencia</td></tr>
<tr><td><strong>Universidad de cuatro años</strong></td><td>4 años o más</td><td>Precio de lista más alto, mucha ayuda</td><td>A veces (trabajo-estudio, empleos)</td><td>Licenciatura y carreras que la requieren</td></tr>
<tr><td><strong>Oficios, aprendizaje, certificado</strong></td><td>De semanas a 5 años</td><td>Bajo, los aprendizajes son pagados</td><td>Sí, en los aprendizajes</td><td>Carreras especializadas con licencia</td></tr>
<tr><td><strong>Ejército</strong></td><td>Varios años de servicio</td><td>Sin colegiatura, recibes sueldo</td><td>Sí</td><td>Capacitación laboral y beneficios educativos</td></tr>
<tr><td><strong>Año sabático o servicio</strong></td><td>De 3 a 12 meses</td><td>Varía, algunos pagan estipendio</td><td>A veces</td><td>Claridad, experiencia, a veces un premio educativo</td></tr>
</tbody></table></div>`
};

BLOCKS["pathways.college"] = {
en: H("If college is on your list", "How to choose a school") +
`<p class="lead">There are thousands of colleges. These factors help you narrow the list to schools that fit.</p>
<div class="cols">
<div class="card"><h3>What to look at</h3>${UL(["<strong>Net price</strong>, not sticker price","<strong>Graduation rate</strong> and how many students return after year one","<strong>Your program</strong>: does it offer your possible majors?","<strong>Size and setting</strong>: small or large, city or town","<strong>Distance</strong> from home and travel costs","<strong>Support</strong>: advising, tutoring, bilingual staff, first-generation programs","<strong>Culture</strong>: clubs, communities, and whether you feel welcome"])}</div>
<div class="card"><h3>Build a balanced list</h3>
<p><strong>Reach</strong> schools are a stretch. <strong>Match</strong> schools fit your grades and test scores. <strong>Safety</strong> schools are ones you are very likely to get into and can afford. Aim for 6 to 8 schools across all three groups, with at least one you love that costs what your family can manage.</p>
<h3>Types of schools</h3>${UL(["Public and private universities","Community and technical colleges","Liberal arts colleges (small, discussion-based)","Historically Black Colleges and Universities (HBCUs)","Hispanic-Serving Institutions (HSIs)","Online and hybrid programs"])}</div>
</div>
<p><a href="https://collegescorecard.ed.gov" target="_blank" rel="noopener">College Scorecard ↗</a> and <a href="https://bigfuture.collegeboard.org" target="_blank" rel="noopener">BigFuture ↗</a> let you compare schools by cost, graduation rate, and typical earnings.</p>`,
es: H("Si la universidad está en tu lista", "Cómo elegir una escuela") +
`<p class="lead">Hay miles de universidades. Estos factores te ayudan a reducir la lista a escuelas que sí te convienen.</p>
<div class="cols">
<div class="card"><h3>En qué fijarte</h3>${UL(["<strong>Precio neto</strong>, no el precio de lista","<strong>Tasa de graduación</strong> y cuántos estudiantes regresan después del primer año","<strong>Tu programa</strong>: ¿ofrece las carreras que te interesan?","<strong>Tamaño y entorno</strong>: pequeña o grande, ciudad o pueblo","<strong>Distancia</strong> de casa y costos de viaje","<strong>Apoyo</strong>: asesoría, tutorías, personal bilingüe, programas para estudiantes de primera generación","<strong>Ambiente</strong>: clubes, comunidades y si te sientes bienvenido"])}</div>
<div class="card"><h3>Arma una lista equilibrada</h3>
<p>Las escuelas <strong>ambiciosas</strong> (reach) son un reto. Las escuelas <strong>probables</strong> (match) van con tus calificaciones y resultados de exámenes. Las escuelas <strong>seguras</strong> (safety) son aquellas a las que es muy probable que te admitan y que puedes pagar. Busca de 6 a 8 escuelas entre los tres grupos, con al menos una que te encante y cuyo costo tu familia pueda manejar.</p>
<h3>Tipos de escuelas</h3>${UL(["Universidades públicas y privadas","Colegios comunitarios y técnicos","Colegios de artes liberales (pequeños, basados en discusión)","Colegios y universidades históricamente negros (HBCU)","Instituciones que atienden a hispanos (HSI)","Programas en línea e híbridos"])}</div>
</div>
<p><a href="https://collegescorecard.ed.gov" target="_blank" rel="noopener">College Scorecard ↗</a> y <a href="https://bigfuture.collegeboard.org" target="_blank" rel="noopener">BigFuture ↗</a> te permiten comparar escuelas por costo, tasa de graduación e ingresos típicos. (Los sitios están en inglés.)</p>`
};

BLOCKS["pathways.plan"] = {
en: H("Still unsure?", "A 30-day plan to explore") +
`<p class="lead">You do not need all the answers. You just need a few good experiments.</p>
<div class="steps">
<div class="step"><h3>Week 1: Reflect</h3><p class="muted">Answer the three questions above and take the O*NET Interest Profiler. Write down 3 careers that look interesting.</p></div>
<div class="step"><h3>Week 2: Learn</h3><p class="muted">Read about each career on MyNextMove or CareerOneStop. Note the education needed, typical pay, and daily tasks.</p></div>
<div class="step"><h3>Week 3: Talk to people</h3><p class="muted">Ask a relative, neighbor, teacher, or alumni mentor about their work. Ask what they like, what is hard, and how they started.</p></div>
<div class="step"><h3>Week 4: Decide the next test</h3><p class="muted">Book a mentor meeting. Choose one small step: a class, a job shadow day, a volunteer shift, or a campus visit.</p></div>
</div>
<div class="cta" style="margin-top:22px"><a class="btn gold" href="mentors.html">Book a mentor</a></div>`,
es: H("¿Sigues sin saber?", "Un plan de 30 días para explorar") +
`<p class="lead">No necesitas todas las respuestas. Solo necesitas algunos buenos experimentos.</p>
<div class="steps">
<div class="step"><h3>Semana 1: Reflexiona</h3><p class="muted">Responde las tres preguntas de arriba y haz el Perfil de Intereses de O*NET. Anota 3 carreras que te parezcan interesantes.</p></div>
<div class="step"><h3>Semana 2: Infórmate</h3><p class="muted">Lee sobre cada carrera en MyNextMove o CareerOneStop. Anota la educación necesaria, el sueldo típico y las tareas diarias.</p></div>
<div class="step"><h3>Semana 3: Habla con personas</h3><p class="muted">Pregunta a un familiar, vecino, maestro o mentor egresado sobre su trabajo. Pregunta qué les gusta, qué es difícil y cómo empezaron.</p></div>
<div class="step"><h3>Semana 4: Elige la siguiente prueba</h3><p class="muted">Agenda una reunión con un mentor. Elige un paso pequeño: una clase, un día de observación laboral, un turno de voluntariado o una visita a un campus.</p></div>
</div>
<div class="cta" style="margin-top:22px"><a class="btn gold" href="mentors.html">Reservar un mentor</a></div>`
};

/* ---------- RESOURCES ---------- */
const GRADE_EXTRA = {
 9: {focus:{en:"Ninth grade is about getting comfortable and exploring. Grades from this year count toward your GPA, so good habits now pay off for years. You do not need a plan yet. You need curiosity.",es:"El 9.º grado es para sentirte cómodo y explorar. Las calificaciones de este año cuentan para tu promedio (GPA), así que los buenos hábitos de ahora rinden por años. Todavía no necesitas un plan. Necesitas curiosidad."},
     parents:{en:"Ask what your child enjoys and what is hard. Meet the counselor together. Encourage one club, sport, or activity, and make sure there is a quiet place and regular time for homework.",es:"Pregunte qué disfruta su hijo/a y qué se le dificulta. Conozcan juntos al consejero. Anímelo/a a probar un club, deporte o actividad, y asegúrese de que tenga un lugar tranquilo y un horario fijo para la tarea."}},
 10:{focus:{en:"Tenth grade is about narrowing down. Take on a little more challenge, try leadership roles, and begin testing the ideas you had last year. Most students take a practice test this year.",es:"El 10.º grado es para ir reduciendo opciones. Acepta un poco más de reto, prueba roles de liderazgo y empieza a poner a prueba las ideas del año pasado. La mayoría de los estudiantes toma un examen de práctica este año."},
     parents:{en:"Visit a campus, trade school, or workplace together. Virtual tours count. Look over practice-test results and talk about summer plans such as a job, program, or volunteering.",es:"Visiten juntos un campus, una escuela técnica o un lugar de trabajo. Los recorridos virtuales cuentan. Revisen los resultados de los exámenes de práctica y hablen de los planes de verano, como un empleo, un programa o voluntariado."}},
 11:{focus:{en:"Eleventh grade is the most important planning year. Grades, test scores, and activities are all in focus. This is the year to build your school list and start looking for scholarships.",es:"El 11.º grado es el año de planeación más importante. Las calificaciones, los resultados de exámenes y las actividades cuentan. Este es el año para armar tu lista de escuelas y empezar a buscar becas."},
     parents:{en:"Help build the school list and compare real costs with net price calculators. Start gathering financial documents. Set up your own FSA ID if you will help with the FAFSA.",es:"Ayude a armar la lista de escuelas y a comparar costos reales con las calculadoras de precio neto. Empiece a reunir documentos financieros. Cree su propio FSA ID si va a ayudar con la FAFSA."}},
 12:{focus:{en:"Twelfth grade is about applying and deciding. Keep your grades up, because colleges and employers may see your final transcript. Use the Resources and Paying for College pages side by side.",es:"El 12.º grado es para aplicar y decidir. Mantén tus calificaciones, porque las universidades y empleadores pueden ver tu expediente final. Usa las páginas de Recursos y Pagar la universidad al mismo tiempo."},
     parents:{en:"Complete the FAFSA together as early as possible, review each application before it is sent, and compare award letters side by side. Celebrate each milestone.",es:"Llenen la FAFSA juntos lo antes posible, revisen cada solicitud antes de enviarla y comparen las cartas de ayuda lado a lado. Celebren cada logro."}}
};

BLOCKS["resources.tests"] = {
en: H("Tests explained", "SAT, ACT, PSAT, and college credit") +
`<p class="lead">Tests can feel confusing at first. Here is what each one is and when students usually take it.</p>
${CARDS([
["PSAT 8/9 and PSAT 10", "Practice versions of the SAT for 8th, 9th, and 10th graders. They show where you are and what to improve. They do not go on college applications.", "Practice"],
["PSAT/NMSQT", "Usually taken in October of 11th grade. It is practice for the SAT, and it is also how students qualify for National Merit scholarships.", "11th grade"],
["SAT", "A college admissions test given on a computer. It takes a little over two hours and is scored from 400 to 1600 (Reading and Writing plus Math). You can take it more than once.", "Spring of 11th grade"],
["ACT", "Another admissions test with English, Math, and Reading sections, and an optional Science section. It is scored from 1 to 36. Most colleges accept either the SAT or the ACT.", "Spring of 11th grade"],
["AP, IB, and dual credit", "College-level classes taken in high school. AP and IB exams can earn college credit depending on your score and the college. Dual credit lets you earn high school and college credit at once, often at a low cost.", "Grades 10 to 12"]
])}
<div class="cols">
<div class="callout"><strong>Test-optional.</strong> Many colleges do not require SAT or ACT scores, but policies differ by school and change from year to year. Always check each college's website. Strong scores can still help with some scholarships and programs.</div>
<div class="callout blue"><strong>Free help.</strong> Students who qualify can get fee waivers for the SAT and ACT. Ask your counselor. For free practice, try <a href="https://www.khanacademy.org/test-prep/sat" target="_blank" rel="noopener">Khan Academy's official SAT prep ↗</a>.</div>
</div>`,
es: H("Los exámenes, explicados", "SAT, ACT, PSAT y créditos universitarios") +
`<p class="lead">Al principio los exámenes pueden ser confusos. Esto es lo que es cada uno y cuándo suelen tomarlo los estudiantes.</p>
${CARDS([
["PSAT 8/9 y PSAT 10", "Versiones de práctica del SAT para estudiantes de 8.º, 9.º y 10.º grado. Muestran en qué nivel estás y qué mejorar. No se incluyen en las solicitudes universitarias.", "Práctica"],
["PSAT/NMSQT", "Normalmente se toma en octubre del 11.º grado. Es práctica para el SAT y también es la forma de calificar para las becas National Merit.", "11.º grado"],
["SAT", "Un examen de admisión que se toma en computadora. Dura un poco más de dos horas y se califica de 400 a 1600 (Lectura y Escritura más Matemáticas). Puedes tomarlo más de una vez.", "Primavera del 11.º grado"],
["ACT", "Otro examen de admisión con secciones de Inglés, Matemáticas y Lectura, y una sección opcional de Ciencias. Se califica de 1 a 36. La mayoría de las universidades aceptan el SAT o el ACT.", "Primavera del 11.º grado"],
["AP, IB y crédito dual", "Clases de nivel universitario que se toman en la preparatoria. Los exámenes AP e IB pueden dar crédito universitario según tu calificación y la universidad. El crédito dual te permite ganar crédito de preparatoria y universitario a la vez, muchas veces a bajo costo.", "Grados 10 a 12"]
])}
<div class="cols">
<div class="callout"><strong>Opcionales.</strong> Muchas universidades no exigen resultados del SAT o ACT, pero las políticas cambian según la escuela y de un año a otro. Revisa siempre el sitio de cada universidad. Buenos resultados aún pueden ayudar con algunas becas y programas.</div>
<div class="callout blue"><strong>Ayuda gratuita.</strong> Los estudiantes que califican pueden obtener exención de cuotas para el SAT y el ACT. Pregunta a tu consejero. Para práctica gratuita, prueba la <a href="https://www.khanacademy.org/test-prep/sat" target="_blank" rel="noopener">preparación oficial del SAT de Khan Academy ↗</a> (en inglés).</div>
</div>`
};

BLOCKS["resources.apply"] = {
en: H("Applying", "How college applications work") +
`<p class="lead">Applying takes several pieces, but each one is manageable when you start early.</p>
<div class="cols">
<div class="card"><h3>What most applications include</h3>${UL(["<strong>Application form</strong>: the Common App is accepted by hundreds of colleges, and some schools or states have their own system","<strong>Transcript</strong>: your grades, sent by your school","<strong>Test scores</strong>, if the school asks for them","<strong>Personal essay</strong>: your story in your own voice","<strong>Recommendation letters</strong>, usually from a teacher and the counselor","<strong>Activities list</strong>: what you do outside class","<strong>Application fee</strong>, which can be waived if you qualify"])}</div>
<div class="card"><h3>Types of deadlines</h3>${UL(["<strong>Early Action (EA):</strong> apply early, hear back early, and you are not required to attend","<strong>Early Decision (ED):</strong> apply early, but if admitted you agree to attend. This is a binding commitment, so talk it through with your family first","<strong>Regular Decision:</strong> the standard deadline, often in January","<strong>Rolling:</strong> the school reviews applications as they arrive, so earlier is better"])}<p class="muted" style="margin:0">Deadlines vary by school. Many fall between November and February.</p></div>
</div>
<h3>Writing your essay</h3>
${UL(["Start with a real story from your life, not a list of achievements.","Show, don't tell: describe a moment, what you did, and what you learned.","Write in your own voice. Admissions readers can tell.","Keep it within the word limit. The Common App essay is capped at 650 words.","Ask a mentor, teacher, or family member to read it, then revise.","Proofread out loud. Check names, spelling, and grammar."])}
<h3>Asking for recommendation letters</h3>
<p>Ask a teacher who knows you well at least four to six weeks before the deadline. Give them a short list of your activities and the deadline, and say thank you afterward.</p>
<h3>After you apply</h3>
${UL(["Check your email and each school's applicant portal regularly.","Send in any missing items quickly.","If you are waitlisted, ask what you can do to stay on the list and keep a back-up plan.","Compare offers and aid letters, then choose a school and pay your deposit by the deadline, often May 1."])}
<div class="callout"><strong>Some private colleges also ask for the CSS Profile,</strong> an additional financial aid form. Check each school's financial aid page to see what it requires.</div>`,
es: H("Aplicar", "Cómo funcionan las solicitudes universitarias") +
`<p class="lead">Aplicar tiene varias partes, pero cada una es manejable si empiezas temprano.</p>
<div class="cols">
<div class="card"><h3>Lo que incluyen la mayoría de las solicitudes</h3>${UL(["<strong>Formulario de solicitud</strong>: la Common App la aceptan cientos de universidades, y algunas escuelas o estados tienen su propio sistema","<strong>Expediente académico</strong>: tus calificaciones, enviadas por tu escuela","<strong>Resultados de exámenes</strong>, si la escuela los pide","<strong>Ensayo personal</strong>: tu historia con tu propia voz","<strong>Cartas de recomendación</strong>, normalmente de un maestro y del consejero","<strong>Lista de actividades</strong>: lo que haces fuera de clase","<strong>Cuota de solicitud</strong>, que se puede exentar si calificas"])}</div>
<div class="card"><h3>Tipos de fechas límite</h3>${UL(["<strong>Acción temprana (EA):</strong> aplicas temprano, recibes respuesta temprano y no estás obligado a asistir","<strong>Decisión temprana (ED):</strong> aplicas temprano, pero si te admiten te comprometes a asistir. Es un compromiso obligatorio, así que hablen primero en familia","<strong>Decisión regular:</strong> la fecha límite estándar, muchas veces en enero","<strong>Admisión continua (rolling):</strong> la escuela revisa las solicitudes conforme llegan, así que es mejor aplicar pronto"])}<p class="muted" style="margin:0">Las fechas varían según la escuela. Muchas caen entre noviembre y febrero.</p></div>
</div>
<h3>Cómo escribir tu ensayo</h3>
${UL(["Empieza con una historia real de tu vida, no con una lista de logros.","Muestra, no cuentes: describe un momento, lo que hiciste y lo que aprendiste.","Escribe con tu propia voz. Quienes leen las solicitudes lo notan.","Respeta el límite de palabras. El ensayo de la Common App tiene un máximo de 650 palabras.","Pide a un mentor, maestro o familiar que lo lea y luego revísalo.","Léelo en voz alta. Revisa nombres, ortografía y gramática."])}
<h3>Cómo pedir cartas de recomendación</h3>
<p>Pídeselas a un maestro que te conozca bien al menos de cuatro a seis semanas antes de la fecha límite. Dale una lista corta de tus actividades y la fecha límite, y da las gracias después.</p>
<h3>Después de aplicar</h3>
${UL(["Revisa tu correo y el portal de cada escuela con regularidad.","Envía rápido cualquier documento que falte.","Si te ponen en lista de espera, pregunta qué puedes hacer para seguir en la lista y ten un plan de respaldo.","Compara las ofertas y cartas de ayuda, luego elige una escuela y paga tu depósito antes de la fecha límite, muchas veces el 1 de mayo."])}
<div class="callout"><strong>Algunas universidades privadas también piden el CSS Profile,</strong> un formulario adicional de ayuda financiera. Revisa la página de ayuda financiera de cada escuela para ver qué requiere.</div>`
};

BLOCKS["resources.resume"] = {
en: H("Go deeper", "What goes on a high school resume") +
`<div class="cols">
<div class="card"><h3>Sections to include</h3>${UL(["<strong>Contact information:</strong> name, email, phone","<strong>Education:</strong> school, graduation year, GPA if you are proud of it, relevant classes","<strong>Activities and leadership:</strong> clubs, sports, student government","<strong>Work experience:</strong> jobs, babysitting, helping at a family business","<strong>Volunteering:</strong> where, how often, what you did","<strong>Awards and honors</strong>","<strong>Skills:</strong> languages, software, certifications"])}</div>
<div class="card"><h3>Sample bullet points</h3>${UL(["Organized a school food drive that collected 300 items for the local pantry.","Tutored four 6th graders in math twice a week.","Translated for family members and neighbors at medical and school appointments (bilingual English and Spanish).","Managed the cash register and closed the store on weekends at a family business."])}<p class="muted" style="margin:0">Start with a strong action word and add a number whenever you can.</p></div>
</div>
<div class="callout"><strong>Your family responsibilities count.</strong> Caring for siblings, translating, or helping at home or in a family business shows responsibility and real skills. Include them.</div>`,
es: H("Más a fondo", "Qué incluye un currículum de preparatoria") +
`<div class="cols">
<div class="card"><h3>Secciones que debes incluir</h3>${UL(["<strong>Información de contacto:</strong> nombre, correo, teléfono","<strong>Educación:</strong> escuela, año de graduación, GPA si te enorgullece, clases relevantes","<strong>Actividades y liderazgo:</strong> clubes, deportes, consejo estudiantil","<strong>Experiencia laboral:</strong> empleos, cuidar niños, ayudar en un negocio familiar","<strong>Voluntariado:</strong> dónde, con qué frecuencia, qué hiciste","<strong>Premios y reconocimientos</strong>","<strong>Habilidades:</strong> idiomas, programas de computadora, certificaciones"])}</div>
<div class="card"><h3>Ejemplos de frases</h3>${UL(["Organicé una colecta escolar de alimentos que reunió 300 artículos para la despensa local.","Di tutoría de matemáticas a cuatro estudiantes de 6.º grado dos veces por semana.","Traduje para familiares y vecinos en citas médicas y escolares (bilingüe inglés y español).","Manejé la caja registradora y cerré la tienda los fines de semana en un negocio familiar."])}<p class="muted" style="margin:0">Empieza con un verbo de acción fuerte y agrega un número siempre que puedas.</p></div>
</div>
<div class="callout"><strong>Tus responsabilidades familiares cuentan.</strong> Cuidar a tus hermanos, traducir o ayudar en casa o en un negocio familiar demuestra responsabilidad y habilidades reales. Inclúyelas.</div>`
};

BLOCKS["resources.links"] = {
en: H("Bookmark these", "Helpful websites") +
`<div class="grid">
${[["StudentAid.gov","Official FAFSA, federal grants, and loans.","https://studentaid.gov"],["College Scorecard","Compare costs, graduation rates, and earnings.","https://collegescorecard.ed.gov"],["BigFuture (College Board)","College search, scholarships, and planning tools.","https://bigfuture.collegeboard.org"],["Common App","Apply to many colleges with one application.","https://www.commonapp.org"],["Khan Academy SAT prep","Free official practice for the SAT.","https://www.khanacademy.org/test-prep/sat"],["MyNextMove","Explore careers and take an interest quiz.","https://www.mynextmove.org"],["CareerOneStop","Careers, training, and job search tools.","https://www.careeronestop.org"],["Apprenticeship.gov","Find paid apprenticeships.","https://www.apprenticeship.gov"]].map(x=>`<a class="card big" href="${x[2]}" target="_blank" rel="noopener"><h3>${x[0]} ↗</h3><p class="muted" style="margin:0">${x[1]}</p></a>`).join("")}
</div>`,
es: H("Guarda estos enlaces", "Sitios web útiles") +
`<div class="grid">
${[["StudentAid.gov","FAFSA oficial, subvenciones federales y préstamos.","https://studentaid.gov"],["College Scorecard","Compara costos, tasas de graduación e ingresos.","https://collegescorecard.ed.gov"],["BigFuture (College Board)","Búsqueda de universidades, becas y herramientas de planeación.","https://bigfuture.collegeboard.org"],["Common App","Aplica a muchas universidades con una sola solicitud.","https://www.commonapp.org"],["Khan Academy SAT","Práctica oficial gratuita para el SAT.","https://www.khanacademy.org/test-prep/sat"],["MyNextMove","Explora carreras y haz un cuestionario de intereses.","https://www.mynextmove.org"],["CareerOneStop","Carreras, capacitación y herramientas para buscar empleo.","https://www.careeronestop.org"],["Apprenticeship.gov","Encuentra aprendizajes pagados.","https://www.apprenticeship.gov"]].map(x=>`<a class="card big" href="${x[2]}" target="_blank" rel="noopener"><h3>${x[0]} ↗</h3><p class="muted" style="margin:0">${x[1]}</p></a>`).join("")}
</div>
<p class="muted">La mayoría de estos sitios están en inglés. Un mentor puede ayudarte a navegarlos.</p>`
};

/* ---------- MONEY ---------- */
BLOCKS["money.big"] = {
en: H("The big picture", "Sticker price is not what you pay") +
`<p class="lead">The number on a college website is called the <strong>sticker price</strong>. Most families do not pay it. What matters is the <strong>net price</strong>: the sticker price minus grants and scholarships.</p>
<div class="cols">
<div class="card"><h3>What college costs include</h3>${UL(["<strong>Tuition and fees</strong>: what the school charges for classes","<strong>Housing and food</strong>: living on campus or at home","<strong>Books and supplies</strong>","<strong>Transportation</strong>","<strong>Personal expenses</strong>"])}<p class="muted" style="margin:0">Living at home and starting at a community college can lower the total a lot.</p></div>
<div class="card"><h3>How to find your real cost</h3>${OL(["Go to a college's website and find its <strong>net price calculator</strong>.","Enter your family's information. It takes about 10 minutes and does not affect admission.","Write down the estimate, then repeat for each school on your list.","Compare the estimates, not the sticker prices."])}<p style="margin-bottom:0"><a href="https://collegecost.ed.gov/net-price" target="_blank" rel="noopener">Find net price calculators ↗</a></p></div>
</div>
<div class="callout"><strong>The golden rule:</strong> pay for college in this order. First <strong>free money</strong> (grants and scholarships). Then <strong>money you earn</strong> (work-study, a part-time job, savings). Only then <strong>loans</strong>, and only as much as you truly need.</div>`,
es: H("El panorama general", "El precio de lista no es lo que pagas") +
`<p class="lead">El número que aparece en el sitio web de una universidad se llama <strong>precio de lista</strong>. La mayoría de las familias no lo paga. Lo que importa es el <strong>precio neto</strong>: el precio de lista menos las subvenciones y becas.</p>
<div class="cols">
<div class="card"><h3>Lo que incluye el costo de la universidad</h3>${UL(["<strong>Colegiatura y cuotas</strong>: lo que cobra la escuela por las clases","<strong>Vivienda y comida</strong>: vivir en el campus o en casa","<strong>Libros y materiales</strong>","<strong>Transporte</strong>","<strong>Gastos personales</strong>"])}<p class="muted" style="margin:0">Vivir en casa y empezar en un colegio comunitario puede bajar mucho el total.</p></div>
<div class="card"><h3>Cómo averiguar tu costo real</h3>${OL(["Entra al sitio web de una universidad y busca su <strong>calculadora de precio neto</strong>.","Ingresa la información de tu familia. Toma unos 10 minutos y no afecta tu admisión.","Anota el estimado y repite con cada escuela de tu lista.","Compara los estimados, no los precios de lista."])}<p style="margin-bottom:0"><a href="https://collegecost.ed.gov/net-price" target="_blank" rel="noopener">Encontrar calculadoras de precio neto ↗</a> (en inglés)</p></div>
</div>
<div class="callout"><strong>La regla de oro:</strong> paga la universidad en este orden. Primero el <strong>dinero gratis</strong> (subvenciones y becas). Luego el <strong>dinero que ganas</strong> (trabajo-estudio, un empleo de medio tiempo, ahorros). Solo al final los <strong>préstamos</strong>, y únicamente lo que realmente necesites.</div>`
};

BLOCKS["money.fafsa"] = {
en: H("Step by step", "How to file the FAFSA") +
`<p class="lead">The FAFSA (Free Application for Federal Student Aid) is the key to federal grants, work-study, and federal loans. Many states and colleges also use it to give their own aid, so <strong>every family should file it, even if you think you will not qualify.</strong> It is always free. The form for students starting college in fall 2027 opened on September 23, 2026, so seniors can apply right now.</p>
${OL([
"<strong>Create an FSA ID.</strong> The student and one parent or guardian each need their own at <a href=\"https://studentaid.gov\" target=\"_blank\" rel=\"noopener\">StudentAid.gov ↗</a>. This is your electronic signature, so never share the password. Do this first because verification can take a few days.",
"<strong>Gather what you need.</strong> Social Security numbers (if you have them), driver's license, tax information, records of savings and investments, and a list of the colleges you are considering.",
"<strong>Fill out the form.</strong> The student starts the form and invites a parent to complete their part. Most families finish in about 15 to 30 minutes. Tax information is usually pulled in directly from the IRS.",
"<strong>Add your colleges.</strong> You can list many schools. Each one will receive your information and use it to build an aid offer.",
"<strong>Sign and submit.</strong> Both the student and a parent sign with their FSA IDs.",
"<strong>Check your email.</strong> You will receive a summary with your Student Aid Index (SAI). Colleges will then send award letters. Fix any errors quickly and answer all requests from schools."
])}
<div class="cols">
<div class="callout"><strong>Apply early.</strong> Some aid is first-come, first-served, and states and colleges set their own deadlines. File as soon as the form opens, and do not wait for your tax return to be perfect.</div>
<div class="callout blue"><strong>Mixed-status families.</strong> A student who is a U.S. citizen or an eligible noncitizen can apply for federal aid even if their parents are undocumented. Parents without a Social Security number may be able to take part through a newer identity-verification process, and the information you share is protected by federal law. Rules are changing, so ask your counselor and check StudentAid.gov. If a student is not eligible for federal aid, ask about state aid and scholarships that do not require citizenship.</div>
</div>`,
es: H("Paso a paso", "Cómo llenar la FAFSA") +
`<p class="lead">La FAFSA (Solicitud Gratuita de Ayuda Federal para Estudiantes) es la clave para obtener subvenciones federales, trabajo-estudio y préstamos federales. Muchos estados y universidades también la usan para dar su propia ayuda, así que <strong>toda familia debería llenarla, aunque crean que no califican.</strong> Siempre es gratis. El formulario para estudiantes que empiezan la universidad en el otoño de 2027 abrió el 23 de septiembre de 2026, así que los estudiantes de 12.º grado pueden aplicar ahora mismo.</p>
${OL([
"<strong>Crea un FSA ID.</strong> El estudiante y un padre o tutor necesitan cada uno el suyo en <a href=\"https://studentaid.gov\" target=\"_blank\" rel=\"noopener\">StudentAid.gov ↗</a>. Es tu firma electrónica, así que nunca compartas la contraseña. Hazlo primero porque la verificación puede tardar unos días.",
"<strong>Reúne lo que necesitas.</strong> Números de Seguro Social (si los tienen), licencia de conducir, información de impuestos, registros de ahorros e inversiones y una lista de las universidades que consideras.",
"<strong>Llena el formulario.</strong> El estudiante comienza el formulario e invita a un padre a completar su parte. La mayoría de las familias termina en 15 a 30 minutos. La información de impuestos normalmente se obtiene directamente del IRS.",
"<strong>Agrega tus universidades.</strong> Puedes incluir muchas escuelas. Cada una recibirá tu información y la usará para preparar una oferta de ayuda.",
"<strong>Firma y envía.</strong> Tanto el estudiante como un padre firman con su FSA ID.",
"<strong>Revisa tu correo.</strong> Recibirás un resumen con tu Índice de Ayuda Estudiantil (SAI). Después, las universidades enviarán las cartas de ayuda. Corrige rápido cualquier error y responde todas las solicitudes de las escuelas."
])}
<div class="cols">
<div class="callout"><strong>Aplica temprano.</strong> Parte de la ayuda se entrega por orden de llegada, y los estados y universidades fijan sus propias fechas límite. Llénala en cuanto abra el formulario y no esperes a que tu declaración de impuestos esté perfecta.</div>
<div class="callout blue"><strong>Familias de estatus mixto.</strong> Un estudiante que es ciudadano de EE. UU. o no ciudadano elegible puede solicitar ayuda federal aunque sus padres no tengan documentos. Los padres sin número de Seguro Social podrían participar mediante un nuevo proceso de verificación de identidad, y la información que compartan está protegida por la ley federal. Las reglas están cambiando, así que consulta a tu consejero y revisa StudentAid.gov. Si un estudiante no es elegible para ayuda federal, pregunta por ayuda estatal y becas que no exijan ciudadanía.</div>
</div>`
};

BLOCKS["money.scholar"] = {
en: H("Free money", "How to find and win scholarships") +
`<p class="lead">Scholarships come from colleges, companies, community groups, and foundations. Some are for top grades, but many are based on your background, interests, field of study, or community involvement. Smaller local awards often have fewer applicants.</p>
<div class="cols">
<div class="card"><h3>Where to look</h3>${UL(["Your school counselor and your school's scholarship list","The financial aid pages of each college on your list","Local groups: community foundations, churches, cultural associations, clubs, and businesses","Your parents' employers and unions","Free search sites: <a href=\"https://bigfuture.collegeboard.org/scholarships\" target=\"_blank\" rel=\"noopener\">BigFuture ↗</a>, <a href=\"https://www.fastweb.com\" target=\"_blank\" rel=\"noopener\">Fastweb ↗</a>, <a href=\"https://www.scholarships.com\" target=\"_blank\" rel=\"noopener\">Scholarships.com ↗</a>"])}</div>
<div class="card"><h3>How to win more</h3>${UL(["Apply to many. Aim for at least 5 to 10 that fit you.","Keep a calendar of deadlines and required documents.","Reuse and adapt your essays, but always answer the exact question.","Ask for recommendation letters early.","Read the rules and follow every instruction.","Proofread and submit before the deadline."])}</div>
</div>
<div class="callout"><strong>Avoid scams.</strong> Never pay a fee to apply for a scholarship or to file the FAFSA. Be careful with anyone who \"guarantees\" a scholarship or says you won a contest you never entered. Use official .gov and school websites for financial aid forms. Never share your FSA ID password with anyone.</div>`,
es: H("Dinero gratis", "Cómo encontrar y ganar becas") +
`<p class="lead">Las becas vienen de universidades, empresas, organizaciones comunitarias y fundaciones. Algunas son por calificaciones altas, pero muchas se basan en tu origen, intereses, área de estudio o participación en tu comunidad. Las becas locales más pequeñas suelen tener menos solicitantes.</p>
<div class="cols">
<div class="card"><h3>Dónde buscar</h3>${UL(["Tu consejero escolar y la lista de becas de tu escuela","Las páginas de ayuda financiera de cada universidad de tu lista","Grupos locales: fundaciones comunitarias, iglesias, asociaciones culturales, clubes y negocios","Los empleadores y sindicatos de tus padres","Sitios gratuitos de búsqueda: <a href=\"https://bigfuture.collegeboard.org/scholarships\" target=\"_blank\" rel=\"noopener\">BigFuture ↗</a>, <a href=\"https://www.fastweb.com\" target=\"_blank\" rel=\"noopener\">Fastweb ↗</a>, <a href=\"https://www.scholarships.com\" target=\"_blank\" rel=\"noopener\">Scholarships.com ↗</a>"])}</div>
<div class="card"><h3>Cómo ganar más</h3>${UL(["Aplica a muchas. Busca al menos de 5 a 10 que te correspondan.","Lleva un calendario con las fechas límite y los documentos requeridos.","Reutiliza y adapta tus ensayos, pero responde siempre la pregunta exacta.","Pide cartas de recomendación con tiempo.","Lee las reglas y sigue todas las instrucciones.","Revisa tu trabajo y envíalo antes de la fecha límite."])}</div>
</div>
<div class="callout"><strong>Evita las estafas.</strong> Nunca pagues una cuota para solicitar una beca ni para llenar la FAFSA. Ten cuidado con quien \"garantice\" una beca o diga que ganaste un concurso en el que nunca participaste. Usa sitios oficiales .gov y de las escuelas para los formularios de ayuda financiera. Nunca compartas la contraseña de tu FSA ID con nadie.</div>`
};

BLOCKS["money.loans"] = {
en: H("Borrowing wisely", "Loans: what to know before you borrow") +
`<p class="lead">A loan is money you must pay back with interest. Borrowing can make college possible, but it should be the last step and a small one.</p>
<div class="cols">
<div class="card"><h3>Federal loans first</h3>${UL(["Federal loans usually have fixed interest rates and more protections than private loans.","<strong>Subsidized</strong> loans are for students with financial need, and the government pays the interest while you are in school at least half time.","Dependent undergraduate students can borrow up to <strong>$5,500</strong> in the first year, <strong>$6,500</strong> in the second, and <strong>$7,500</strong> in later years, with a total limit of <strong>$31,000</strong>.","<strong>Parent PLUS</strong> loans, which parents take out for their child, are now capped at <strong>$20,000 per year and $65,000 in total per student</strong> for loans made on or after July 1, 2026."])}</div>
<div class="card"><h3>Smart borrowing rules</h3>${UL(["Borrow only what you truly need, not the maximum offered.","A common rule of thumb: try not to borrow more in total than you expect to earn in your first year after school.","Be very careful with private loans. They often have higher or variable rates and fewer protections.","Know the monthly payment before you sign. Federal loans offer several repayment plans, including the new Repayment Assistance Plan that bases payments on income.","Ask: \"How much will I owe in total, and what will I pay each month?\""])}</div>
</div>
<div class="callout blue"><strong>Rules change.</strong> Federal loan rules were updated in July 2026. Always confirm current limits and repayment options on <a href="https://studentaid.gov/understand-aid/types/loans" target="_blank" rel="noopener">StudentAid.gov ↗</a>.</div>`,
es: H("Pedir prestado con inteligencia", "Préstamos: lo que debes saber antes de pedir") +
`<p class="lead">Un préstamo es dinero que debes devolver con intereses. Pedir prestado puede hacer posible la universidad, pero debe ser el último paso y uno pequeño.</p>
<div class="cols">
<div class="card"><h3>Primero los préstamos federales</h3>${UL(["Los préstamos federales suelen tener tasas de interés fijas y más protecciones que los préstamos privados.","Los préstamos <strong>subsidiados</strong> son para estudiantes con necesidad financiera, y el gobierno paga los intereses mientras estudias al menos medio tiempo.","Los estudiantes dependientes de pregrado pueden pedir hasta <strong>$5,500</strong> el primer año, <strong>$6,500</strong> el segundo y <strong>$7,500</strong> en los años siguientes, con un límite total de <strong>$31,000</strong>.","Los préstamos <strong>Parent PLUS</strong>, que los padres solicitan para su hijo, ahora tienen un tope de <strong>$20,000 por año y $65,000 en total por estudiante</strong> para préstamos otorgados a partir del 1 de julio de 2026."])}</div>
<div class="card"><h3>Reglas para pedir con inteligencia</h3>${UL(["Pide solo lo que realmente necesites, no el máximo que te ofrezcan.","Una regla práctica común: trata de no pedir prestado en total más de lo que esperas ganar en tu primer año después de terminar tus estudios.","Ten mucho cuidado con los préstamos privados. Suelen tener tasas más altas o variables y menos protecciones.","Conoce el pago mensual antes de firmar. Los préstamos federales ofrecen varios planes de pago, incluido el nuevo Plan de Asistencia de Pago (Repayment Assistance Plan), que calcula los pagos según tus ingresos.","Pregunta: \"¿Cuánto deberé en total y cuánto pagaré cada mes?\""])}</div>
</div>
<div class="callout blue"><strong>Las reglas cambian.</strong> Las reglas de los préstamos federales se actualizaron en julio de 2026. Confirma siempre los límites y opciones de pago actuales en <a href="https://studentaid.gov/understand-aid/types/loans" target="_blank" rel="noopener">StudentAid.gov ↗</a> (en inglés).</div>`
};

BLOCKS["money.award"] = {
en: H("Making a decision", "Reading and comparing award letters") +
`<p class="lead">After you are admitted, each college sends a <strong>financial aid award letter</strong>. They are formatted differently, so compare them carefully.</p>
${OL(["<strong>Separate the types of aid.</strong> Grants and scholarships are free. Work-study must be earned. Loans must be repaid.","<strong>Find the net price.</strong> Subtract only the free money from the total cost of attendance.","<strong>Check the deadline</strong> to accept the offer and what you must do.","<strong>Compare side by side.</strong> A school with a higher sticker price can cost less after aid.","<strong>Ask questions.</strong> Call the financial aid office if anything is unclear."])}
<div class="callout"><strong>You can ask for more help.</strong> If your family's finances changed, for example a job loss, a medical expense, or a lower income than reported, or if another school offered more, you can contact the financial aid office and ask them to take a second look. This is called an appeal, and it is common.</div>
<h3>More ways to lower the cost</h3>
${UL(["Start at a community college, then transfer.","Earn college credit in high school through AP, IB, or dual credit.","Choose in-state public colleges when possible.","Apply for work-study and on-campus jobs.","Look into ROTC or tuition-free programs offered by some states and schools.","Graduate on time. Extra semesters add cost."])}`,
es: H("Tomando una decisión", "Cómo leer y comparar las cartas de ayuda") +
`<p class="lead">Después de que te admitan, cada universidad envía una <strong>carta de ayuda financiera</strong>. Tienen formatos distintos, así que compáralas con cuidado.</p>
${OL(["<strong>Separa los tipos de ayuda.</strong> Las subvenciones y becas son gratis. El trabajo-estudio hay que ganarlo. Los préstamos hay que devolverlos.","<strong>Encuentra el precio neto.</strong> Resta solo el dinero gratis del costo total de asistencia.","<strong>Revisa la fecha límite</strong> para aceptar la oferta y lo que debes hacer.","<strong>Compara lado a lado.</strong> Una escuela con un precio de lista más alto puede costar menos después de la ayuda.","<strong>Haz preguntas.</strong> Llama a la oficina de ayuda financiera si algo no está claro."])}
<div class="callout"><strong>Puedes pedir más ayuda.</strong> Si la situación financiera de tu familia cambió, por ejemplo por la pérdida de un empleo, un gasto médico o ingresos menores a los reportados, o si otra escuela ofreció más, puedes comunicarte con la oficina de ayuda financiera y pedir que revisen tu caso de nuevo. Esto se llama apelación y es algo común.</div>
<h3>Más formas de reducir el costo</h3>
${UL(["Empieza en un colegio comunitario y luego transfiérete.","Gana créditos universitarios en la preparatoria con AP, IB o crédito dual.","Elige universidades públicas de tu estado cuando sea posible.","Solicita trabajo-estudio y empleos dentro del campus.","Investiga el ROTC o los programas sin colegiatura que ofrecen algunos estados y escuelas.","Gradúate a tiempo. Los semestres adicionales aumentan el costo."])}`
};

/* ---------- PARENTS ---------- */
BLOCKS["parents.welcome"] = {
en: H("Welcome", "You are the most important part") +
`<p class="lead">You do not need to know the college system, speak English perfectly, or have gone to college yourself to help your child. Your encouragement, questions, and support matter more than you may realize.</p>
<div class="grid">
<div class="card"><h3>"I did not go to college."</h3><p class="muted" style="margin:0">That is okay. Many students are the first in their family to go. What helps most is showing interest, asking questions, and connecting your child with people who can guide them. That is what Parallax is for.</p></div>
<div class="card"><h3>"My English is limited."</h3><p class="muted" style="margin:0">Schools are generally expected to help parents who are still learning English, with interpreters and translated documents. You can ask for them at any meeting. This site is available in Spanish.</p></div>
<div class="card"><h3>"We worry about the cost."</h3><p class="muted" style="margin:0">Most families pay far less than the sticker price. Read the <a href="money.html">Paying for College page</a> together. Filing the FAFSA is the most important step.</p></div>
<div class="card"><h3>"I worry about letting them go."</h3><p class="muted" style="margin:0">It is natural. Talk openly about distance and expectations. Community college, local universities, and commuting are real options. The best plan is one your family can feel good about.</p></div>
</div>`,
es: H("Bienvenidos", "Ustedes son la parte más importante") +
`<p class="lead">No necesita conocer el sistema universitario, hablar inglés perfectamente ni haber ido a la universidad para ayudar a su hijo/a. Su ánimo, sus preguntas y su apoyo importan más de lo que imagina.</p>
<div class="grid">
<div class="card"><h3>"Yo no fui a la universidad."</h3><p class="muted" style="margin:0">Está bien. Muchos estudiantes son los primeros de su familia en ir. Lo que más ayuda es mostrar interés, hacer preguntas y conectar a su hijo/a con personas que puedan orientarlo. Para eso existe Parallax.</p></div>
<div class="card"><h3>"Mi inglés es limitado."</h3><p class="muted" style="margin:0">En general, se espera que las escuelas ayuden a los padres que todavía están aprendiendo inglés, con intérpretes y documentos traducidos. Puede pedirlos en cualquier reunión. Este sitio está disponible en español.</p></div>
<div class="card"><h3>"Nos preocupa el costo."</h3><p class="muted" style="margin:0">La mayoría de las familias paga mucho menos que el precio de lista. Lean juntos la <a href="money.html">página de Pagar la universidad</a>. Llenar la FAFSA es el paso más importante.</p></div>
<div class="card"><h3>"Me preocupa dejarlos ir."</h3><p class="muted" style="margin:0">Es natural. Hablen abiertamente de la distancia y las expectativas. El colegio comunitario, las universidades locales y viajar desde casa son opciones reales. El mejor plan es uno con el que su familia se sienta tranquila.</p></div>
</div>`
};

BLOCKS["parents.system"] = {
en: H("The basics", "How high school and college work in the U.S.") +
`<div class="cols">
<div class="card"><h3>High school</h3><p>Students earn <strong>credits</strong> by passing classes. Their grades make up a <strong>GPA</strong> (grade point average), usually on a 4.0 scale. Counselors help students choose classes, track graduation requirements, and plan next steps. Classes such as AP, IB, and dual credit are more advanced and can earn college credit.</p></div>
<div class="card"><h3>After high school</h3><p>There are several routes: a <strong>community college</strong> (two years, lower cost), a <strong>university</strong> (four years), a <strong>trade school or apprenticeship</strong>, the <strong>military</strong>, or going straight to work. Each has different costs, timelines, and requirements. See the <a href="pathways.html">Pathways page</a>.</p></div>
<div class="card"><h3>Getting in</h3><p>Colleges look at grades, the difficulty of classes, sometimes test scores, activities, an essay, and recommendation letters. Applications are mostly submitted online in the fall of senior year. See the <a href="resources.html">Resources page</a>.</p></div>
<div class="card"><h3>Paying for it</h3><p>Families fill out the <strong>FAFSA</strong> to find out what aid they can receive, and apply for <strong>scholarships</strong>. Colleges then send an offer called an award letter. See the <a href="money.html">Paying for College page</a>.</p></div>
</div>
<div class="callout"><strong>A note about records.</strong> Parents and guardians have the right to see their child's school records. When a student turns 18 or starts college, those rights generally move to the student, so it helps to talk openly as a family about sharing information.</div>`,
es: H("Lo básico", "Cómo funcionan la preparatoria y la universidad en EE. UU.") +
`<div class="cols">
<div class="card"><h3>La preparatoria</h3><p>Los estudiantes ganan <strong>créditos</strong> al aprobar sus clases. Sus calificaciones forman el <strong>GPA</strong> (promedio de calificaciones), normalmente en una escala de 4.0. Los consejeros ayudan a elegir clases, vigilar los requisitos de graduación y planear los siguientes pasos. Las clases AP, IB y de crédito dual son más avanzadas y pueden dar crédito universitario.</p></div>
<div class="card"><h3>Después de la preparatoria</h3><p>Hay varios caminos: un <strong>colegio comunitario</strong> (dos años, menor costo), una <strong>universidad</strong> (cuatro años), una <strong>escuela técnica o aprendizaje</strong>, el <strong>ejército</strong> o ir directo a trabajar. Cada uno tiene costos, duraciones y requisitos distintos. Vea la <a href="pathways.html">página de Caminos</a>.</p></div>
<div class="card"><h3>Cómo ser admitido</h3><p>Las universidades miran las calificaciones, la dificultad de las clases, a veces los resultados de exámenes, las actividades, un ensayo y cartas de recomendación. Las solicitudes se envían casi siempre en línea durante el otoño del último año. Vea la <a href="resources.html">página de Recursos</a>.</p></div>
<div class="card"><h3>Cómo pagarla</h3><p>Las familias llenan la <strong>FAFSA</strong> para saber qué ayuda pueden recibir y solicitan <strong>becas</strong>. Luego las universidades envían una oferta llamada carta de ayuda. Vea la <a href="money.html">página de Pagar la universidad</a>.</p></div>
</div>
<div class="callout"><strong>Una nota sobre los expedientes.</strong> Los padres y tutores tienen derecho a ver los expedientes escolares de su hijo/a. Cuando el estudiante cumple 18 años o empieza la universidad, esos derechos generalmente pasan al estudiante, por eso conviene hablar abiertamente en familia sobre cómo compartir la información.</div>`
};

BLOCKS["parents.questions"] = {
en: H("Be prepared", "Questions to ask the counselor") +
`<p class="lead">You can ask these at any school meeting, and you can ask for an interpreter.</p>
<div class="cols">
<div class="card"><h3>About my child's progress</h3>${UL(["Is my child on track to graduate on time?","Does my child meet the course requirements for college?","How are the grades and attendance?","Is extra help or tutoring available?"])}</div>
<div class="card"><h3>About next steps</h3>${UL(["Which classes or programs fit my child's interests?","Does the school offer AP, dual credit, or career and technical classes?","What are the deadlines this year?","Does our school offer college visits or career days?"])}</div>
<div class="card"><h3>About money</h3>${UL(["What financial aid or scholarships are available for our family?","Can you help us complete the FAFSA?","Does the school host a financial aid night, in Spanish too?"])}</div>
<div class="card"><h3>About language and access</h3>${UL(["Can we have an interpreter or a meeting in Spanish?","Can you send information home in Spanish?","Who can we call if we have a question?"])}</div>
</div>`,
es: H("Prepárese", "Preguntas para el consejero") +
`<p class="lead">Puede hacerlas en cualquier reunión escolar, y puede pedir un intérprete.</p>
<div class="cols">
<div class="card"><h3>Sobre el progreso de mi hijo/a</h3>${UL(["¿Mi hijo/a va bien para graduarse a tiempo?","¿Cumple con los requisitos de cursos para la universidad?","¿Cómo van sus calificaciones y su asistencia?","¿Hay ayuda adicional o tutorías disponibles?"])}</div>
<div class="card"><h3>Sobre los próximos pasos</h3>${UL(["¿Qué clases o programas encajan con los intereses de mi hijo/a?","¿La escuela ofrece clases AP, de crédito dual o de educación técnica y profesional?","¿Cuáles son las fechas límite de este año?","¿Nuestra escuela organiza visitas a universidades o días de carreras?"])}</div>
<div class="card"><h3>Sobre el dinero</h3>${UL(["¿Qué ayuda financiera o becas hay disponibles para nuestra familia?","¿Pueden ayudarnos a llenar la FAFSA?","¿La escuela organiza una noche de ayuda financiera, también en español?"])}</div>
<div class="card"><h3>Sobre el idioma y el acceso</h3>${UL(["¿Podemos tener un intérprete o una reunión en español?","¿Pueden enviar la información a casa en español?","¿A quién podemos llamar si tenemos una pregunta?"])}</div>
</div>`
};

BLOCKS["parents.talk"] = {
en: H("At home", "Conversations that help") +
`<p class="lead">Talking openly as a family is one of the best things you can do. These ideas can help.</p>
<div class="cols">
<div class="card"><h3>Ask, then listen</h3>${UL(["\"What do you enjoy doing most?\"","\"What worries you about next year?\"","\"What would you like to try?\"","Listen without fixing right away. Students often need to be heard first."])}</div>
<div class="card"><h3>Be honest about money</h3>${UL(["Share what your family can and cannot afford, in a way that fits your child's age.","Explain that aid and scholarships exist, and that you will explore them together.","Agree early on what you each expect: working during school, living at home, borrowing."])}</div>
<div class="card"><h3>Celebrate small wins</h3>${UL(["Finishing an application, a good grade, a first meeting with a mentor.","Notice effort, not only results.","Keep a family calendar of important dates."])}</div>
</div>
<div class="callout blue"><strong>Need extra support?</strong> You can book a family meeting with a counselor or mentor, in English or Spanish, on the <a href="mentors.html">Mentors page</a>.</div>`,
es: H("En casa", "Conversaciones que ayudan") +
`<p class="lead">Hablar abiertamente en familia es una de las mejores cosas que pueden hacer. Estas ideas pueden ayudar.</p>
<div class="cols">
<div class="card"><h3>Pregunte y escuche</h3>${UL(["\"¿Qué es lo que más disfrutas hacer?\"","\"¿Qué te preocupa del próximo año?\"","\"¿Qué te gustaría probar?\"","Escuche sin querer arreglarlo enseguida. Muchas veces los estudiantes primero necesitan ser escuchados."])}</div>
<div class="card"><h3>Sea honesto sobre el dinero</h3>${UL(["Comparta lo que su familia puede y no puede pagar, de una manera adecuada para la edad de su hijo/a.","Explique que existen ayudas y becas, y que las explorarán juntos.","Pónganse de acuerdo temprano sobre lo que cada uno espera: trabajar durante los estudios, vivir en casa, pedir prestado."])}</div>
<div class="card"><h3>Celebre los pequeños logros</h3>${UL(["Terminar una solicitud, una buena calificación, una primera reunión con un mentor.","Reconozca el esfuerzo, no solo los resultados.","Mantengan un calendario familiar con las fechas importantes."])}</div>
</div>
<div class="callout blue"><strong>¿Necesita más apoyo?</strong> Puede agendar una reunión familiar con un consejero o mentor, en inglés o español, en la <a href="mentors.html">página de Mentores</a>.</div>`
};

BLOCKS["parents.faq"] = {
en: H("Common questions", "Parent FAQ") +
FAQ([
["Do we need a Social Security number to apply for aid?", "It depends. A student who is a U.S. citizen or eligible noncitizen can apply for federal aid, and parents without a Social Security number may be able to take part through a newer identity process. Rules are changing, so talk to your school counselor and check StudentAid.gov. Do not skip the FAFSA without asking first."],
["Will asking for financial aid hurt my child's chances of getting in?", "At most colleges, no. Applying for aid is separate from admission decisions at the vast majority of schools. Ask each school if you are unsure."],
["Is the information we share private?", "Federal law limits how FAFSA information can be used. It is used to calculate aid and is shared only with the schools you list and certain agencies that verify eligibility."],
["What if my child does not want to go to college?", "That is okay. Trades, apprenticeships, certificates, and the military can lead to good careers. Explore the Pathways page together and ask a mentor to talk with your child."],
["How early should we start?", "As early as ninth grade, with small steps: knowing the graduation requirements, joining activities, and building good habits. You do not need to decide anything yet."],
["Can I join my child's mentor meetings?", "Yes. Parents and guardians are always welcome."]
]),
es: H("Preguntas comunes", "Preguntas frecuentes de los padres") +
FAQ([
["¿Necesitamos un número de Seguro Social para solicitar ayuda?", "Depende. Un estudiante que es ciudadano de EE. UU. o no ciudadano elegible puede solicitar ayuda federal, y los padres sin número de Seguro Social podrían participar mediante un nuevo proceso de identidad. Las reglas están cambiando, así que hable con el consejero escolar y revise StudentAid.gov. No omita la FAFSA sin preguntar primero."],
["¿Pedir ayuda financiera afecta las posibilidades de admisión de mi hijo/a?", "En la mayoría de las universidades, no. La solicitud de ayuda es independiente de las decisiones de admisión en la gran mayoría de las escuelas. Pregunte a cada escuela si tiene dudas."],
["¿La información que compartimos es privada?", "La ley federal limita cómo se puede usar la información de la FAFSA. Se usa para calcular la ayuda y solo se comparte con las escuelas que usted indique y con ciertas agencias que verifican la elegibilidad."],
["¿Y si mi hijo/a no quiere ir a la universidad?", "Está bien. Los oficios, aprendizajes, certificados y el ejército pueden llevar a buenas carreras. Exploren juntos la página de Caminos y pida a un mentor que hable con su hijo/a."],
["¿Qué tan pronto debemos empezar?", "Desde el 9.º grado, con pasos pequeños: conocer los requisitos de graduación, participar en actividades y crear buenos hábitos. No necesitan decidir nada todavía."],
["¿Puedo participar en las reuniones de mentoría de mi hijo/a?", "Sí. Los padres y tutores siempre son bienvenidos."]
])
};

