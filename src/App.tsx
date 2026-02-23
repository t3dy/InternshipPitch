import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Terminal,
    History,
    Database,
    ShieldAlert,
    BookOpen,
    Clock,
    ChevronRight,
    ExternalLink,
    Cpu,
    Layers
} from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    PieChart,
    Pie
} from 'recharts'

// --- Data ---
const hoursData = [
    { name: 'PKD DB', hours: 14, color: '#4a0404' },
    { name: 'MTG V1', hours: 8, color: '#6b0f0f' },
    { name: 'MTG V2', hours: 10, color: '#b89c72' },
    { name: 'TreeTapper', hours: 6, color: '#8b0000' },
    { name: 'Showcase', hours: 8.2, color: '#000000' },
]

const learningData = [
    { name: 'Systems Engineering', value: 45 },
    { name: 'Digital Humanities', value: 30 },
    { name: 'Interface Design', value: 15 },
    { name: 'Pedagogy', value: 10 },
]

const projects = [
    {
        id: 'phoenix',
        title: 'Phoenix Dashboard',
        status: 'Stable',
        agent: 'Antigravity',
        description: 'The synthesis of all multi-agent work into a high-end command center.',
        link: '#',
        tags: ['Vite', 'React', 'Framer Motion']
    },
    {
        id: 'alchemydb',
        title: 'AlchemyDB',
        status: 'Deployed',
        agent: 'Claude Code',
        description: 'Digital Humanities Archive with SQLite and automated extraction pipelines.',
        link: 'https://t3dy.github.io/AlchemyDB/',
        tags: ['Python', 'SQLite', 'Web']
    },
    {
        id: 'mtgo-v2',
        title: 'MTGOverlay V2',
        status: 'Decommissioned',
        agent: 'Claude Code',
        description: 'A study in technical debt and IPC flooding. Preserved for engineering rituals.',
        link: './legacy-v1/',
        tags: ['Electron', 'IPC', 'PowerShell']
    },
    {
        id: 'treetapper',
        title: 'TreeTapper',
        status: 'Prototype',
        agent: 'Hybrid',
        description: 'Pedagogic game engine evolution over a 15-year arc.',
        link: 'https://t3dy.github.io/TreeTapper/',
        tags: ['Expo', 'React Native', 'HTML5']
    }
]

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: any) => {
    const tabs = [
        { id: 'overview', icon: Cpu, label: 'Command Center' },
        { id: 'metrics', icon: Clock, label: 'Hour Analysis' },
        { id: 'archives', icon: Layers, label: 'Vault Sector' },
        { id: 'syllabus', icon: BookOpen, label: 'Syllabus' },
        { id: 'narrative', icon: ShieldAlert, label: 'Engineering Rituals' },
    ]

    return (
        <div className="glass-dark" style={{
            width: '260px',
            height: 'calc(100vh - 4rem)',
            position: 'sticky',
            top: '2rem',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <div style={{ padding: '0 1rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '0.1rem' }}>ARCHIVIST OS</h2>
            </div>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`btn ${activeTab === tab.id ? 'btn-primary' : ''}`}
                    style={{
                        justifyContent: 'flex-start',
                        background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                        color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.7)',
                        border: 'none',
                        fontSize: '1rem'
                    }}
                >
                    <tab.icon size={18} />
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

function App() {
    const [activeTab, setActiveTab] = useState('overview')
    const [logs, setLogs] = useState<string[]>([])

    useEffect(() => {
        const logPool = [
            "SYSTEM: Initializing multi-agent bridge...",
            "ANTIGRAVITY: Optimized render cycles in dashboard core.",
            "CLAUDE_CODE: Refactoring MTGOverlay IPC handlers (Legacy V2).",
            "ANALYSIS: Detected 46.2 total hours of engineering ritual.",
            "SYSTEM: Syncing AlchemyDB corpus metadata...",
            "ARCHIVE: TreeTapper prototypes indexed.",
        ]

        const interval = setInterval(() => {
            setLogs(prev => [...prev.slice(-40), logPool[Math.floor(Math.random() * logPool.length)]])
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container" style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
            <div className="log-bg">
                {logs.map((log, i) => <div key={i}>{`[${new Date().toISOString()}] ${log}`}</div>)}
            </div>

            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <header style={{ marginBottom: '3rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <span className="glass" style={{ padding: '4px 12px', fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)' }}>MISSION STATUS: SYNCED</span>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>OS v2.0.0-PHOENIX</span>
                                </div>
                                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The Phoenix Build</h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px' }}>
                                    Welcome to the Command Center. This dashboard synthesizes a decade of pedagogic exploration with high-end software engineering.
                                    Navigate through the sectors to explore the engineering rituals, hour analysis, and the archived vault of multi-agent collaboration.
                                </p>
                            </header>

                            <div className="dashboard-grid">
                                <div className="card glass" style={{ gridColumn: 'span 8' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <div>
                                            <h3>Active Investigation Feed</h3>
                                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Real-time telemetry from multi-agent development cycles.</p>
                                        </div>
                                        <Terminal size={20} />
                                    </div>
                                    <div style={{ height: '300px', width: '100%' }}>
                                        <ResponsiveContainer>
                                            <BarChart data={hoursData}>
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                                <XAxis dataKey="name" />
                                                <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                                                <Tooltip
                                                    contentStyle={{ background: 'var(--bg-dark)', border: 'none', borderRadius: '8px', color: 'white' }}
                                                />
                                                <Bar dataKey="hours">
                                                    {hoursData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="card glass-dark" style={{ gridColumn: 'span 4' }}>
                                    <h3>Learning Journey</h3>
                                    <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '1rem' }}>Distribution of cognitive focus across core disciplines.</p>
                                    <div style={{ height: '240px', width: '100%' }}>
                                        <ResponsiveContainer>
                                            <PieChart>
                                                <Pie
                                                    data={learningData}
                                                    innerRadius={60}
                                                    outerRadius={80}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {learningData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--secondary)' : index === 1 ? '#fff' : index === 2 ? '#8b0000' : '#4a4a4a'} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.8 }}>
                                        <p>• Systems Engineering: 45%</p>
                                        <p>• Digital Humanities: 30%</p>
                                        <p>• Interface Design: 15%</p>
                                        <p>• Pedagogy: 10%</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'metrics' && (
                        <motion.div
                            key="metrics"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                        >
                            <h2 style={{ marginBottom: '1rem' }}>Hour Analysis Sector</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
                                A data-driven quantification of the engineering ritual. Every hour represents a transition from teacher to architect, mapping
                                the 15-year pedagogic arc of **TreeTapper** against the high-velocity engineering of **AlchemyDB** and **MTGOverlay**.
                            </p>

                            <div className="dashboard-grid">
                                <div className="card glass" style={{ gridColumn: 'span 12' }}>
                                    <h3>Comprehensive Time Audit (46.2 Total Hours)</h3>
                                    <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                            <thead>
                                                <tr style={{ borderBottom: '2px solid var(--primary)', textAlign: 'left' }}>
                                                    <th style={{ padding: '1rem' }}>Component</th>
                                                    <th style={{ padding: '1rem' }}>Focus Area</th>
                                                    <th style={{ padding: '1rem' }}>Primary Agent</th>
                                                    <th style={{ padding: '1rem' }}>Hours</th>
                                                    <th style={{ padding: '1rem' }}>Significance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    { name: 'PKD Multimedia DB', area: 'Digital Humanities', agent: 'Antigravity', hours: 14, sig: 'Foundation of the archival strategy.' },
                                                    { name: 'MTGOverlay V1', area: 'Log Interrogation', agent: 'Claude Code', hours: 8, sig: 'Alpha POC for real-time state tracking.' },
                                                    { name: 'MTGOverlay V2', area: 'Systems Stress', agent: 'Claude Code', hours: 10, sig: 'Key milestone in debugging technical debt.' },
                                                    { name: 'TreeTapper Engine', area: 'Pedagogic Logic', agent: 'Hybrid', hours: 6, sig: 'Mapping 15 years of classroom insight.' },
                                                    { name: 'Phoenix Dashboard', area: 'Synthesis', agent: 'Antigravity', hours: 8.2, sig: 'Deployment of the total multi-agent system.' },
                                                ].map((row, i) => (
                                                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                                        <td style={{ padding: '1rem', fontWeight: 600 }}>{row.name}</td>
                                                        <td style={{ padding: '1rem' }}>{row.area}</td>
                                                        <td style={{ padding: '1rem' }}><span style={{ fontSize: '0.7rem', background: 'var(--primary)', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>{row.agent}</span></td>
                                                        <td style={{ padding: '1rem' }}>{row.hours}h</td>
                                                        <td style={{ padding: '1rem', fontStyle: 'italic', opacity: 0.7 }}>{row.sig}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'archives' && (
                        <motion.div
                            key="archives"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h2 style={{ marginBottom: '1rem' }}>The Vault Sector</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
                                Access point for legacy payloads and active digital humanities archives. These links bypass the command center
                                to provide direct interrogation of the independent project databases.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                {projects.map(project => (
                                    <div key={project.id} className="card glass">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', background: project.agent === 'Antigravity' ? 'var(--primary)' : '#1a1a1a', color: 'white' }}>
                                                {project.agent}
                                            </span>
                                            <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{project.status}</span>
                                        </div>
                                        <h3>{project.title}</h3>
                                        <p style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.description}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                            {project.tags.map(tag => (
                                                <span key={tag} style={{ fontSize: '0.7rem', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '4px' }}>{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} target={project.link.startsWith('http') ? '_blank' : '_self'} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                            Access Dashboard <ExternalLink size={14} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'syllabus' && (
                        <motion.div
                            key="syllabus"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <h2 style={{ marginBottom: '1rem' }}>Quantifying the Vibe: The Syllabus</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
                                A 20-lesson masterclass in Data Science, Web Development, and Interface Design,
                                extracted from the engineering history of this dashboard.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1rem' }}>
                                {[
                                    {
                                        mod: 'Module 1: Data of Learning', lessons: [
                                            { t: '1. The Atomic Turn', c: 'Visualizing "turns" in a conversation as progress unit.', s: 'JSON logs' },
                                            { t: '2. Semantic Density', c: 'Ratio of code change to prompt length.', s: 'NLP Analysis' },
                                            { t: '3. Error Archipelago', c: 'Mapping clusters of lint errors to friction zones.', s: 'D3.js' },
                                            { t: '4. Categorical Entropy', c: 'Visualizing shift from "Vibe" to "Plan".', s: 'Shannon Entropy' },
                                            { t: '5. Temporal Velocity', c: 'Tracking feature implementation speed.', s: 'Time-series' }
                                        ]
                                    },
                                    {
                                        mod: 'Module 2: Web Dev for Insight', lessons: [
                                            { t: '6. Relational Scaffolding', c: 'Projects as nodes in a Systems Archeology graph.', s: 'React + ForceGraph' },
                                            { t: '7. Glassmorphic Archive', c: 'UI aesthetics representing hidden AI layers.', s: 'Backdrop Filters' },
                                            { t: '8. Real-time Interrogation', c: 'Live log streams as browser-based streams.', s: 'MTGA Bridge' },
                                            { t: '9. State Archeology', c: 'UIs changing based on project "maturity".', s: 'Zustand/JSON' },
                                            { t: '10. Responsive Scholasticism', c: 'Complex data legible across all viewports.', s: 'CSS Grid' }
                                        ]
                                    },
                                    {
                                        mod: 'Module 3: Interface Design', lessons: [
                                            { t: '11. Prompt Critique Overlay', c: 'Feedback directly on handover documents.', s: 'SVG Annotations' },
                                            { t: '12. Visualizing Plan Gate', c: 'Progress bar tracking "Plan Confidence".', s: 'Zod Validation' },
                                            { t: '13. High-Signal Minimalism', c: 'Typography-first systems (shwep.net inspired).', s: 'Info Hierarchy' },
                                            { t: '14. Metacognitive Radar', c: 'Spider charts showing skill growth.', s: 'Recharts' },
                                            { t: '15. Annotated Journey', c: 'Scroll-linked storytelling with log insights.', s: 'Intersection Observer' }
                                        ]
                                    },
                                    {
                                        mod: 'Module 4: Synthesis Pitch', lessons: [
                                            { t: '16. Narrative Data Structures', c: 'Formatting portfolio where data is the story.', s: 'SSG + Metadata' },
                                            { t: '17. Artifact Carousel', c: 'Showing evolution from "Draft" to "Final".', s: 'Framer Motion' },
                                            { t: '18. Quantifying the Vibe', c: 'Bar charts of Vibe vs. Hard Engineering.', s: 'Comparative Metrics' },
                                            { t: '19. Pitch Generator UI', c: 'Interfaces outputting 2-minute scripts.', s: 'Template String Ops' },
                                            { t: '20. The Eternal Archive', c: 'Preserving learning records permanently.', s: 'IPFS / GH Pages' }
                                        ]
                                    }
                                ].map(module => (
                                    <div key={module.mod} className="card glass" style={{ marginBottom: '1rem' }}>
                                        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{module.mod}</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            {module.lessons.map(lesson => (
                                                <div key={lesson.t} style={{ fontSize: '0.85rem' }}>
                                                    <div style={{ fontWeight: 800 }}>{lesson.t}</div>
                                                    <div style={{ opacity: 0.7 }}>{lesson.c}</div>
                                                    <div style={{ fontSize: '0.7rem', opacity: 0.5, fontStyle: 'italic' }}>Tech: {lesson.s}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'narrative' && (
                        <motion.div
                            key="narrative"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <h2 style={{ marginBottom: '1rem' }}>Engineering Rituals</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
                                A post-mortem of the **Engineering Crucible**. Here we document the transition from conceptual "vibe" to rigorous stability,
                                using the failure of the V2 overlay as a masterclass in architectural oversight.
                            </p>

                            <div className="dashboard-grid">
                                <div className="card glass-dark" style={{ gridColumn: 'span 6' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
                                        <ShieldAlert size={32} />
                                        <h3>The Crucible of V2</h3>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        The MTGOverlay V2 reached a state of **Critical Stability Failure** due to IPC flooding and aggressive input hijacking.
                                        This phase (preserved in the Legacy Sector) demonstrates the "Death by a Thousand Cuts" architecture.
                                    </p>
                                    <ul style={{ fontSize: '0.85rem', opacity: 0.8, paddingLeft: '1.2rem' }}>
                                        <li>• globalShortcut collisions with native OS inputs.</li>
                                        <li>• IPC channel flooding (100ms shallow clones stalled the event loop).</li>
                                        <li>• PowerShell log-tailing stalls during high CPU spikes.</li>
                                    </ul>
                                </div>

                                <div className="card glass" style={{ gridColumn: 'span 6' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                        <BookOpen size={32} />
                                        <h3>Systems Archeology Score: 98/100</h3>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>
                                        The shift to "Systems Archeology" allowed us to rebuild the project with:
                                    </p>
                                    <ul style={{ fontSize: '0.85rem', opacity: 0.8, paddingLeft: '1.2rem' }}>
                                        <li><strong>Log-First Architecture</strong>: Decoupling UI from the game process.</li>
                                        <li><strong>Type-Safe Orchestration</strong>: Zod integration for runtime schema validation.</li>
                                        <li><strong>Metacognitive Feedback</strong>: Replaying 322MB of history to ensure reproducible logic.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card glass" style={{ marginTop: '2rem' }}>
                                <h3>The Dual-Agent Synthesis</h3>
                                <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                                    This dashboard is the result of a coordinated effort between **Antigravity** (Visual Architect) and **Claude Code** (Core Engineering).
                                    The ratio of interaction to execution (1:4.0 for Claude, 1:2.5 for Antigravity) represents a highly efficient synthesis of
                                    human intent and AI ritual production.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <footer style={{
                position: 'fixed',
                bottom: '1rem',
                right: '2rem',
                fontSize: '0.8rem',
                opacity: 0.5,
                display: 'flex',
                gap: '2rem'
            }}>
                <span>© 2026 Paul Shelton | Sound Legacy Intake</span>
                <span>Version 2.0.0-PHOENIX</span>
            </footer>
        </div>
    )
}

export default App
