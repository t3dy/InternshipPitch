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
                                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The Phoenix Build</h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
                                    A multi-agent synthesis of engineering history, pedagogic evolution,
                                    and digital humanities archives.
                                </p>
                            </header>

                            <div className="dashboard-grid">
                                <div className="card glass" style={{ gridColumn: 'span 8' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                        <h3>Active Investigation Feed</h3>
                                        <Terminal size={20} />
                                    </div>
                                    <div style={{ height: '300px', width: '100%' }}>
                                        <ResponsiveContainer>
                                            <BarChart data={hoursData}>
                                                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                                <XAxis dataKey="name" />
                                                <YAxis />
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
                                    <div style={{ height: '300px', width: '100%' }}>
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
                                                        <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--secondary)' : index === 1 ? '#fff' : '#4a4a4a'} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                                        <p>• Systems Engineering: 45%</p>
                                        <p>• Digital Humanities: 30%</p>
                                        <p>• Interface Design: 15%</p>
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
                            <h2 style={{ marginBottom: '2rem' }}>The Vault Sector</h2>
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
