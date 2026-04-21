const logos: [string, string][] = [
  ['/handoff/logos/google.png', 'Google'],
  ['/handoff/logos/meta.png', 'Meta'],
  ['/handoff/logos/goldman.png', 'Goldman Sachs'],
  ['/handoff/logos/jpmorgan.png', 'J.P. Morgan'],
  ['/handoff/logos/ms.png', 'Morgan Stanley'],
  ['/handoff/logos/boa.png', 'Bank of America'],
  ['/handoff/logos/mckinsey.png', 'McKinsey'],
  ['/handoff/logos/blackrock.png', 'BlackRock'],
  ['/handoff/logos/insight.png', 'Insight Partners'],
  ['/handoff/logos/yc.webp', 'Y Combinator'],
  ['/handoff/logos/intel.png', 'Intel Capital'],
  ['/handoff/logos/evercore.jpg', 'Evercore'],
  ['/handoff/logos/barclays.jpg', 'Barclays'],
  ['/handoff/logos/bcg.png', 'BCG'],
  ['/handoff/logos/ey.webp', 'EY'],
  ['/handoff/logos/whitestar.png', 'White Star Capital'],
  ['/handoff/logos/microsoft.png', 'Microsoft'],
  ['/handoff/logos/amazon.png', 'Amazon'],
  ['/handoff/logos/uber.png', 'Uber'],
  ['/handoff/logos/lazard.png', 'Lazard'],
]

const Marquee = () => {
  const doubled = [...logos, ...logos]
  return (
    <div className="marquee-section">
      <p className="marquee-label">Our members are at</p>
      <div className="marquee">
        {doubled.map(([src, alt], i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={alt} loading="lazy" />
        ))}
      </div>
    </div>
  )
}

export default Marquee
