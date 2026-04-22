'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Reveal, StaggerGroup, StaggerItem } from './Motion'

interface Member { name: string; role: string; photo?: string; linkedin?: string }
interface AlumniMember { name: string; cohort?: number; label?: string; linkedin?: string }

interface YearData {
  exec?: Member[]
  associates?: Member[]
  analysts?: Member[]
  alumni?: AlumniMember[]
  placeholder?: boolean
  founding?: boolean
  note?: string
}

const teamData: Record<string, YearData> = {
  '2026-2027': {
    exec: [
      { name: 'Sophia Bassi',  role: 'President', photo: '/sophiabassi.jpg',   linkedin: 'https://www.linkedin.com/in/sophia-bassi/' },
      { name: 'Patrick Dugan', role: 'President', photo: '/patrickdugan.jpg',  linkedin: 'https://www.linkedin.com/in/patrick-dugan-0435a695/' },
    ],
    note: 'Incoming Executive Board yet to be announced.',
  },
  '2025-2026': {
    exec: [
      { name: 'Jake Lee',           role: 'President',                    photo: '/handoff/JakeLee.jpg',          linkedin: 'https://www.linkedin.com/in/lee-jake/' },
      { name: 'Justine Ludden',     role: 'President · Education',        photo: '/handoff/JustineLudden.jpg',    linkedin: 'https://www.linkedin.com/in/justine-ludden-55b621218/' },
      { name: 'Alexander Zhao',     role: 'Vice President',               photo: '/handoff/AlexZhao.jpg',         linkedin: 'https://www.linkedin.com/in/alexszhao/' },
      { name: 'Jenna Zhao',         role: 'President Emeritus',           photo: '/handoff/JennaZhao.jpg',        linkedin: 'https://www.linkedin.com/in/jenna-zhao/' },
      { name: 'Aaron Siddiky',      role: 'Partnerships & Communications',photo: '/AaronSiddiky.jpg',             linkedin: 'https://www.linkedin.com/in/aaronsiddiky' },
      { name: 'Patrick Dugan',      role: 'Programming',                  photo: '/patrickdugan.jpg',             linkedin: 'https://www.linkedin.com/in/patrick-dugan-0435a695/' },
      { name: 'Ethan Rhee',         role: 'Programming',                  photo: '/handoff/EthanRhee.png',        linkedin: 'https://www.linkedin.com/in/ethan-rhee/' },
      { name: 'Ryan Chen',          role: 'Partnerships',                 photo: '/IMG_8928.png',                 linkedin: 'https://www.linkedin.com/in/ryan-chen-9b678a32b/' },
      { name: 'Adele Chen',         role: 'Treasurer',                    photo: '/handoff/Adele Chen.jpg',       linkedin: 'https://www.linkedin.com/in/adele--chen/' },
      { name: 'Adrian Lazzi',       role: 'Head of Associates',           photo: '/handoff/AdrianLazzi.jpg',      linkedin: 'https://www.linkedin.com/in/adrianlazzi/' },
      { name: 'Sophia Bassi',       role: 'Head of Associates',           photo: '/sophiabassi.jpg',              linkedin: 'https://www.linkedin.com/in/sophia-bassi/' },
      { name: 'Audrea Chen',        role: 'Communications',               photo: '/handoff/AudreaChen.jpg',       linkedin: 'https://www.linkedin.com/in/audrea-chen/' },
      { name: 'Liam Dorn',          role: 'Logistics',                    photo: '/handoff/LiamDorn.jpg',         linkedin: 'https://www.linkedin.com/in/liam-dorn/' },
      { name: 'Jackie Wang',        role: 'Community',                    photo: '/handoff/JackieWang.jpg',       linkedin: 'https://www.linkedin.com/in/jackie-wang2166/' },
      { name: 'Gabriela Berenholc', role: 'Alumni Relations',             photo: '/handoff/GabrielaBerenholc.jpg',linkedin: 'https://www.linkedin.com/in/gabriela-berenholc-b69383192/' },
      { name: 'Ho Jin Jang',        role: 'Professional Development',     photo: '/handoff/HoJinJang.png',        linkedin: 'https://www.linkedin.com/in/jang-hojin/' },
      { name: 'Jonah Morris',       role: 'Education',                    photo: '/handoff/JonahMorris.jpg',      linkedin: 'https://www.linkedin.com/in/jonahgmorris/' },
    ],
    associates: [
      'Shan Then', 'Paarth Ambani', 'Matthew Eng', 'Isabel Lee', 'Drew Smith', 'Daniel Ah Hee',
      'Victor Robila', 'Matteo Karkour', 'Luke Freed', 'Leila Cohen', 'Shreya Amalapurapu',
      'Victor Zhu', 'Derin Arpacioglu', 'Jayantha Kantamneni', 'Karim Nabilsi', 'Armaan Thakker',
      'Mrin Chilkoti', 'Carmelo Kniska', 'Tony He', 'Rohan Singh', 'Annabel Cui', 'Sophia Li',
      'Naythan Chan', 'Annabelle Leung', 'Brandon Yao', 'Michael Roberson',
      'Alexa Kayman', 'Kirsten Real',
    ].map(n => ({ name: n, role: 'Associate' })),
    analysts: [
      'Edward Sutton', 'Sandy Chen', 'Jan Espelien', 'Vivian Mao', 'Carter Han', 'Zaid Ashruf',
      'Emma Baltrusaitis', 'Nikhil Bohra', 'Andrew Barth', 'Anna Wei', 'Ryan Cortenbach',
      'Caitlyn Tang', 'Michelle Xu', 'Venice Chalermthanakom', 'Sophia Huh', 'Alexis Curisaca',
      'Etienne Rouillard', 'Hannah Stone', 'Akira Iwata', 'Zane Zhao', 'Michael Forde',
    ].map(n => ({ name: n, role: 'Analyst' })),
  },
  '2024-2025': {
    exec: [
      { name: 'Ryan Fortani',     role: 'President',               photo: '/ryanfortani.jpg',    linkedin: 'https://www.linkedin.com/in/ryan-fortani/' },
      { name: 'Kevin Xu',         role: 'President',               photo: '/KevinXu.jpg',         linkedin: 'https://www.linkedin.com/in/kevin-k-xu/' },
      { name: 'Jake Lee',         role: 'Vice President',          photo: '/handoff/JakeLee.jpg', linkedin: 'https://www.linkedin.com/in/lee-jake/' },
      { name: 'Christina Xiao',   role: 'Treasurer',               photo: '/christinaxiao.jpg',   linkedin: 'https://www.linkedin.com/in/christinayxiao/' },
      { name: 'Brandon Yao',      role: 'Partnerships',            photo: '/brandonYao.jpg',          linkedin: 'https://www.linkedin.com/in/brandonyao/' },
      { name: 'Luke Freed',       role: 'Programming',            photo: '/LukeFreed.jpg',           linkedin: 'https://www.linkedin.com/in/lukefreed/' },
      { name: 'Jenna Zhao',       role: 'Programming',            photo: '/handoff/JennaZhao.jpg',   linkedin: 'https://www.linkedin.com/in/jenna-zhao/' },
      { name: 'Alicia Zhang',     role: 'Professional Development',photo: '/AliciaZhang.jpg',        linkedin: 'https://www.linkedin.com/in/aliciatzhang/' },
      { name: 'Claire Graham',    role: 'Alumni Relations',       photo: '/ClaireGraham.jpg',        linkedin: 'https://www.linkedin.com/in/claire-graham-727b681b0/' },
      { name: 'Alexander Zhao',   role: 'Research',               photo: '/handoff/AlexZhao.jpg',    linkedin: 'https://www.linkedin.com/in/alexszhao/' },
      { name: 'Adrian Lazzi',     role: 'Research',               photo: '/handoff/AdrianLazzi.jpg', linkedin: 'https://www.linkedin.com/in/adrianlazzi/' },
      { name: 'Kirsten Real',     role: 'Communications',         photo: '/KirstenReal.jpg',         linkedin: 'https://www.linkedin.com/in/kirstenreal/' },
      { name: 'Michael Roberson', role: 'Communications',         photo: '/MichaelRoberson.png',     linkedin: 'https://www.linkedin.com/in/michael-h-roberson/' },
      { name: 'Raunak Agrawal',   role: 'Logistics',              photo: '/RaunakAgrawal.jpg',       linkedin: 'https://www.linkedin.com/in/raunak--agrawal/' },
      { name: 'Ho Jin Jang',      role: 'Community',              photo: '/handoff/HoJinJang.png',   linkedin: 'https://www.linkedin.com/in/jang-hojin/' },
    ],
  },
  '2023-2024': {
    exec: [
      { name: 'Anjali Barnabas',  role: 'President',                       photo: '/AnjaliBarnabas.jpg',   linkedin: 'https://www.linkedin.com/in/anjalibarnabas/' },
      { name: 'Lucy Chen',        role: 'President',                       photo: '/LucyChen.png',         linkedin: 'https://www.linkedin.com/in/lucychen16/' },
      { name: 'Ryan Fortani',     role: 'Vice President',                  photo: '/ryanfortani.jpg',      linkedin: 'https://www.linkedin.com/in/ryan-fortani/' },
      { name: 'Alexis Aiudi',     role: 'Late Stage Lead',                 photo: '/AlexisAiudi.jpg',      linkedin: 'https://www.linkedin.com/in/alexis-aiudi/' },
      { name: 'Alicia Zhang',     role: 'Logistics',                       photo: '/AliciaZhang.jpg',      linkedin: 'https://www.linkedin.com/in/aliciatzhang/' },
      { name: 'Allison Lin',      role: 'Director of Programming',         photo: '/AllisonLin.png',       linkedin: 'https://www.linkedin.com/in/yun-tzu-allison-lin/' },
      { name: 'Christina Xiao',   role: 'Treasurer',                       photo: '/christinaxiao.jpg',    linkedin: 'https://www.linkedin.com/in/christinayxiao/' },
      { name: 'Christine Kim',    role: 'Director of Professional Development', photo: '/ChristineKim.jpg', linkedin: 'https://www.linkedin.com/in/christine-kim-0208/' },
      { name: 'Claire Graham',    role: 'Director of Alumni Relations',    photo: '/ClaireGraham.jpg',     linkedin: 'https://www.linkedin.com/in/claire-graham-727b681b0/' },
      { name: 'Helena Yang',      role: 'Logistics',                       photo: '/HelenaYang.jpg',       linkedin: 'https://www.linkedin.com/in/helenayang03/' },
      { name: 'Kevin Xu',         role: 'Director of Research',            photo: '/KevinXu.jpg',          linkedin: 'https://www.linkedin.com/in/kevin-k-xu/' },
      { name: 'Renee Jiang',      role: 'Early Stage Lead',                photo: '/ReneeJiang.jpg',       linkedin: 'https://www.linkedin.com/in/renee-jiang7/' },
      { name: 'Tony He',          role: 'Director of Partnerships',        photo: '/TonyHe.jpg',           linkedin: 'https://www.linkedin.com/in/tonyhenewyork/' },
      { name: 'Taylor Gonsalez',  role: 'Director of Community',           photo: '/TaylorGonsalez.jpg',   linkedin: 'https://www.linkedin.com/in/taylorrosegonsalez/' },
      { name: 'Veni Dole',        role: 'Director of Communications',      photo: '/VeniDole.jpg',         linkedin: 'https://www.linkedin.com/in/krishnaveni-dole/' },
    ],
  },
  'Alumni': {
    alumni: [
      { name: 'Cynthia Hajal',           cohort: 2016 },
      { name: 'Bradley Miles',     cohort: 2017, label: 'Founder · Founding President', linkedin: 'https://www.linkedin.com/in/bmiles1/' },
      { name: 'Haidar Jamal-Baba', cohort: 2017, label: 'Co-Founder',                    linkedin: 'https://www.linkedin.com/in/haidar-jamal-baba-a208b49b/' },
      { name: 'Oscar Alvarez',     cohort: 2017, label: 'Co-Founder',                    linkedin: 'https://www.linkedin.com/in/oscar-alvarez-1111oai/' },
      { name: 'Daniela Lopez-Salcedo',   cohort: 2017 },
      { name: 'Kevin Chu',               cohort: 2018 },
      { name: 'Dan Briere',              cohort: 2018 },
      { name: 'Leena Dai',               cohort: 2018 },
      { name: 'Rosalie Froom',           cohort: 2018 },
      { name: 'Sidrath Singh',           cohort: 2018 },
      { name: 'Shyamolie Biyani',        cohort: 2018 },
      { name: 'Roma Patel',              cohort: 2018 },
      { name: 'Paul Tung',               cohort: 2019 },
      { name: 'George Jiang',            cohort: 2019 },
      { name: 'Sameer Jain',             cohort: 2019 },
      { name: 'Kevin Wu',                cohort: 2019 },
      { name: 'Cesar',                   cohort: 2019 },
      { name: 'Shaan Fye',               cohort: 2020 },
      { name: 'Caroline Teunissen',      cohort: 2020 },
      { name: 'Rishi Shah',              cohort: 2020 },
      { name: 'Michael Retchin',         cohort: 2020 },
      { name: 'Francesco Grechi',        cohort: 2020 },
      { name: 'Pushan Hinduja',          cohort: 2020 },
      { name: 'Maya Matthews',           cohort: 2020 },
      { name: 'David Carratu',           cohort: 2020 },
      { name: 'Maria Kogan',             cohort: 2020 },
      { name: 'Neil Agarwal',            cohort: 2020 },
      { name: 'Oliver Wang',             cohort: 2020 },
      { name: 'Vera Wang',               cohort: 2021 },
      { name: 'Isaac Ick',               cohort: 2021 },
      { name: 'Peter Rutkowski',         cohort: 2021 },
      { name: 'Shefali Kumar',           cohort: 2021 },
      { name: 'Aurnov Chattopadhyay',    cohort: 2021 },
      { name: 'Michael Wang',            cohort: 2021 },
      { name: 'Connie Crighton',         cohort: 2022 },
      { name: 'Tony Ryou',               cohort: 2022 },
      { name: 'Michelle Tang',           cohort: 2022 },
      { name: 'Noah Sadik',              cohort: 2022 },
      { name: 'Karen Shi',               cohort: 2022 },
      { name: 'Hannah Fenlon',           cohort: 2022 },
      { name: 'Michael Wang',            cohort: 2023 },
      { name: 'Keshav Menon',            cohort: 2023 },
      { name: 'Rachel Sacks',            cohort: 2023 },
      { name: 'Yekaterina Alferova',     cohort: 2023 },
      { name: 'Jeren Wei',               cohort: 2023 },
      { name: 'Nandini Talwar',          cohort: 2024 },
    ],
  },
}

const years = Object.keys(teamData)

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function isLeader(role: string) {
  const lower = role.toLowerCase()
  return (
    lower.includes('president') ||
    lower.includes('vice president') ||
    lower.includes('vice-president') ||
    lower.includes('emeritus')
  )
}

function MemberCard({ member, leader, index }: { member: Member; leader: boolean; index: number }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={`exec-card${leader ? ' leader' : ''}${member.photo ? ' has-photo' : ''}`}
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      animate={reduced ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.035, 0.8),
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      <div className="member-tile">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 820px) 50vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : (
          <span className="member-initials">{initials(member.name)}</span>
        )}
      </div>
      <div className="member-info">
        <div className="member-name-row">
          <div className="member-name">{member.name}</div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="member-linkedin"
              aria-label={`${member.name} on LinkedIn`}
              onClick={e => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
        <div className="member-role">{member.role}</div>
        <div className="member-meta">{leader ? 'Executive Leadership' : 'Executive Board'}</div>
      </div>
    </motion.div>
  )
}

function AlumniView({ alumni }: { alumni: AlumniMember[] }) {
  // Group by cohort, unknown at end
  const grouped: Record<string, AlumniMember[]> = {}
  for (const a of alumni) {
    const key = a.cohort ? String(a.cohort) : 'unknown'
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(a)
  }
  const sortedKeys = Object.keys(grouped)
    .filter(k => k !== 'unknown')
    .sort((a, b) => Number(a) - Number(b))

  return (
    <div className="alumni-block">
      {sortedKeys.map(key => (
        <div key={key} className="alumni-cohort">
          <div className="alumni-cohort-head">
            <span className="eyebrow">Class of {key}</span>
          </div>
          <div className="alumni-list">
            {grouped[key].map(a => (
              <div key={a.name} className="alumni-row">
                <div className="alumni-name-wrap">
                  <span className="alumni-name">{a.name}</span>
                  {a.label && <span className="alumni-label">{a.label}</span>}
                </div>
                {a.linkedin && (
                  <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="alumni-linkedin" aria-label={`${a.name} on LinkedIn`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const MembersSection = () => {
  const [activeYear, setActiveYear] = useState('2026-2027')
  const data = teamData[activeYear]

  const leaders = data.exec?.filter(m => isLeader(m.role)) ?? []
  const rest = data.exec?.filter(m => !isLeader(m.role)) ?? []

  return (
    <section className="members" id="members">
      <div className="wrap">
        <div className="members-intro">
          <Reveal className="eyebrow">§ 05 &nbsp; Members</Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title">The <em>partnership</em>, by class year.</h2>
          </Reveal>
          <Reveal
            delay={0.14}
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-soft)',
              paddingTop: 12,
              maxWidth: '42ch',
            }}
          >
            A standing roster of the current cohort and the classes preceding it. Alumni remain affiliated and regularly participate in diligence, mentorship, and the annual recruiting process.
          </Reveal>
        </div>

        <Reveal>
          <div className="year-tabs">
            {years.map(y => (
              <button
                key={y}
                className={`year-tab${y === activeYear ? ' active' : ''}`}
                onClick={() => setActiveYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {data.alumni ? (
              <AlumniView alumni={data.alumni} />
            ) : data.placeholder ? (
              <div className="empty-state">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: data.founding
                      ? 'The <em>founding</em> cohort.'
                      : 'Archive in <em>progress</em>.',
                  }}
                />
                <p>
                  Member data for the {activeYear} cohort {data.founding ? 'will be restored from our archives shortly.' : 'will be published shortly.'}
                </p>
              </div>
            ) : (
              <>
                {data.exec && (
                  <div className="exec-block">
                    <div className="exec-head">
                      <div className="eyebrow">Executive Board · {activeYear}</div>
                      <h3>The <em>partnership.</em></h3>
                    </div>
                    <div className="exec-grid">
                      {leaders.map((m, i) => (
                        <MemberCard key={`leader-${m.name}-${m.role}`} member={m} leader index={i} />
                      ))}
                      {rest.map((m, i) => (
                        <MemberCard key={`rest-${m.name}-${m.role}`} member={m} leader={false} index={leaders.length + i} />
                      ))}
                    </div>
                    {data.note && (
                      <p className="exec-note">{data.note}</p>
                    )}
                  </div>
                )}

                {data.associates && (
                  <div className="associates-block">
                    <div className="assoc-head">
                      <div className="eyebrow">Associates</div>
                      <h3>Second-year <em>associates.</em></h3>
                      <span className="assoc-count">{data.associates.length} members</span>
                    </div>
                    <StaggerGroup className="assoc-list" delay={0.05}>
                      {data.associates.map(m => (
                        <StaggerItem key={m.name} className="assoc-row">
                          <span className="assoc-name">{m.name}</span>
                          <span className="assoc-role">{m.role}</span>
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </div>
                )}

                {data.analysts && (
                  <div className="associates-block">
                    <div className="assoc-head">
                      <div className="eyebrow">Analysts</div>
                      <h3>Incoming <em>analyst</em> class.</h3>
                      <span className="assoc-count">{data.analysts.length} members</span>
                    </div>
                    <StaggerGroup className="assoc-list" delay={0.05}>
                      {data.analysts.map(m => (
                        <StaggerItem key={m.name} className="assoc-row">
                          <span className="assoc-name">{m.name}</span>
                          <span className="assoc-role">{m.role}</span>
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default MembersSection
