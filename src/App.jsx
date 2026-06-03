import { useEffect, useRef } from 'react'

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const techs = ['JavaScript', 'Python', 'Node.js', 'React', 'React Native', 'HTML / CSS', 'Banco de Dados', 'Fullstack']

const projects = [
  {
    name: 'FitUp',
    desc: 'App de treinos personalizados por nível (Iniciante, Intermediário, Avançado) com sistema de streak, conquistas e acompanhamento de progresso.',
    lang: 'React Native',
    href: 'https://github.com/LuisSarache',
    thumbStyle: { objectFit: 'contain', padding: '1rem', background: '#000' },
  },
  {
    name: 'InovaClass',
    desc: 'Plataforma para facilitar a comunicação entre professores e alunos, com gerenciamento de atividades, chat com IA e acompanhamento de desempenho acadêmico.',
    lang: 'React · Vite',
    href: 'https://github.com/LuisSarache/InovaClass-frontEnd',
    thumbStyle: { objectFit: 'contain', padding: '1.5rem', background: '#e8fffe' },
  },
  {
    name: 'VacaFácil',
    desc: 'Plataforma web para gestão completa de fazendas leiteiras — controle de rebanho, produção, finanças e saúde animal. Desenvolvido com React e Vite.',
    lang: 'React · Vite',
    href: 'https://github.com/LuisSarache/front-vacafacil',
    thumbStyle: { objectFit: 'contain', padding: '1rem', background: '#000' },
  },
]

function RainCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const drops = []
    const COUNT = 120

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < COUNT; i++) {
      drops.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        len: Math.random() * 18 + 8,
        speed: Math.random() * 4 + 3,
        width: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drops.forEach(d => {
        ctx.beginPath()
        const grad = ctx.createLinearGradient(d.x, d.y, d.x - d.len * 0.2, d.y + d.len)
        grad.addColorStop(0, 'rgba(99,102,241,0)')
        grad.addColorStop(1, `rgba(160,170,255,${d.opacity})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = d.width
        ctx.lineCap = 'round'
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.len * 0.2, d.y + d.len)
        ctx.stroke()
        d.y += d.speed
        d.x -= d.speed * 0.2
        if (d.y > canvas.height + 20) {
          d.y = -20
          d.x = Math.random() * canvas.width
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="rain-canvas" />
}

export default function App() {
  return (
    <>
      <RainCanvas />
      <div className="container">
        <nav>
          <div className="nav-logo"><span>~</span>/sarache</div>
          <ul className="nav-links">
            <li><a href="#projetos">projetos</a></li>
            <li><a href="#sobre">sobre</a></li>
          </ul>
        </nav>

        <div className="main-grid">
          {/* SIDEBAR */}
          <div className="sidebar">
            <div className="hero">
              <div className="avatar">
                <img src="https://avatars.githubusercontent.com/u/210474782?v=4" alt="Foto de Sarache" />
              </div>
              <div className="hero-info">
                <h1>Sarache</h1>
                <div className="title">Fullstack Developer</div>
                <div className="location">
                  <PinIcon />
                  Minas Gerais, Brasil
                </div>
                <div className="social-row">
                  <a className="social-btn" href="https://github.com/LuisSarache" target="_blank" rel="noreferrer">
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="about-block">
              <p className="about-text">
                Desenvolvedor fullstack de <strong>Minas Gerais, Brasil</strong>. Minha jornada na programação começou através de um curso — o que começou como uma busca por conexão se tornou uma paixão por construir coisas. Trabalho com desenvolvimento <strong>web, mobile e banco de dados</strong>, sempre buscando aprender e evoluir.
              </p>
            </div>

            <div className="section" id="sobre">
              <div className="section-label">sobre</div>
              <div className="info-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="info-block">
                  <h3>Interesses</h3>
                  <ul>
                    <li>Desenvolvimento Fullstack</li>
                    <li>Aplicações Mobile</li>
                    <li>Banco de Dados</li>
                    <li>Projetos Open Source</li>
                  </ul>
                </div>
                <div className="info-block" style={{ marginTop: '1rem' }}>
                  <h3>Idiomas</h3>
                  <ul>
                    <li>Português (Nativo)</li>
                    <li>Inglês (Básico)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="content">
            <div className="section">
              <div className="section-label">tecnologias</div>
              <div className="tech-grid">
                {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>

            <div className="section" id="projetos">
              <div className="section-label">projetos</div>
              <div className="projects-list">
                {projects.map(p => (
                  <a key={p.name} className="project-card" href={p.href} target="_blank" rel="noreferrer">
                    <div className="project-body">
                      <div className="project-main">
                        <div className="project-name">{p.name}</div>
                        <div className="project-desc">{p.desc}</div>
                        <div className="project-footer">
                          <span className="project-lang">{p.lang}</span>
                          <span className="project-link">
                            <GithubIcon size={12} />
                            ver repositório
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer>
          <a href="https://github.com/LuisSarache" target="_blank" rel="noreferrer">github.com/LuisSarache</a>
          <span>© 2026 Sarache</span>
        </footer>
      </div>
    </>
  )
}
