import { useState } from 'react'

const projects = [
    {
        id: 'pkd',
        title: 'Archive Oracle: The PKD Multimedia Database',
        problem: 'Fragmentation of biographical and esoteric archives.',
        solution: 'A scholarly-grade hybrid database with Multimodal RAG AI Tutor integration.',
        tags: ['Digital Humanities', 'Graph DB', 'RAG']
    },
    {
        id: 'sound',
        title: 'Memory Engineering: Sound Legacy Intake',
        problem: 'Manual inventory bottlenecks in biographical archival.',
        solution: 'Automated data pipelines and log-tailing for scalable life-story creation.',
        tags: ['Automation', 'Systems Archeology', 'Workflow']
    },
    {
        id: 'overlay',
        title: 'The Crucible: real-time Log Interrogation',
        problem: 'Technical debt in real-time application state management.',
        solution: 'Native Win32 geometry sync and Zod-validated persistence for game-state tracking.',
        tags: ['Engineering Rigor', 'IPC', 'State Logic']
    }
]

function App() {
    return (
        <div>
            <section className="hero">
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>The Archive of the Future</h4>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', maxWidth: '800px' }}>
                    Internship <span className="burgundy-text">Pitch Generator</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}>
                    A methodology for transforming "Vibe Coding" into high-impact systems engineering and instructional design.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#archive" className="btn" style={{ textDecoration: 'none' }}>Explore Dashboard</a>
                    <a href="#pitch-generator" className="btn" style={{ background: 'var(--primary)', color: 'white', textDecoration: 'none' }}>Generate Pitch</a>
                </div>
            </section>

            <div className="container" id="pitch-video">
                <h2 className="section-title">The Pitch</h2>
                <div className="video-container">
                    <p>[Placeholder: Internship Pitch Video - 2 Minutes]</p>
                    {/* Once video is recorded: <video controls src="/pitch_recording.mp4" style={{width: '100%'}} /> */}
                </div>
                <p style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '1rem', color: 'var(--text-muted)' }}>
                    Demonstrating CS aptitude and the "Action Mapping" approach to Paul Shelton & Sound Legacy.
                </p>
                <div id="methodology" style={{ height: '0' }}></div>
            </div>

            <div className="container" id="archive">
                <h2 className="section-title">Project Archive</h2>
                <div className="list-view">
                    {projects.map(p => (
                        <div key={p.id} className="list-item" id={p.id}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ marginBottom: '1.5rem' }}>{p.solution}</p>
                            <button className="btn" style={{ fontSize: '0.7rem', padding: '0.4rem 1rem' }}>Read Proposal</button>
                        </div>
                    ))}
                </div>
                <div id="pkd" style={{ height: '0' }}></div>
            </div>

            <div className="container" id="sitemap-section">
                <h2 className="section-title">Site Map & Resources</h2>
                <div id="services" style={{ height: '0' }}></div>
                <div id="lessons" style={{ height: '0' }}></div>
                <div id="skills" style={{ height: '0' }}></div>
                <div id="pitch-generator" style={{ height: '0' }}></div>
                <div className="sitemap">
                    <ul>
                        <li>
                            <h4>Interrogations</h4>
                            <a href="#pitch-video">The Pitch Video</a><br />
                            <a href="#methodology">Metacognition Report</a>
                        </li>
                        <li>
                            <h4>The Archive</h4>
                            <a href="#archive">Project Catalog</a><br />
                            <a href="#pkd">PKD Archive Proposal</a>
                        </li>
                        <li>
                            <h4>Methodology</h4>
                            <a href="#services">ID Agency Services</a><br />
                            <a href="#lessons">Digital Humanities Curriculum</a>
                        </li>
                        <li>
                            <h4>Technical</h4>
                            <a href="https://github.com/t3dy/InternshipPitch">GitHub Repository</a><br />
                            <a href="#skills">Skill Radar Data</a>
                        </li>
                    </ul>
                </div>
            </div>

            <footer style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '2px double var(--border)', marginTop: '4rem' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    Instructional Design & Systems Archeology
                </p>
                <p className="burgundy-text" style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                    Developed by The Vibe Coder
                </p>
            </footer>
        </div>
    )
}

export default App
