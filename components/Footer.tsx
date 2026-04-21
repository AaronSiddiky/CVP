const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="footer-big">CVP</div>
        <div className="footer-grid">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, marginBottom: 12 }}>
              Columbia Venture Partners
            </div>
            <p className="footer-brand-sub">
              Columbia University&apos;s premier venture capital initiative.
            </p>
          </div>
          <div className="footer-col">
            <h5>Society</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#members">Members</a></li>
              <li><a href="#apply">Admissions</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:columbiaventurepartners@gmail.com">columbiaventurepartners@gmail.com</a></li>
              <li style={{ marginTop: 12, opacity: 0.6, fontSize: 15 }}>
                Lerner Hall · 2920 Broadway · NY 10027
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© MMXXVI Columbia Venture Partners</span>
          <span>New York · Since 2016</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
