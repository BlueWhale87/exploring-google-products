import { useMemo, useState } from 'react'
import './App.css'

const signals = [
  { label: 'Launch velocity', value: 84, accent: 'red' },
  { label: 'Resilience posture', value: 91, accent: 'green' },
  { label: 'Global reach', value: 78, accent: 'blue' },
  { label: 'Governed spend', value: 69, accent: 'gold' },
]

const cloudLayers = [
  {
    id: 'compute',
    title: 'Compute',
    stat: 'Elastic engines',
    body: 'Applications expand from a quiet baseline to global peak traffic without waiting for new hardware.',
    nodes: ['Functions', 'Containers', 'GPUs', 'Edge'],
  },
  {
    id: 'data',
    title: 'Data',
    stat: 'Living memory',
    body: 'Cloud platforms keep product, customer, and operations data close to the systems that need it.',
    nodes: ['Streams', 'Lakehouse', 'Warehouse', 'Backups'],
  },
  {
    id: 'ai',
    title: 'AI',
    stat: 'Models on demand',
    body: 'Teams can train, tune, and serve intelligence where their software already runs.',
    nodes: ['Training', 'Inference', 'Search', 'Agents'],
  },
]

const industryScenes = [
  {
    title: 'Hospitals',
    body: 'Live imaging, patient portals, and secure collaboration stay available around the clock.',
    tone: 'clinic',
  },
  {
    title: 'Studios',
    body: 'Creative teams render, distribute, and personalize stories for millions of screens at once.',
    tone: 'studio',
  },
  {
    title: 'Commerce',
    body: 'Retailers survive launch days, fraud spikes, and real-time inventory shifts.',
    tone: 'market',
  },
  {
    title: 'Cities',
    body: 'Transit, energy, and emergency systems coordinate through shared digital infrastructure.',
    tone: 'city',
  },
]

const trustPillars = [
  ['Identity', 'Least privilege access, single sign-on, hardware backed keys, and continuous session review.'],
  ['Protection', 'Encryption in transit and at rest, secrets rotation, network segmentation, and zero trust policy.'],
  ['Detection', 'Centralized telemetry, anomaly signals, incident runbooks, and recoverable backups.'],
]

const regulationRows = [
  ['SOC 2', 'Operational controls for security, availability, confidentiality, and change management.'],
  ['ISO 27001', 'Risk-based information security governance across people, process, and technology.'],
  ['GDPR', 'Privacy-by-design patterns, data minimization, deletion workflows, and residency planning.'],
  ['HIPAA-ready', 'Protected workflows for healthcare data when configured with proper agreements and safeguards.'],
]

const accessibilityRows = [
  ['WCAG 2.2 AA target', 'Color contrast, semantic landmarks, keyboard access, and predictable interaction states.'],
  ['Inclusive operations', 'Captions, reduced-motion support, readable type scales, and assistive technology testing.'],
  ['Reliable experiences', 'Error states, recovery paths, offline-aware interfaces, and measurable performance budgets.'],
]

const renewableReels = [
  {
    title: 'Solar field orchestration',
    meta: 'Renewable load balancing',
    body: 'Cloud platforms model production, storage, and demand so clean energy can be routed with less waste.',
    style: 'solar',
  },
  {
    title: 'Wind farm telemetry',
    meta: 'Edge analytics',
    body: 'Sensor streams flag maintenance windows before turbines lose output or teams lose visibility.',
    style: 'wind',
  },
  {
    title: 'Grid storage control',
    meta: 'Real-time optimization',
    body: 'Distributed systems coordinate batteries, usage forecasts, and market signals at machine speed.',
    style: 'grid',
  },
]

function App() {
  const [activeLayer, setActiveLayer] = useState(cloudLayers[0])
  const [traffic, setTraffic] = useState(64)
  const [resilience, setResilience] = useState(82)

  const computedImpact = useMemo(() => {
    const scale = Math.round(traffic * 1.7 + resilience * 1.1)
    return {
      deployments: Math.max(8, Math.round(scale / 14)),
      recovery: Math.max(2, 18 - Math.round(resilience / 7)),
      users: Math.round(traffic * 1.4 + resilience * 0.8),
    }
  }, [traffic, resilience])

  return (
    <main className="site-shell">
      <a className="skip-link" href="#systems">
        Skip to content
      </a>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Cloud importance home">
          CLOUD / SIGNAL
        </a>
        <div className="nav-links">
          <a href="#systems">Systems</a>
          <a href="#impact">Impact</a>
          <a href="#trust">Trust</a>
          <a href="#sustainability">Energy</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="film-grain" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow">Infrastructure as atmosphere</p>
          <h1>Cloud computing is the operating system of modern ambition.</h1>
          <p className="lede">
            It gives ideas somewhere to run, data somewhere to breathe, and leaders a platform that can scale, govern, secure, and decarbonize the work ahead.
          </p>
          <div className="hero-actions" aria-label="Page highlights">
            <a href="#trust">Security posture</a>
            <a href="#sustainability">Future infrastructure</a>
          </div>
        </div>

        <div className="cloud-cinema" aria-label="Animated cloud infrastructure visualization">
          <div className="sun-disc"></div>
          <div className="signal-orbit orbit-one"></div>
          <div className="signal-orbit orbit-two"></div>
          <div className="signal-orbit orbit-three"></div>
          <button className="cloud-node node-core" type="button">
            Cloud Core
          </button>
          <button className="cloud-node node-ai" type="button">
            AI
          </button>
          <button className="cloud-node node-data" type="button">
            Data
          </button>
          <button className="cloud-node node-edge" type="button">
            Edge
          </button>
          <button className="cloud-node node-security" type="button">
            Trust
          </button>
          <div className="availability-badge">
            <span>99.99</span>
            <small>availability target</small>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Cloud computing value indicators">
        {signals.map((signal) => (
          <article className={`signal-card ${signal.accent}`} key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}%</strong>
            <div className="meter" style={{ '--fill': `${signal.value}%` }}></div>
          </article>
        ))}
      </section>

      <section className="systems-section" id="systems">
        <div className="section-heading">
          <p className="eyebrow">Three layers, one nervous system</p>
          <h2>Cloud turns raw infrastructure into a responsive creative medium.</h2>
        </div>

        <div className="system-layout">
          <div className="layer-controls" role="tablist" aria-label="Cloud layers">
            {cloudLayers.map((layer) => (
              <button
                aria-selected={activeLayer.id === layer.id}
                aria-controls="layer-panel"
                className={activeLayer.id === layer.id ? 'active' : ''}
                key={layer.id}
                onClick={() => setActiveLayer(layer)}
                role="tab"
                type="button"
              >
                {layer.title}
              </button>
            ))}
          </div>

          <div
            aria-label={`${activeLayer.title} layer visualization`}
            className={`layer-visual ${activeLayer.id}`}
            id="layer-panel"
            role="tabpanel"
          >
            <div className="layer-ring"></div>
            {activeLayer.nodes.map((node, index) => (
              <span className={`layer-node layer-node-${index + 1}`} key={node}>
                {node}
              </span>
            ))}
            <div className="layer-caption">
              <p>{activeLayer.stat}</p>
              <strong>{activeLayer.title}</strong>
            </div>
          </div>

          <p className="layer-body">{activeLayer.body}</p>
        </div>
      </section>

      <section className="media-section" aria-label="Cloud operations media wall">
        <div className="media-copy">
          <p className="eyebrow">Board-ready signal</p>
          <h2>From idea to global service without rebuilding the company.</h2>
        </div>
        <div className="media-wall">
          <div className="media-frame command-center" role="img" aria-label="Mock command center dashboard">
            <span className="media-label">Global operations</span>
          </div>
          <div className="media-frame data-center" role="img" aria-label="Mock modern data center image">
            <span className="media-label">Clean compute</span>
          </div>
          <div className="media-frame product-flow" role="img" aria-label="Mock product launch workflow">
            <span className="media-label">Launch pipeline</span>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="impact-copy">
          <p className="eyebrow">Interactive impact model</p>
          <h2>Move the pressure. Watch the cloud adapt.</h2>
          <p>
            Cloud computing matters because demand is unpredictable. It lets organizations dial capacity up, harden weak points, and keep shipping while the audience grows.
          </p>
        </div>

        <div className="control-panel">
          <label>
            <span>Traffic surge</span>
            <input
              max="100"
              min="0"
              onChange={(event) => setTraffic(Number(event.target.value))}
              type="range"
              value={traffic}
            />
          </label>
          <label>
            <span>Resilience focus</span>
            <input
              max="100"
              min="0"
              onChange={(event) => setResilience(Number(event.target.value))}
              type="range"
              value={resilience}
            />
          </label>
        </div>

        <div className="impact-grid">
          <article>
            <span>{computedImpact.deployments}</span>
            <p>weekly deployments without infrastructure wait time</p>
          </article>
          <article>
            <span>{computedImpact.recovery}m</span>
            <p>estimated recovery window with distributed services</p>
          </article>
          <article>
            <span>{computedImpact.users}k</span>
            <p>users supported through elastic scaling and edge reach</p>
          </article>
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="section-heading">
          <p className="eyebrow">Security, access, governance</p>
          <h2>Professional cloud is not just fast. It is accountable.</h2>
        </div>

        <div className="trust-layout">
          <div className="security-console" aria-label="Security posture visualization">
            <div className="console-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="console-lock">
              <span>Access verified</span>
            </div>
            <div className="console-grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="trust-cards">
            {trustPillars.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="standards-section">
        <div>
          <p className="eyebrow">Regulatory posture</p>
          <h2>Built for audits, privacy, and responsible access.</h2>
        </div>
        <div className="standards-table" aria-label="Regulatory readiness examples">
          {regulationRows.map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="accessibility-section">
        <div className="section-heading">
          <p className="eyebrow">Accessibility and reliability</p>
          <h2>The future only works if everyone can use it.</h2>
        </div>
        <div className="accessibility-grid">
          {accessibilityRows.map(([title, body]) => (
            <article key={title}>
              <span aria-hidden="true"></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="world-section" id="world">
        <div className="section-heading">
          <p className="eyebrow">Everyday gravity</p>
          <h2>The cloud is not abstract. It is operational continuity.</h2>
        </div>

        <div className="scene-grid">
          {industryScenes.map(({ title, body, tone }) => (
            <article className="scene-card" key={title}>
              <div className={`scene-frame ${tone}`} role="img" aria-label={`${title} cloud use mock image`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sustainability-section" id="sustainability">
        <div className="section-heading">
          <p className="eyebrow">Renewable energy reels</p>
          <h2>Cloud gives sustainability teams a live control plane.</h2>
        </div>
        <div className="reel-grid">
          {renewableReels.map((reel) => (
            <article className="reel-card" key={reel.title}>
              <div className={`video-mock ${reel.style}`} role="img" aria-label={`${reel.title} animated mock video`}>
                <span className="play-mark"></span>
                <span className="timecode">00:{reel.style === 'solar' ? '18' : reel.style === 'wind' ? '24' : '31'}</span>
              </div>
              <p className="reel-meta">{reel.meta}</p>
              <h3>{reel.title}</h3>
              <p>{reel.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-section">
        <p className="eyebrow">The essential idea</p>
        <h2>Cloud computing makes technology feel less like a room full of machines and more like a living network of possibility.</h2>
      </section>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#top" aria-label="Cloud signal home">
            CLOUD / SIGNAL
          </a>
          <p>
            Executive concept site for cloud strategy, security, accessibility, sustainability, and regulated growth.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href="#systems">Systems</a>
          <a href="#trust">Security</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#top">Back to top</a>
        </div>
        <p className="footer-note">
          Regulatory examples are illustrative and do not replace legal, compliance, procurement, or security review.
        </p>
      </footer>
    </main>
  )
}

export default App
