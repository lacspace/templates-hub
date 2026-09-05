export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-mark" src="/brand/mark.png" alt="Lacspace" width={26} height={26} />
              <span>Lacspace Templates</span>
            </div>
            <p>
              Eight finished Next.js apps, live and clickable. Scaffold your own
              in one command with create-lacspace-app.
            </p>
            <span className="foot-made">Built with create-lacspace-app</span>
          </div>

          <div className="foot-col">
            <h4>Templates</h4>
            <a href="/#templates">All 8 templates</a>
            <a href="/#why">Why these</a>
            <a href="/terms">Terms of use</a>
          </div>

          <div className="foot-col">
            <h4>Developer Platform</h4>
            <a href="https://developer.lacspace.com" target="_blank" rel="noopener">Docs &amp; handbook</a>
            <a href="https://developer.lacspace.com" target="_blank" rel="noopener">63 packages</a>
            <a href="https://lacspace.com/create-app" target="_blank" rel="noopener">Get the CLI</a>
          </div>

          <div className="foot-col">
            <h4>Lacspace</h4>
            <a href="https://lacspace.com" target="_blank" rel="noopener">lacspace.com</a>
            <a href="https://github.com/lacspace/npm-packages" target="_blank" rel="noopener">GitHub</a>
            <a href="https://lacspace.com/licenses/lacspace-free-1.0" target="_blank" rel="noopener">Licence</a>
          </div>
        </div>

        <div className="foot-base">
          <span>© {year} Lacspace · Lacspace Free Licence</span>
          <span className="foot-links">
            <a href="/terms">Terms of use</a>
            <a href="https://developer.lacspace.com" target="_blank" rel="noopener">developer.lacspace.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
