import { useMemo, useState } from 'react'
import './App.css'

const signals = [
  { label: 'Launch speed', value: 84, accent: 'red' },
  { label: 'Resilience', value: 91, accent: 'green' },
  { label: 'Reach', value: 78, accent: 'blue' },
  { label: 'Cost control', value: 69, accent: 'gold' },
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
  ['Hospitals', 'Live imaging, patient portals, and secure collaboration stay available around the clock.'],
  ['Media', 'Studios render, distribute, and personalize stories for millions of screens at once.'],
  ['Commerce', 'Retailers survive launch days, fraud spikes, and real-time inventory shifts.'],
  ['Cities', 'Transit, energy, and emergency systems coordinate through shared digital infrastructure.'],
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
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Cloud importance home">
          CLOUD / SIGNAL
        </a>
        <div className="nav-links">
          <a href="#systems">Systems</a>
          <a href="#impact">Impact</a>
          <a href="#world">World</a>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="film-grain" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="eyebrow">Infrastructure as atmosphere</p>
          <h1>Cloud computing is the invisible studio behind modern life.</h1>
          <p className="lede">
            It gives ideas somewhere to run, data somewhere to breathe, and teams the power to ship without waiting for the future to arrive.
          </p>
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

          <div className={`layer-visual ${activeLayer.id}`}>
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

      <section className="world-section" id="world">
        <div className="section-heading">
          <p className="eyebrow">Everyday gravity</p>
          <h2>The cloud is not abstract. It is operational continuity.</h2>
        </div>

        <div className="scene-grid">
          {industryScenes.map(([title, body]) => (
            <article className="scene-card" key={title}>
              <div className="scene-frame" aria-hidden="true">
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

      <section className="final-section">
        <p className="eyebrow">The essential idea</p>
        <h2>Cloud computing makes technology feel less like a room full of machines and more like a living network of possibility.</h2>
      </section>
    </main>
  )
}

export default App
