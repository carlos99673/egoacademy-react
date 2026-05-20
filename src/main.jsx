
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const INSTAGRAM_URL = 'https://www.instagram.com/egoacademy.alcala';
const WHATSAPP_URL = 'https://wa.me/34659614980';

const imgHero = '/imagenes_cabeceras/cabecera_home.png';
const imgModel = '/imagenes_cabeceras/cabecera_sobre_nosotros.jpg';
const imgHair = '/imagenes_cabeceras/cabecera_nuestros_servicios.jpg';
const imgColor = '/imagenes_cabeceras/cabecera_color.jpg';
const imgBeauty = '/imagenes_cabeceras/cabecera_belleza.jpg';
const imgContact = '/instalaciones/inst-16.png';

function IconInstagram(){return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/></svg>}
function IconWhats(){return <svg viewBox="0 0 32 32"><path d="M16 3.2A12.6 12.6 0 0 0 5.1 22.1L3.6 28.8l6.8-1.6A12.6 12.6 0 1 0 16 3.2Z"/><path d="M11.4 9.7c-.3.1-1.3.8-1.3 2.4 0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.7 5.8 5 2.9 1.1 3.5.9 4.1.8.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.7-.4l-2.3-1.1c-.3-.1-.6-.2-.8.2l-.9 1.1c-.2.3-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.6-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.4 0-.5.1Z"/></svg>}
function IconMail(){return <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>}
function IconPhone(){return <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>}
function IconInfo(){return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>}

function Header(){
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="top-left">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram/></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhats/></a>
          </div>
          <div className="top-right">
            <span><IconInfo/> Atención telefónica de 9:00 a 16:00</span>
            <a href="mailto:info@egoacademy.es"><IconMail/> info@egoacademy.es</a>
            <a href="tel:+34659614980"><IconPhone/> +34 659614980</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#/">
            <span className="script-logo small">ËGO</span>
            <span className="brand-sub">ACADEMY Hair & Beauty</span>
          </a>
          <nav className="menu">
          <a className="menu-item" href="#/">Inicio</a>
          <a className="menu-item" href="#/sobre-nosotros">Sobre nosotros</a>

          <div className="menu-item menu-dropdown">
            <a className="menu-link-with-arrow" href="#/nuestros-servicios">
              Nuestros cursos <span className="arrow">▼</span>
            </a>
            <div className="submenu">
              <a href="#/cursos-estetica">Estética</a>
              <a href="#/cursos-iniciacion">Peluquería: iniciación</a>
              <a href="#/cursos-avanzados">Peluquería: avanzados</a>
            </div>
          </div>

          <a className="menu-item" href="#/instalaciones">Instalaciones</a>
          <a className="menu-item" href="#/reserva-plaza">Reserva de plaza</a>
        </nav>
        </div>
      </header>
    </>
  )
}

function Hero(){
  return (
    <section className="hero" style={{backgroundImage:`linear-gradient(90deg, rgba(7,13,24,.96), rgba(7,13,24,.73) 34%, rgba(7,13,24,.22) 68%, rgba(7,13,24,.56)), url(${imgHero})`}}>
      <div className="script-logo hero-logo">ËGO</div>
      <div className="hero-copy">
        <span>Ëgo es un salón de peluquería y estética con más de 20 años de experiencia,</span>
        <span>que también ofrece cursos adaptados a cualquier nivel, y donde se brinda un servicio</span>
        <span>profesional y formación de calidad al mejor precio.</span>
      </div>
    </section>
  )
}

function Intro(){
  return (
    <section className="page-bg first-bg">
      <div className="dark-block intro-block">
        <div className="left-media">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/Wk548jRjkU0"
              title="Presentación Ëgo Academy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>
          <img src={imgModel} alt="Academia de peluquería y estética Ëgo" className="model-img"/>
        </div>
        <div className="right-quote">
          <h1>"Si ser Ëgomaniaco significa creer en lo que hago y en mi arte, entonces respeto que me llames así. Creo en lo que hago, ¿y TÚ?"</h1>
          <div className="separator"></div>
          <p><strong>Nos ponemos a tu disposición</strong> para ofrecerte un servicio de peluquería, estética y formación de alta calidad. En nuestro salón contamos con un equipo de expertos altamente cualificados que trabajan con pasión y dedicación para realzar tu belleza.</p>
          <p>Nuestro compromiso es brindarte una experiencia única, tanto con los mejores tratamientos y técnicas para cuidar tu cabello y tu cuerpo en cada uno de nuestros servicios de peluquería y estética, como con una formación de la máxima calidad, transmitiéndote los valores y la pasión que necesitas para desarrollar la profesión.</p>
          <p><strong>Nuestro mayor objetivo: Tú.</strong></p>
        </div>
      </div>
    </section>
  )
}

const services = [
  {img: imgHair, title:'Cortes, peinados y tratamientos', groups:[
    ['PEINADO',['Corto: 10€','Medio: 13€','Largo: 16€','✅ Plancha, tenacilla o pinzas: +3€']],
    ['CORTAR Y PEINAR',['Cortar solo: 10€','Corto: 15€','Medio: 20€','Largo: 25€']],
    ['RECOGIDOS',['Semirecogido: 30€','Recogido: 50€']],
    ['TRATAMIENTOS CAPILARES',['Bótox capilar: Desde 40€','Aceite de argán: Desde 25€','Queratina: Desde 60€ (Medio)','Moldeador: Desde 30€']]
  ]},
  {img: imgColor, title:'Color', groups:[
    ['SÓLO COLOR (Raíz): 18€',[]],
    ['PACK COLOR (Raíz, cortar y peinar)',['Corto: 28€','Medio: 33€','Largo: 38€']],
    ['COLOR, CORTAR O PEINAR',['Corto: 23€','Medio: 25€','Largo: 30€','✅ Añadiendo mechas frontales: +14 €']],
    ['PACK MECHAS (Mecha clásica, cortar y peinar)',['Corto: 35€','Medio: 45€','Largo: 60€']],
    ['SOLO MECHAS (Clásica)',['Flequillo: 3€','Corto: 25€','Medio: 35€','Largo: 45€']],
    ['MECHAS Y CORTAR',['Corto: 40€','Medio: 50€','Largo: 65€']],
    ['MECHAS, CORTAR Y PEINAR',['Corto: 50€','Medio: 60€','Largo: 75€']],
    ['EXTRAS',['✅ Coloración sin amoníaco: +5€','⚠️ Mechas especiales (californiana, balayage, etc.) llevarán un suplemento extra al total.','Matizadores: 7€']]
  ]},
  {img: imgBeauty, title:'Belleza', groups:[
    ['MANICURA',['Semipermanente: 15€','Normal: 10€','Uñas de gel: 35€ (nuevas) / 25€ (relleno)']],
    ['PEDICURA',['Semipermanente: 18€','Normal: 13€']],
    ['MAQUILLAJE',['Precio: 25€']],
    ['TRATAMIENTOS FACIALES',['Limpieza de cutis: 20€','Hidrafacial: 40€']],
    ['DEPILACIÓN FACIAL',['Cejas o labio: 5€']],
    ['DEPILACIÓN CORPORAL',['Axilas: 8€','Brazos: 12€','Piernas enteras: 20€','Medias piernas: 10€']]
  ]}
];

function Services(){
  return (
    <section className="page-bg">
      <div className="dark-block services-block">
        <h2>Nuestros servicios</h2>
        <p className="services-intro">En nuestro salón, te damos la libertad de elegir la experiencia que mejor se adapte a ti. Puedes optar por realizar tu servicio con uno de nuestros profesionales altamente cualificados o, si lo prefieres, con un alumno en formación a un precio más económico. La decisión es tuya. A continuación, te presentamos nuestros precios para servicios realizados por profesionales:</p>
        <div className="services-columns">
          {services.map(s => (
            <article className="service-col" key={s.title}>
              <div className="service-head"><img src={s.img} alt=""/><h3>{s.title}</h3></div>
              {s.groups.map(g => (
                <div className="price-group" key={g[0]}>
                  <h4>{g[0]}</h4>
                  {g[1].length > 0 && <ul>{g[1].map(x => <li key={x}>{x}</li>)}</ul>}
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Courses(){
  return (
    <section className="page-bg">
      <div className="dark-block courses-block">
        <h2>Nuestros cursos</h2>
        <div className="courses-grid">
          <a href="#/cursos-estetica"><div className="course-head"><img src={imgHair} alt=""/><h3>Cursos de estética</h3></div><p>Ofrecemos cursos de estética básica y cursos específicos como manicura, pedicura, esmaltado permanente, uñas de gel, depilación, maquillaje...</p></a>
          <a href="#/cursos-iniciacion"><div className="course-head"><img src={imgColor} alt=""/><h3>Cursos de introducción de peluquería</h3></div><p>Con el curso de iniciación comenzarás a conocer el maravilloso mundo de la peluquería.</p></a>
          <a href="#/cursos-avanzados"><div className="course-head"><img src={imgBeauty} alt=""/><h3>Cursos avanzados de peluquería</h3></div><p>Destinados a profesionales que buscan continuar su formación y adquirir un nivel superior.</p></a>
        </div>
        <p>*No tendrás que preocuparte de comprar material, ¡puedes utilizar el nuestro!</p>
        <p>**Diploma al finalizar cualquiera de nuestros cursos</p>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section className="contact-bg">
      <div className="contact-card">
        <div className="contact-text" style={{backgroundImage:`linear-gradient(rgba(255,255,255,.84),rgba(255,255,255,.84)), url(${imgContact})`}}>
          <h2>CONTACTO</h2>
          <h3>VISÍTANOS</h3>
          <p>C/ Ronda Ancha 12, Alcalá de Henares</p>
          <div className="contact-row">
            <div><h3>LLÁMANOS</h3><p><a href="tel:+34659614980">659614980</a></p></div>
            <div><h3>WHATSAPP</h3><p><a className="mini-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><IconWhats/></a></p></div>
          </div>
          <h3>ESCRÍBENOS</h3>
          <p><a href="mailto:info@egoacademy.es">info@egoacademy.es</a></p>
          <h2>HORARIO</h2>
          <h3>LUNES - VIERNES</h3>
          <p>9:15- 16:00</p>
          <h3>SÁBADO Y DOMINGO</h3>
          <p>Cerrado</p>
        </div>
        <iframe title="Mapa ËGO Academy" src="https://www.google.com/maps?q=C%2F%20Ronda%20Ancha%2012%2C%20Alcal%C3%A1%20de%20Henares&output=embed" loading="lazy"></iframe>
      </div>
    </section>
  )
}

function Footer(){
  return <footer className="footer">Política de privacidad | Términos y condiciones<br/>© 2022 Todos los derechos reservados</footer>
}

function Home(){
  return (
    <>
      <Header/>
      <Hero/>
      <Intro/>
      <Services/>
      <Courses/>
      <Contact/>
      <Footer/>
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><IconWhats/></a>
    </>
  )
}



function PageHero({title, subtitle}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}

function SharedPageShell({children}) {
  return (
    <>
      <Header/>
      {children}
      <Contact/>
      <Footer/>
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><IconWhats/></a>
    </>
  )
}

function AboutPage(){
  return (
    <SharedPageShell>
      <section className="about-hero-original">
        <div className="about-title-badge">SOBRE NOSOTROS</div>
      </section>

      <section className="about-page-section">
        <div className="dark-block about-original-card">
          <h2>Nuestra filosofía:</h2>

          <div className="about-philosophy">
            <p><strong>Nuestra metodología de enseñanza es muy diferente al resto.</strong> Ofrecemos una formación activa e intensiva.</p>
            <p>Hacemos que el alumno sienta y respire el ambiente de un salón de belleza.</p>
            <p>No queremos un alumno aburrido y desmotivado en clases interminables, por eso hemos diseñado cursos cortos e intensivos.</p>
            <p>Si quieres ser el mejor, nos acabas de encontrar. No hay mejor forma de ser el mejor que estar entre los mejores.</p>
            <p>Alimenta tu ëgo, <strong>"HAZTE ËGOMANIACO"</strong></p>
          </div>

          <h2 className="director-title">Agatha Diez, directora:</h2>

          <div className="director-quote">
            <p>"Es un verdadero privilegio poder hacer lo que me apasiona cada día, transmitir amor e ilusión por esta profesión. Aquí no aprenderás a cortar el pelo, aprenderás a crear, a descubrir tu talento y a trabajar en equipo. Te daré las claves para convertirte en un verdadero artista"</p>
          </div>

          <div className="gold-line"></div>

          <img className="about-bottom-image" src="/sobre-nosotros/peluqueria-bn.png" alt="Academia de peluquería y estética Ëgo"/>
        </div>
      </section>
    </SharedPageShell>
  )
}

function CoursesPage(){
  return (
    <SharedPageShell>
      <section className="courses-hero-original">
        <div className="courses-title-badge">NUESTROS CURSOS</div>
      </section>

      <section className="courses-main-section">
        <div className="dark-block courses-intro-card">
          <p>
            En Ëgo ofrecemos diferentes cursos adaptados a cualquier nivel, tanto para personas que quieran aprender un oficio y comenzar desde cero, como para profesionales que necesiten renovar o perfeccionar su formación.
          </p>
        </div>

        <div className="courses-list-area">
          <h2>Nuestros cursos</h2>

          <div className="course-detail-grid courses-home-grid">
            <a href="#/cursos-estetica" className="course-detail-card">
              <img src={imgBeauty} alt="Cursos de estética"/>
              <h3>Cursos de estética</h3>
              <p>Ofrecemos cursos de estética básica y cursos específicos como manicura, pedicura, esmaltado permanente, uñas de gel, depilación y maquillaje.</p>
              <strong>Desde 50 €</strong>
            </a>

            <a href="#/cursos-iniciacion" className="course-detail-card">
              <img src={imgHair} alt="Peluquería iniciación"/>
              <h3>Peluquería: iniciación</h3>
              <p>Curso pensado para empezar desde cero y conocer el mundo de la peluquería, tanto por hobby como para aprender una nueva profesión.</p>
              <strong>100 €/mes</strong>
            </a>

            <a href="#/cursos-avanzados" className="course-detail-card">
              <img src={imgColor} alt="Peluquería avanzados"/>
              <h3>Peluquería: avanzados</h3>
              <p>Formaciones específicas para profesionales que quieren perfeccionar técnicas y ampliar conocimientos.</p>
              <strong>Desde 100 €</strong>
            </a>
          </div>

          <div className="course-note-box courses-note-bottom">
            <p>*No tendrás que preocuparte de comprar material, ¡puedes utilizar el nuestro!</p>
            <p>**Diploma al finalizar cualquiera de nuestros cursos.</p>
          </div>
        </div>
      </section>
    </SharedPageShell>
  )
}


function CourseChildHero({className, title}) {
  return (
    <section className={`course-child-hero ${className}`}>
      <div className="course-child-title-badge">{title}</div>
    </section>
  )
}

function CourseEsteticaPage(){
  return (
    <SharedPageShell>
      <CourseChildHero className="estetica" title="Cursos de estética"/>
      <section className="page-bg">
        <div className="dark-block page-content course-content">
          <h2>Cursos de estética</h2>
          <div className="course-price">Desde 50 €</div>
          <p>Ofrecemos cursos de estética básica y cursos específicos: manicura, pedicura, esmaltado permanente, uñas de gel, depilación, maquillaje y más.</p>

          <div className="course-list">
            <article>
              <h3>Curso de manicura y pedicura con esmaltado permanente</h3>
              <ul>
                <li>4 horas</li>
                <li>7 días de duración</li>
                <li>Precio: 200€</li>
              </ul>
            </article>
            <article>
              <h3>Curso de automaquillaje</h3>
              <ul>
                <li>4 horas</li>
                <li>Precio: 50€</li>
              </ul>
            </article>
            <article>
              <h3>Curso de maquillaje</h3>
              <ul>
                <li>20 horas</li>
                <li>Precio: 200€</li>
              </ul>
            </article>
            <article>
              <h3>Curso de uñas de gel</h3>
              <ul>
                <li>10 días</li>
                <li>Precio: 200€</li>
              </ul>
            </article>
          </div>

          <p className="important">Los interesados deberán traer modelo para la realización del curso.</p>
          <CoursePageNotes/>
        </div>
      </section>
    </SharedPageShell>
  )
}

function CourseIniciacionPage(){
  return (
    <SharedPageShell>
      <CourseChildHero className="iniciacion" title="Cursos de peluquería: Iniciación"/>
      <section className="page-bg">
        <div className="dark-block page-content course-content">
          <h2>Curso de introducción o ayudante de peluquería</h2>
          <div className="course-price">100 €/mes</div>
          <p>El curso de iniciación está enfocado a aquellas personas con ganas de conocer el mundo de la peluquería, ya sea por hobby o para aprender una nueva profesión. No es necesario tener conocimientos previos.</p>

          <div className="course-list">
            <article>
              <h3>Contenido</h3>
              <p>Coloraciones básicas como mechas, aplicación de color, moldeadores, lavado capilar, cortes de señora básicos y peinados con secador.</p>
            </article>
            <article>
              <h3>Duración</h3>
              <ul>
                <li>6 meses</li>
                <li>4 horas diarias</li>
              </ul>
            </article>
            <article>
              <h3>Matrícula</h3>
              <p>150€</p>
            </article>
          </div>

          <CoursePageNotes/>

          <div className="course-highlight">
            <p>*** LOS CURSOS DARÁN COMIENZO EL 7 DE ENERO</p>
            <p><strong>CURSO COMPLETO DE OFICIAL DE PELUQUERÍA</strong></p>
            <p>Total de 12 meses de duración. Horario de lunes a viernes de 10 a 14h.</p>
            <p>150€ matrícula y 120€ al mes, compromiso obligatorio de asistencia y pagos durante los 12 meses.</p>
          </div>

          <h2>Bonos de prácticas</h2>
          <div className="bonus-grid">
            <div><h3>Bono de 5 días</h3><p>80 €</p></div>
            <div><h3>Bono de 10 días</h3><p>130 €</p></div>
            <div><h3>Bono de 1 mes</h3><p>4 horas diarias · 200 €</p></div>
          </div>
        </div>
      </section>
    </SharedPageShell>
  )
}

function CourseAvanzadosPage(){
  return (
    <SharedPageShell>
      <CourseChildHero className="avanzados" title="Cursos de peluquería: Avanzados"/>
      <section className="page-bg">
        <div className="dark-block page-content course-content">
          <h2>Cursos avanzados de peluquería</h2>
          <div className="course-price">Desde 100 €</div>
          <p>Formaciones para profesionales que quieran continuar creciendo, perfeccionar técnicas y adquirir mayor seguridad en salón.</p>

          <div className="course-list">
            <article>
              <h3>Curso especial de recogidos</h3>
              <ul>
                <li>Duración: 8 días / 4 horas</li>
                <li>Precio: 200€</li>
              </ul>
            </article>
            <article>
              <h3>Curso de colorimetría</h3>
              <ul>
                <li>Duración: 5 días</li>
                <li>Precio: 100€</li>
              </ul>
            </article>
            <article>
              <h3>Intensivo de peluquería</h3>
              <p>Curso personalizado donde el alumno elegirá a la carta la formación que desee.</p>
              <p>1 mes · 400€</p>
            </article>
            <article>
              <h3>Específico de peluquería</h3>
              <p>Destinado a profesionales que tengan carencias en una materia concreta.</p>
              <p>2 semanas · 250€</p>
            </article>
          </div>

          <CoursePageNotes/>
          <p className="important">Las prácticas durante la formación se realizarán en muñeca y cliente.</p>
        </div>
      </section>
    </SharedPageShell>
  )
}

function CoursePageNotes(){
  return (
    <div className="course-note-box">
      <p>*No tendrás que preocuparte de comprar material, ¡puedes utilizar el nuestro!</p>
      <p>**Diploma al finalizar cualquiera de nuestros cursos.</p>
    </div>
  )
}


const installationImages = [
  {
    src: '/instalaciones/inst-1.png',
    alt: 'Instalaciones ËGO 1'
  },
  {
    src: '/instalaciones/inst-2.png',
    alt: 'Instalaciones ËGO 2'
  },
  {
    src: '/instalaciones/inst-3.png',
    alt: 'Instalaciones ËGO 3'
  },
  {
    src: '/instalaciones/inst-4.png',
    alt: 'Instalaciones ËGO 4'
  },
  {
    src: '/instalaciones/inst-5.png',
    alt: 'Instalaciones ËGO 5'
  },
  {
    src: '/instalaciones/inst-6.png',
    alt: 'Instalaciones ËGO 6'
  },
  {
    src: '/instalaciones/inst-7.png',
    alt: 'Instalaciones ËGO 7'
  },
  {
    src: '/instalaciones/inst-8.png',
    alt: 'Instalaciones ËGO 8'
  },
  {
    src: '/instalaciones/inst-9.png',
    alt: 'Instalaciones ËGO 9'
  },
  {
    src: '/instalaciones/inst-10.png',
    alt: 'Instalaciones ËGO 10'
  },
  {
    src: '/instalaciones/inst-11.png',
    alt: 'Instalaciones ËGO 11'
  },
  {
    src: '/instalaciones/inst-12.png',
    alt: 'Instalaciones ËGO 12'
  },
  {
    src: '/instalaciones/inst-13.png',
    alt: 'Instalaciones ËGO 13'
  },
  {
    src: '/instalaciones/inst-14.png',
    alt: 'Instalaciones ËGO 14'
  },
  {
    src: '/instalaciones/inst-15.png',
    alt: 'Instalaciones ËGO 15'
  },
  {
    src: '/instalaciones/inst-16.png',
    alt: 'Instalaciones ËGO 16'
  },
];

function InstallationsPage(){
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (index) => setActiveImage(index);
  const closeImage = () => setActiveImage(null);
  const prevImage = (event) => {
    event.stopPropagation();
    setActiveImage((current) => (current === 0 ? installationImages.length - 1 : current - 1));
  };
  const nextImage = (event) => {
    event.stopPropagation();
    setActiveImage((current) => (current === installationImages.length - 1 ? 0 : current + 1));
  };

  return (
    <SharedPageShell>
      <section
        className="installations-hero-original"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10,14,22,.48), rgba(10,14,22,.68) 62%, rgba(238,233,230,1) 100%), url(/instalaciones/inst-4.png)` }}
      >
        <div className="installations-title-badge">INSTALACIONES</div>
      </section>

      <section className="installations-overlap-section">
        <div className="dark-block installations-original-card">
          <p className="installations-description">
            En Ëgo contamos con un novedoso mobiliario de última generación e instalaciones climatizadas, con extractores de aire y totalmente adaptadas a personas de movilidad reducida.
          </p>

          <div className="installations-video">
            <iframe
              src="https://www.youtube.com/embed/GS6bWH8lEWw"
              title="Academia de peluquería y estética Ëgo | Instalaciones y servicios"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </div>

          <div className="installations-gallery">
            {installationImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                className="installation-thumb"
                type="button"
                onClick={() => openImage(index)}
                aria-label={`Ampliar imagen ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectPosition: image.pos || 'center center' }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage !== null && (
        <div className="lightbox" onClick={closeImage} role="dialog" aria-modal="true">
          <button className="lightbox-close" type="button" onClick={closeImage} aria-label="Cerrar imagen">×</button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={prevImage} aria-label="Imagen anterior">‹</button>
          <img
            src={installationImages[activeImage].src}
            alt={installationImages[activeImage].alt}
            style={{ objectPosition: installationImages[activeImage].pos || 'center center' }}
          />
          <button className="lightbox-nav lightbox-next" type="button" onClick={nextImage} aria-label="Imagen siguiente">›</button>
        </div>
      )}
    </SharedPageShell>
  )
}

function ReservationPage(){
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  async function handleReservationSubmit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setFormState({ status: 'sending', message: 'Enviando reserva...' });

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'No se ha podido enviar la reserva.');
      }

      form.reset();
      setFormState({
        status: 'success',
        message: 'Reserva enviada correctamente. Te contactaremos lo antes posible.'
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error.message || 'Ha ocurrido un error al enviar la reserva.'
      });
    }
  }

  return (
    <SharedPageShell>
      <section className="reservation-hero-original">
        <div className="reservation-title-badge">RESERVA DE PLAZA</div>
      </section>

      <section className="reservation-main-section">
        <div className="dark-block reservation-original-card">
          <h2>Reserva Online</h2>
          <p className="reservation-intro">
            Rellena el formulario y nos pondremos en contacto contigo para confirmar disponibilidad, resolver dudas y formalizar tu reserva.
          </p>

          <form
            className="reservation-form reservation-form-final"
            onSubmit={handleReservationSubmit}
          >
            <input type="text" name="website" tabIndex="-1" autoComplete="off" className="form-honeypot" aria-hidden="true" />

            <label>
              Nombre y apellidos
              <input name="nombre" required placeholder="Tu nombre" autoComplete="name" />
            </label>

            <label>
              Email
              <input name="email" type="email" required placeholder="tu@email.com" autoComplete="email" />
            </label>

            <label>
              Teléfono
              <input name="telefono" required placeholder="Tu teléfono" autoComplete="tel" />
            </label>

            <label>
              Curso o servicio de interés
              <select name="curso" required defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Cursos de estética</option>
                <option>Peluquería: iniciación</option>
                <option>Peluquería: avanzados</option>
                <option>Servicios de salón</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea name="mensaje" placeholder="Cuéntanos qué necesitas"></textarea>
            </label>

            <button type="submit" disabled={formState.status === 'sending'}>
              {formState.status === 'sending' ? 'Enviando...' : 'Enviar reserva'}
            </button>

            {formState.message && (
              <p className={`form-feedback ${formState.status === 'success' ? 'is-success' : formState.status === 'error' ? 'is-error' : ''}`}>
                {formState.message}
              </p>
            )}
          </form>

          <p className="reservation-note">
            También puedes escribirnos directamente a <a href="mailto:info@egoacademy.es">info@egoacademy.es</a> o llamarnos al <a href="tel:+34659614980">659614980</a>.
          </p>
        </div>
      </section>
    </SharedPageShell>
  )
}

function PWAInstallButton(){
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    setIsInstalled(isStandalone);

    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      if (!isStandalone) setIsVisible(true);
    };

    const onAppInstalled = () => {
      setIsInstalled(true);
      setIsVisible(false);
      setInstallPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  async function installApp(){
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
    setIsVisible(false);
  }

  if (isInstalled || !isVisible) return null;

  return (
    <button className="pwa-install-button" type="button" onClick={installApp} aria-label="Instalar ËGO Academy como aplicación">
      Descargar app
    </button>
  )
}

function Placeholder(){
  return (
    <>
      <Header/>
      <section className="placeholder"><h1>Fase 1: Home</h1><p>Primero validamos la página de inicio. Después replicamos este criterio al resto.</p></section>
      <Contact/>
      <Footer/>
    </>
  )
}

function App(){
  const [path, setPath] = useState(window.location.hash.replace('#','') || '/');

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.replace('#','') || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if(path === '/sobre-nosotros') return <AboutPage/>
  if(path === '/nuestros-servicios') return <CoursesPage/>
  if(path === '/cursos-estetica') return <CourseEsteticaPage/>
  if(path === '/cursos-iniciacion') return <CourseIniciacionPage/>
  if(path === '/cursos-avanzados') return <CourseAvanzadosPage/>
  if(path === '/instalaciones') return <InstallationsPage/>
  if(path === '/reserva-plaza') return <ReservationPage/>
  return <Home/>
}

function RootApp(){
  return (
    <>
      <App/>
      <PWAInstallButton/>
    </>
  )
}

createRoot(document.getElementById('root')).render(<RootApp/>);
