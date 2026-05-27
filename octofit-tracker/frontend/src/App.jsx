import './App.css'
import logo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="app-shell">
      <section className="container py-5 py-lg-6">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="eyebrow mb-3">OctoFit Tracker</div>
            <h1 className="display-4 fw-bold text-white lh-1 mb-3">
              Training, tracking, and team competition in one modern stack.
            </h1>
            <p className="lead text-white-50 mb-4">
              The app is wired for React 19, Vite, Express, TypeScript, and Mongoose,
              with the public surfaces reserved for 5173, 8000, and 27017.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge rounded-pill text-bg-light">Frontend 5173</span>
              <span className="badge rounded-pill text-bg-dark">API 8000</span>
              <span className="badge rounded-pill text-bg-secondary">MongoDB 27017</span>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="https://react.dev/" target="_blank" rel="noreferrer">
                React 19 ready
              </a>
              <a className="btn btn-outline-light btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
                Vite starter
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-card card border-0 shadow-lg">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img className="brand-mark" src={logo} alt="OctoFit Tracker logo" />
                  <div>
                    <div className="text-uppercase small text-white-50">Initialized workspace</div>
                    <h2 className="h4 mb-0 text-white">Application scaffold online</h2>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="stat-card h-100">
                      <div className="stat-label">Authentication</div>
                      <div className="stat-value">Ready</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="stat-card h-100">
                      <div className="stat-label">Team play</div>
                      <div className="stat-value">Planned</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="stat-card h-100">
                      <div className="stat-label">Leaderboard</div>
                      <div className="stat-value">Planned</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="stat-card h-100">
                      <div className="stat-label">Workout suggestions</div>
                      <div className="stat-value">Planned</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
