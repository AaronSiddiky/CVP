import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import PhotoStrip from '@/components/PhotoStrip'
import MembersSection from '@/components/MembersSection'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion'
import { APPLY_URL } from '@/lib/links'

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Marquee />

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="section-head">
            <Reveal className="eyebrow">§ 01 &nbsp; About</Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title">A community, <em>not a pipeline.</em></h2>
            </Reveal>
          </div>

          <div className="about-grid">
            <div></div>
            <div className="about-body">
              <StaggerGroup>
                <StaggerItem>
                  <p className="about-lede about-drop">
                    We operate as a group of <em>like-minded peers</em> interested in learning more about Venture Capital.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    In 2016, a group of Columbia students founded CVP. A decade later, Columbia Venture Partners exists as a comprehensive platform that bridges academic excellence and real-world venture capital experience — exposing members to deal sourcing through partnerships with leading funds including NEA, Picus, and Interplay, and to internship opportunities with Plug and Play.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Through an extensive network of alumni at top-tier firms, members gain unparalleled access to professional development in the venture capital ecosystem — and to the Morningside Venture Fund, Columbia&apos;s first student-driven venture fund, which deploys capital directly into Columbia-affiliated startups.
                  </p>
                </StaggerItem>
              </StaggerGroup>

              <StaggerGroup className="about-pillars" id="thesis" delay={0.15}>
                <StaggerItem className="pillar">
                  <div className="pillar-num">i.</div>
                  <div>
                    <div className="pillar-title">Academy Training</div>
                    <div className="pillar-text">We require our analyst class to complete the CVP Academy, a 12-week program that provides them the fundamentals of venture capital investing, and recruiting from industry professionals and club alumni.</div>
                  </div>
                </StaggerItem>
                <StaggerItem className="pillar">
                  <div className="pillar-num">ii.</div>
                  <div>
                    <div className="pillar-title">Network</div>
                    <div className="pillar-text">CVP alumni have gone on to work at Bessemer, Insight, NEA, Goldman Sachs, Evercore, Google, Y Combinator, and many more. Members have direct access to our alumni network.</div>
                  </div>
                </StaggerItem>
                <StaggerItem className="pillar">
                  <div className="pillar-num">iii.</div>
                  <div>
                    <div className="pillar-title">Generalist</div>
                    <div className="pillar-text">CVP brings members from a diverse group of backgrounds that share a passion for venture capital. We have accepted individuals who have majored in pre-law, political science, engineering, financial economics, and anything in between.</div>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* PARTNERS */}
      <section className="partners" id="early">
        <div className="partners-inner">
          <Reveal>
            <div className="eyebrow">§ 02 &nbsp; Partnerships</div>
            <h2 className="partners-title" style={{ marginTop: 12 }}>Fund <em>partners</em>.</h2>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: 'var(--muted)', marginTop: 20, lineHeight: 1.5, maxWidth: '28ch' }}>
              CVP members source, diligence, and syndicate alongside these firms each semester.
            </p>
          </Reveal>
          <StaggerGroup className="partners-grid">
            <StaggerItem className="partner">
              <span className="partner-name">NEA</span>
              <span className="partner-desc">New Enterprise Associates</span>
              <span className="partner-tag">Sourcing · Diligence</span>
            </StaggerItem>
            <StaggerItem className="partner">
              <span className="partner-name">Picus</span>
              <span className="partner-desc">Picus Capital</span>
              <span className="partner-tag">Sourcing</span>
            </StaggerItem>
            <StaggerItem className="partner">
              <span className="partner-name">Interplay</span>
              <span className="partner-desc">Interplay Ventures</span>
              <span className="partner-tag">Sourcing · Memos</span>
            </StaggerItem>
            <StaggerItem className="partner">
              <span className="partner-name">Plug &amp; Play</span>
              <span className="partner-desc">Plug and Play Tech Center</span>
              <span className="partner-tag">Internships</span>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* PHOTO: NYC AND BEYOND */}
      <section className="photo-section">
        <div className="wrap">
          <div className="photo-intro">
            <Reveal className="eyebrow">§ 03 &nbsp; Venture, in New York and beyond</Reveal>
            <Reveal delay={0.1}>
              <h2><em>Annual trips</em> beyond Morningside.</h2>
              <p>CVP hosts an annual trip to explore the venture scene outside New York City. In recent years, members have travelled to San Francisco, Chicago, London, and San Juan.</p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.15}>
          <PhotoStrip
            photos={[
              { src: '/CVP in London 2025.JPG', alt: 'CVP in London 2025' },
              { src: '/CVP in London 2025 (1).JPG', alt: 'CVP in London 2025' },
              { src: '/chicagoFInal.JPG', alt: 'CVP in Chicago' },
            ]}
          />
        </Reveal>
        <div className="wrap">
          <Reveal className="photo-caption" delay={0.2}>
            <div className="tag">Recent itineraries</div>
            <div className="locs">London &apos;25 · Chicago &apos;24 · San Francisco &apos;24 · San Juan &apos;23</div>
          </Reveal>
        </div>
      </section>

      {/* PHOTO: COMMUNITY */}
      <section className="photo-section">
        <div className="wrap">
          <div className="photo-intro">
            <Reveal className="eyebrow">§ 04 &nbsp; A lifelong community</Reveal>
            <Reveal delay={0.1}>
              <h2><em>A lifelong community.</em></h2>
              <p>Whether it is midterm season or finals, you&apos;ll find our members in social pods, dinners, and annual retreats to Upstate New York and the Hamptons. With alumni in venture, entrepreneurship, banking, private equity, consulting, and tech, CVP members become more than classmates.</p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.15}>
          <PhotoStrip
            mirrored
            photos={[
              { src: '/IMG_6677.jpg', alt: 'CVP community' },
              { src: '/IMG_6680.jpg', alt: 'CVP community' },
              { src: '/IMG_7830.jpg', alt: 'CVP community' },
            ]}
          />
        </Reveal>
      </section>

      <MembersSection />

      {/* APPLY */}
      <section className="apply" id="apply">
        <div className="apply-wrap">
          <Reveal className="eyebrow" style={{ paddingTop: 8 }}>§ 06 &nbsp; Admissions</Reveal>
          <Reveal delay={0.08}>
            <h2 className="apply-title">Applications for Analysts and Associates are <em>now open</em></h2>
          </Reveal>

          <div className="apply-body">
            <Reveal delay={0.12}>
              <p>Students across all years are welcome to apply. Analysts are usually students in their first or second years. Associates generally have some knowledge and/or prior experience in the industry and are sophomores and older.</p>
            </Reveal>

            <Reveal delay={0.14}>
              <h3 className="apply-steps-title">Recruiting Timeline</h3>
            </Reveal>

            <StaggerGroup className="apply-steps" delay={0.15}>
              <StaggerItem className="apply-step"><span className="num">i.</span><span className="label">Applications Open</span><span className="date">Thursday, September 3rd at 10:00AM</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">ii.</span><span className="label">Coffee Chats</span><span className="date">Tuesday, September 8th (Through the 16th)</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">iii.</span><span className="label">Activities Fair</span><span className="date">Friday, September 11th from 12:00 - 4:00PM</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">iv.</span><span className="label">Info Session I</span><span className="date">Sunday, September 13th at 4:00PM</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">v.</span><span className="label">Info Session II</span><span className="date">Monday, September 14th at 6:00PM</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">vi.</span><span className="label">Bessemer Investor Panel</span><span className="date">Tuesday, September 15th at 6:00PM</span></StaggerItem>
              <StaggerItem className="apply-step"><span className="num">vii.</span><span className="label">Application Deadline</span><span className="date">Wednesday, September 16th at 11:59PM</span></StaggerItem>
            </StaggerGroup>

            <Reveal delay={0.25}>
              <a
                className="apply-cta"
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Recruitment Open <span aria-hidden="true">&#8599;</span>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="contact-note">
                For press and partnership inquiries, write to <a href="mailto:columbiaventurepartners@gmail.com">columbiaventurepartners@gmail.com</a>.<br />
                Fund inquiries — <a href="https://morningsideventurefund.com" target="_blank" rel="noopener noreferrer">Morningside Venture Fund ↗</a>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
