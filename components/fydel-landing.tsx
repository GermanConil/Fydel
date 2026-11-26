"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown, ArrowLeftRight, ArrowRight, ArrowUpRight, Bell, Check, CheckCheck,
  ChevronDown, Coffee, Coins, Crown, Gift, Heart, Home, MapPin, Menu, Package,
  QrCode, Repeat2, ShoppingBag, Sparkles, Star, Store, TrendingUp, Users, Utensils, X,
} from "lucide-react"
import styles from "./fydel-landing.module.css"

const modules = [
  { icon: Coins, name: "Coins y recompensas", title: "Cada compra, un motivo para volver.", text: "Tus clientes acumulan Coins y las usan en su próxima visita. Vos elegís la equivalencia y los beneficios. Ellos eligen volver a tu local.", label: "EL CÍRCULO VIRTUOSO", detail: "Compran → suman → vuelven", kind: "coins" },
  { icon: ShoppingBag, name: "Pedidos y pagos", title: "Del antojo al pedido. Sin vueltas.", text: "Tu carta, el carrito y el pago en una misma experiencia. Retiro o entrega, Coins y Mercado Pago: menos pasos entre tus productos y tus clientes.", label: "TU CARTA, SIEMPRE A MANO", detail: "Eligen → piden → disfrutan", kind: "orders" },
  { icon: Gift, name: "Giftcards y regalos", title: "Que te recomienden con un regalo.", text: "Un café, una cena o Coins para disfrutar. Tus clientes pueden regalar tu experiencia y acercar nuevas personas a tu negocio.", label: "LOS BUENOS MOMENTOS SE COMPARTEN", detail: "Regalan → descubren → vuelven", kind: "gifts" },
  { icon: Crown, name: "Membresías", title: "Tus habituales merecen algo especial.", text: "Creá categorías con beneficios exclusivos y reintegros en Coins. Activá membresías por compra o por metas de consumo: tus reglas, tu comunidad.", label: "MÁS QUE CLIENTES, PARTE DE TU MARCA", detail: "Eligen tu marca → reciben más", kind: "membership" },
]

const brandExamples = [
  { id: "savia", name: "Savia", category: "Café & botánica", logo: "/brands/savia.svg", color: "#234d38", accent: "#e4d3a3", text: "#fff8e9", font: "'Cormorant Garamond', Georgia, serif", title: "Tu pausa.\nTu club favorito.", benefit: "Cada café, un nuevo motivo para volver.", footer: "Cultivamos buenos momentos.", reward: "Café de especialidad · Coins · Recompensas" },
  { id: "forno", name: "Forno 86", category: "Pizzería de barrio", logo: "/brands/forno-86.svg", color: "#a33f29", accent: "#ffdfb3", text: "#fff5e7", font: "Georgia, 'Times New Roman', serif", title: "La próxima ronda\nes entre amigos.", benefit: "Tu pizza de siempre. Más beneficios.", footer: "El barrio tiene su mesa.", reward: "Pizza al horno · Pedidos · Giftcards" },
  { id: "luna", name: "Luna Rota", category: "Bar & cocina", logo: "/brands/luna-rota.svg", color: "#45356b", accent: "#e9ffb0", text: "#f8f0ff", font: "'Space Grotesk', 'Trebuchet MS', sans-serif", title: "Buenas noches.\nMejores planes.", benefit: "Tu próxima salida empieza con un beneficio.", footer: "Nos vemos donde pasan cosas.", reward: "Cócteles de autor · Club · Experiencias" },
  { id: "brasa", name: "Brasa Club", category: "Hamburguesería", logo: "/brands/brasa-club.svg", color: "#252722", accent: "#ddf287", text: "#fffceb", font: "'Bebas Neue', Impact, sans-serif", title: "Más fuego.\nMás ganas de volver.", benefit: "Sumá Coins. Desbloqueá tu próxima burger.", footer: "El hambre nos vuelve a juntar.", reward: "Burgers · Coins · Beneficios exclusivos" },
]

const questions = [
  { q: "¿Fydel es una app para mi marca o un marketplace?", a: "Es una experiencia con la identidad de tu negocio. El nombre, los colores, los productos, las sucursales y los beneficios se adaptan a tu marca. El foco está en construir tu relación con tus clientes, no en mostrarles otros restaurantes." },
  { q: "¿Sirve si tengo una cafetería o más de una sucursal?", a: "La propuesta está pensada para restaurantes, cafeterías, bares y otros negocios gastronómicos. Contempla distintas sucursales y modalidades de retiro o entrega. El alcance de cada implementación se define según tu operación." },
  { q: "¿Puedo elegir cómo funcionan las Coins y los beneficios?", a: "Sí. La equivalencia de las Coins, los porcentajes de reintegro, las categorías de membresía y los módulos habilitados son configurables. La idea es que el programa acompañe la economía y los objetivos de tu negocio." },
  { q: "¿Qué puedo probar en el prototipo?", a: "Podés navegar la app, sumar productos al carrito, simular un pago, escanear un QR de demostración y explorar Coins, Giftcards, membresías y Mi Almacén. Usa datos ficticios: no realiza cobros ni operaciones reales." },
  { q: "¿La app ya procesa pagos e integra mi sistema de caja?", a: "Lo que ves hoy es un prototipo interactivo, no un servicio de producción. Los pagos y los escaneos son simulados. Las integraciones con Mercado Pago, sistemas de caja y servicios externos se evalúan y desarrollan en la implementación de tu proyecto." },
]

function DemoLink({ children = "Ver prototipo", light = false }: { children?: React.ReactNode; light?: boolean }) {
  return <Link href="/prototipo" className={`${styles.button} ${light ? styles.buttonLight : ""}`}>{children}<ArrowUpRight size={19} /></Link>
}

function PhonePreview() {
  return <div className={styles.phone} aria-label="Vista previa ilustrativa de la app para restaurantes">
    <div className={styles.phoneStatus}><span>9:41</span><span className={styles.island} /><span>●●● ▰</span></div>
    <div className={styles.phoneBody}>
      <div className={styles.miniBrand}><span><Coffee size={15} /> casa botánica</span><Bell size={16} /></div>
      <div className={styles.miniGreeting}><small>QUÉ BUENO VERTE DE NUEVO</small><h3>¡Hola, Martín! <span>☀</span></h3><p>Tu próxima pausa tiene recompensa.</p></div>
      <div className={styles.miniBalance}><div><span>TUS COINS</span><Crown size={16} /></div><strong>12.500 <small>Coins</small></strong><p><Sparkles size={12} /> Sos parte de nuestro Club</p><div className={styles.miniProgress}><i /></div></div>
      <Link href="/prototipo" className={styles.miniScan}><QrCode size={21} /><span>Sumar Coins<small>Cada visita suma algo bueno</small></span><ArrowRight size={17} /></Link>
      <div className={styles.miniActions}>{[{ icon: ArrowLeftRight, name: "Transferir" }, { icon: Gift, name: "Giftcards" }, { icon: Package, name: "Mi Almacén" }, { icon: Star, name: "Reseñar" }].map(({ icon: Icon, name }) => <div key={name}><span><Icon size={19} /></span><small>{name}</small></div>)}</div>
      <div className={styles.miniSection}>Una pausa para vos <ArrowRight size={14} /></div>
      <div className={styles.miniProduct}><Image src="/fydel-coffee.jpg" width={250} height={120} alt="Café recién preparado" /><span>Tu café favorito.<br /><b>Ahora, con más beneficios.</b></span></div>
    </div>
    <div className={styles.phoneNav}><Home size={19} /><MapPin size={19} /><span><QrCode size={23} /></span><ShoppingBag size={19} /><Users size={19} /></div>
    <div className={styles.homeIndicator} />
  </div>
}

export default function FydelLanding() {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeModule, setActiveModule] = useState(0)
  const [activeBrand, setActiveBrand] = useState(0)
  const selectedBrand = brandExamples[activeBrand]
  const [visits, setVisits] = useState(300)
  const [ticket, setTicket] = useState(12000)
  const selectedModule = modules[activeModule]
  const estimatedRevenue = Math.round(visits * 0.1 * ticket)

  useEffect(() => {
    const elements = root.current?.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!elements || !window.IntersectionObserver) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add(styles.visible); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    elements.forEach(element => { element.classList.add(styles.revealReady); observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false) }
    window.addEventListener("keydown", onEscape)
    return () => window.removeEventListener("keydown", onEscape)
  }, [menuOpen])

  return <div className={styles.landing} ref={root}>
    <a href="#contenido" className={styles.skipLink}>Ir al contenido</a>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label="Fydel, inicio"><Image src="/fidel-logo.png" alt="Fydel" width={155} height={49} priority /></Link>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegación de la landing" id="landing-navigation">
          {[{ name: "Por qué Fydel", href: "#por-que-fydel" }, { name: "La experiencia", href: "#experiencia" }, { name: "Cómo funciona", href: "#como-funciona" }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.name}</a>)}
          <Link className={styles.mobileDemo} href="/prototipo">Ver prototipo <ArrowUpRight size={17} /></Link>
        </nav>
        <div className={styles.headerActions}><Link href="/prototipo" className={styles.navCta}>Ver prototipo <ArrowUpRight size={16} /></Link><button className={styles.menuButton} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="landing-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </div>
    </header>

    <main id="contenido">
      <section className={`${styles.hero} ${styles.container}`}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span className={styles.statusDot} /> FIDELIZACIÓN PARA GASTRONOMÍA</div>
          <h1>El mejor cliente<br />es el que<br /><span>quiere volver.</span><svg className={styles.underline} viewBox="0 0 450 18" aria-hidden="true"><path d="M4 12 Q190 -3 443 10" /></svg></h1>
          <p>Tu comida los conquista. <strong>Fydel hace que vuelvan.</strong> Transformá cada visita en una relación que crece, con tu propia app de Coins, pedidos y recompensas.</p>
          <div className={styles.heroCtas}><DemoLink /><a href="#experiencia" className={styles.textLink}>Descubrí cómo <ArrowDown size={17} /></a></div>
          <div className={styles.heroNotes}><span><Check size={15} /> Tu marca, tu comunidad</span><span><Check size={15} /> Experiencia a tu medida</span></div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroOrbit} aria-hidden="true" /><div className={styles.heroOrbitTwo} aria-hidden="true" />
          <div className={styles.visualCaption}><span>Una app que conecta.</span><svg width="58" height="38" viewBox="0 0 58 38" aria-hidden="true"><path d="M2 3 Q45 -1 46 30 M37 23 L46 32 L53 21" /></svg></div>
          <div className={styles.phoneTilt}><PhonePreview /></div>
          <div className={styles.floatingReward}><span><Coins size={23} /></span><div><b>¡Una visita que suma!</b><small>+ 850 Coins para volver a disfrutar</small></div><CheckCheck size={18} /></div>
          <div className={styles.floatingClient}><span><Heart size={18} fill="currentColor" /></span><div><b>De primera visita</b><small>a «lo de siempre».</small></div></div>
          <span className={styles.visualFootnote}>Vista ilustrativa · Personalizable con tu marca</span>
        </div>
      </section>

      <section className={styles.businessStrip} aria-label="Para negocios gastronómicos"><div className={styles.container}><p>Hecho para lugares<br /><b>a los que da gusto volver.</b></p><div><span><Utensils /> Restaurantes</span><span><Coffee /> Cafeterías</span><span><Store /> Bares & bistrós</span><span><MapPin /> Cadenas gastronómicas</span></div></div></section>

      <section id="por-que-fydel" className={`${styles.section} ${styles.container}`}>
        <div className={styles.sectionIntro} data-reveal><span className={styles.eyebrow}>MÁS ALLÁ DE LA PRIMERA VISITA</span><h2>No necesitás otra promo.<br />Necesitás <em>más habituales.</em></h2><p>Conseguir que alguien entre es solo el comienzo. La oportunidad está en darle un motivo para elegirte otra vez.</p></div>
        <div className={styles.valueGrid}>
          {[{ icon: Repeat2, number: "01", title: "Que vuelvan más seguido", text: "Recompensá cada compra con Coins que invitan a planear la próxima visita." }, { icon: Heart, number: "02", title: "Que elijan tu marca", text: "Creá beneficios y membresías que transforman una compra en sentido de pertenencia." }, { icon: Users, number: "03", title: "Que traigan a alguien más", text: "Convertí tus productos en regalos y a tus clientes en quienes recomiendan tu experiencia." }].map(({ icon: Icon, number, title, text }) => <article className={styles.valueCard} data-reveal key={number}><div><span className={styles.iconBox}><Icon size={25} /></span><small>{number}</small></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="experiencia" className={styles.experienceSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro} data-reveal><span className={styles.eyebrow}>TU NEGOCIO, EN SU BOLSILLO</span><h2>Una sola app.<br /><em>Muchos motivos para volver.</em></h2><p>Todo lo que tus clientes necesitan para comprar, disfrutar y seguir conectados con tu local.</p></div>
          <div className={styles.experienceGrid} data-reveal>
            <div className={styles.moduleList} role="tablist" aria-label="Funcionalidades de Fydel">{modules.map(({ icon: Icon, name }, index) => <button key={name} role="tab" id={`module-tab-${index}`} aria-selected={activeModule === index} aria-controls="module-panel" className={activeModule === index ? styles.moduleActive : ""} onClick={() => setActiveModule(index)}><Icon size={23} /><span>{name}</span><ArrowUpRight size={19} /></button>)}<p>Elegí una funcionalidad y descubrí cómo conecta con tu negocio.</p></div>
            <div className={styles.modulePanel} role="tabpanel" id="module-panel" aria-labelledby={`module-tab-${activeModule}`}>
              <div className={styles.moduleAnimation} key={selectedModule.kind}>
                <span className={styles.moduleEyebrow}>{selectedModule.label}</span>
                <div className={styles.moduleGraphic}>
                  {selectedModule.kind === "coins" && <><div className={styles.coinDisc}><span>F</span></div><div className={styles.graphicCard}><Coins size={23} /><span>Tu próxima visita ya suma.<b>+ 850 Coins</b></span><span className={styles.graphicCheck}><Check size={15} /></span></div><span className={styles.graphicPill}><Repeat2 size={14} /> {selectedModule.detail}</span></>}
                  {selectedModule.kind === "orders" && <><div className={styles.orderGraphic}><div><Coffee size={25} /><span>Latte de la casa<small>Tu pausa favorita</small></span><b>$3.200</b></div><div><ShoppingBag size={25} /><span>Medialuna artesanal<small>Recién horneada</small></span><b>$1.600</b></div><p><Check size={16} /> ¡Tu pedido está en preparación!</p></div><span className={styles.graphicPill}>{selectedModule.detail}</span></>}
                  {selectedModule.kind === "gifts" && <><div className={styles.giftGraphic}><Gift size={35} /><small>UN REGALO PARA VOS</small><strong>Una pausa juntos.</strong><span>De Sofía, con cariño ♡</span></div><span className={styles.graphicPill}>{selectedModule.detail}</span></>}
                  {selectedModule.kind === "membership" && <><div className={styles.membershipGraphic}><Crown size={30} /><small>CLUB DE LA CASA</small><strong>Sos Premium.</strong><span>20% de reintegro en Coins*</span></div><small className={styles.exampleNote}>*Ejemplo de beneficio configurable.</small></>}
                </div>
                <h3>{selectedModule.title}</h3><p>{selectedModule.text}</p>
              </div>
            </div>
          </div>
          <div className={styles.extrasGrid} data-reveal>{[{ icon: Package, title: "Mi Almacén", text: "Compran hoy. Disfrutan o regalan después." }, { icon: QrCode, title: "Una experiencia con QR", text: "Sumar Coins y pagar, en flujos simples y separados." }, { icon: Star, title: "Reseñas y cercanía", text: "Escuchá cómo estuvo su visita. Seguí mejorando." }].map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={`${styles.brandSection} ${styles.container} ${styles.section}`}>
        <div className={styles.brandVisual} data-reveal>
          <Image src="/fydel-restaurant.jpg" alt="Interior cálido de un restaurante con mesas y vegetación" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <div className={styles.brandCard} data-brand={selectedBrand.id} style={{ background: selectedBrand.color, color: selectedBrand.text, "--brand-accent": selectedBrand.accent, "--brand-font": selectedBrand.font } as CSSProperties}>
            <div className={styles.brandIdentity} key={selectedBrand.id} aria-live="polite" aria-atomic="true">
              <Image src={selectedBrand.logo} alt={`Logo de ${selectedBrand.name}, marca ficticia`} width={210} height={63} />
              <span className={styles.brandCategory}>{selectedBrand.category}</span>
              <strong>{selectedBrand.title}</strong>
              <p>{selectedBrand.benefit}</p>
              <span className={styles.brandRewards}>{selectedBrand.reward}</span>
              <span className={styles.brandCardBottom}>{selectedBrand.footer}<Heart size={17} /></span>
            </div>
          </div>
          <div className={styles.palettePicker} role="group" aria-label="Elegí una marca de ejemplo">
            <span>Probá otra marca<b>{selectedBrand.name}</b></span>
            {brandExamples.map((brand, index) => <button key={brand.id} style={{ background: brand.color, color: brand.accent }} aria-label={`Ver marca ${brand.name}: ${brand.category}`} aria-pressed={activeBrand === index} title={brand.name} onClick={() => setActiveBrand(index)}>{activeBrand === index ? <Check size={17} /> : <span>{["S", "F", "L", "B"][index]}</span>}</button>)}
          </div>
          <span className={styles.brandDisclaimer}>Marcas ficticias · Ejemplos de personalización</span>
        </div>
        <div className={styles.brandCopy} data-reveal><span className={styles.eyebrow}>TU IDENTIDAD NO SE NEGOCIA</span><h2>Tu marca al frente.<br /><em>Fydel detrás.</em></h2><p>No sos un local más en una lista. Sos el lugar que tus clientes eligen. Por eso la experiencia lleva tu identidad, no la de un marketplace.</p><ul><li><Check /> Tu nombre, tus colores y tu personalidad.</li><li><Check /> Tu catálogo, sucursales y modalidades de entrega.</li><li><Check /> Tus reglas de Coins, membresías y beneficios.</li><li><Check /> Los módulos que tienen sentido para tu negocio.</li></ul><a href="#como-funciona" className={styles.textLink}>Así lo llevamos a tu local <ArrowRight size={17} /></a></div>
      </section>

      <section id="como-funciona" className={`${styles.stepsSection} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro} data-reveal><span className={styles.eyebrow}>DE TU LOCAL A SU DÍA A DÍA</span><h2>Simple para tus clientes.<br /><em>Valioso para tu negocio.</em></h2></div>
          <div className={styles.stepsGrid}>{[{ number: "01", icon: Store, title: "Lo hacemos tuyo", text: "Definimos la identidad, los módulos y el programa de beneficios según tu negocio." }, { number: "02", icon: QrCode, title: "Cada visita conecta", text: "Tus clientes compran, suman Coins y descubren todo lo que tu marca tiene para ofrecerles." }, { number: "03", icon: Repeat2, title: "Les das motivos para volver", text: "Recompensas, regalos y experiencias que mantienen a tu local en su próxima elección." }].map(({ number, icon: Icon, title, text }) => <article key={number} data-reveal><div className={styles.stepTop}><span>{number}</span><Icon size={27} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.calculatorSection} ${styles.container} ${styles.section}`}>
        <div data-reveal><span className={styles.eyebrow}>EL VALOR DE UNA VISITA MÁS</span><h2>Volver no es un detalle.<br /><em>Es una oportunidad.</em></h2><p>¿Qué pasaría si un 10% de tus clientes hiciera una compra adicional al mes? Mové los valores y explorá un escenario para tu local.</p><span className={styles.calculatorDisclaimer}>Simulación orientativa. No es una promesa de resultados ni contempla costos o márgenes.</span></div>
        <div className={styles.calculator} data-reveal><div className={styles.calculatorLabel}><TrendingUp size={20} /> EL POTENCIAL DE TUS HABITUALES</div><label htmlFor="monthly-clients">Clientes por mes <b>{visits.toLocaleString("es-AR")}</b></label><input id="monthly-clients" type="range" min="100" max="2000" step="50" value={visits} onChange={event => setVisits(Number(event.target.value))} /><label htmlFor="average-ticket">Ticket promedio <b>${ticket.toLocaleString("es-AR")}</b></label><input id="average-ticket" type="range" min="2000" max="50000" step="1000" value={ticket} onChange={event => setTicket(Number(event.target.value))} /><div className={styles.calculatorResult} aria-live="polite"><span>Venta adicional mensual en este escenario</span><strong>${estimatedRevenue.toLocaleString("es-AR")}</strong><small>{Math.round(visits * .1)} compras adicionales × ${ticket.toLocaleString("es-AR")}</small></div></div>
      </section>

      <section id="probar" className={styles.demoSection}>
        <div className={`${styles.container} ${styles.demoInner}`} data-reveal><div><span className={styles.eyebrow}>MENOS IMAGINAR. MÁS EXPLORAR.</span><h2>La próxima gran experiencia<br />de tus clientes <em>empieza acá.</em></h2><p>Entrá como cliente. Explorá los beneficios. Hacé un pedido.<br />Y después, imaginá todo esto con tu marca.</p><div className={styles.demoActions}><DemoLink light /><span><Check size={15} /> Sin registro ni pagos reales</span></div><small className={styles.demoDisclaimer}>Prototipo interactivo con datos simulados. Las integraciones se desarrollan según cada implementación.</small></div><div className={styles.demoArt} aria-hidden="true"><span className={styles.demoArtRing} /><span className={styles.demoArtRingTwo} /><Image src="/fidel-mark.png" width={130} height={130} alt="" /><span className={styles.demoArtCoin}><Coins size={30} /></span><span className={styles.demoArtGift}><Gift size={26} /></span><span className={styles.demoArtHeart}><Heart size={27} /></span></div></div>
      </section>

      <section className={`${styles.faqSection} ${styles.container} ${styles.section}`}>
        <div data-reveal><span className={styles.eyebrow}>TODO MÁS CLARO</span><h2>Buenas preguntas.<br /><em>Respuestas simples.</em></h2><p>Lo que necesitás saber antes de imaginar Fydel en tu negocio.</p></div>
        <div className={styles.faqList} data-reveal>{questions.map(({ q, a }) => <details key={q}><summary>{q}<ChevronDown size={19} /></summary><p>{a}</p></details>)}</div>
      </section>
    </main>

    <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><Link href="/" className={styles.logo} aria-label="Fydel, inicio"><Image src="/fidel-logo.png" alt="Fydel" width={145} height={46} /></Link><p>Detrás de cada cliente que vuelve,<br />hay una experiencia que vale la pena.</p><Link href="/prototipo" className={styles.textLink}>Conocé la experiencia <ArrowUpRight size={18} /></Link></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} Fydel. Fidelización para locales gastronómicos.</span><a href="#contenido">Volver arriba ↑</a><span>Hecho para conectar.</span></div></div></footer>
  </div>
}
