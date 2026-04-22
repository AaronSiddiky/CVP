'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Reveal, StaggerGroup, StaggerItem } from './Motion'

interface Member { name: string; role: string; photo?: string }

interface YearData {
  exec?: Member[]
  associates?: Member[]
  analysts?: Member[]
  placeholder?: boolean
  founding?: boolean
  note?: string
}

const teamData: Record<string, YearData> = {
  '2026-2027': {
    exec: [
      { name: 'Sophia Bassi',   role: 'President', photo: '/sophiabassi.jpg' },
      { name: 'Patrick Dugan',  role: 'President', photo: '/patrickdugan.jpg' },
    ],
    note: 'Incoming Executive Board yet to be announced.',
  },
  '2025-2026': {
    exec: [
      { name: 'Jake Lee',              role: 'President',               photo: '/handoff/JakeLee.jpg' },
      { name: 'Justine Ludden',        role: 'President · Education',   photo: '/handoff/JustineLudden.jpg' },
      { name: 'Alexander Zhao',        role: 'Vice President',          photo: '/handoff/AlexZhao.jpg' },
      { name: 'Jenna Zhao',            role: 'President Emeritus',      photo: '/handoff/JennaZhao.jpg' },
      { name: 'Aaron Siddiky',         role: 'Partnerships & Communications', photo: '/AaronSiddiky.jpg' },
      { name: 'Patrick Dugan',         role: 'Programming',             photo: '/patrickdugan.jpg' },
      { name: 'Ethan Rhee',            role: 'Programming',             photo: '/handoff/EthanRhee.png' },
      { name: 'Ryan Chen',             role: 'Partnerships',            photo: '/handoff/RyanChen.jpg' },
      { name: 'Adele Chen',            role: 'Treasurer',               photo: '/handoff/Adele Chen.jpg' },
      { name: 'Adrian Lazzi',          role: 'Head of Associates',      photo: '/handoff/AdrianLazzi.jpg' },
      { name: 'Sophia Bassi',          role: 'Head of Associates',      photo: '/sophiabassi.jpg' },
      { name: 'Audrea Chen',           role: 'Communications',          photo: '/handoff/AudreaChen.jpg' },
      { name: 'Liam Dorn',             role: 'Logistics',               photo: '/handoff/LiamDorn.jpg' },
      { name: 'Jackie Wang',           role: 'Community',               photo: '/handoff/JackieWang.jpg' },
      { name: 'Gabriela Berenholc',    role: 'Alumni Relations',        photo: '/handoff/GabrielaBerenholc.jpg' },
      { name: 'Ho Jin Jang',           role: 'Professional Development',photo: '/handoff/HoJinJang.png' },
      { name: 'Jonah Morris',          role: 'Education',               photo: '/handoff/JonahMorris.jpg' },
    ],
    associates: [
      'Shan Then', 'Paarth Ambani', 'Matthew Eng', 'Isabel Lee', 'Drew Smith', 'Daniel Ah Hee',
      'Victor Robila', 'Matteo Karkour', 'Luke Freed', 'Leila Cohen', 'Shreya Amalapurapu',
      'Victor Zhu', 'Derin Arpacioglu', 'Jayantha Kantamneni', 'Karim Nabilsi', 'Armaan Thakker',
      'Mrin Chilkoti', 'Carmelo Kniska', 'Tony He', 'Rohan Singh', 'Annabel Cui', 'Sophia Li',
      'Naythan Chan', 'Jonah Morris', 'Annabelle Leung', 'Brandon Yao', 'Michael Roberson',
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
      { name: 'Ryan Fortani',      role: 'President' },
      { name: 'Kevin Xu',          role: 'President' },
      { name: 'Jake Lee',          role: 'Vice President' },
      { name: 'Christina Xiao',    role: 'Treasurer' },
      { name: 'Brandon Yao',       role: 'Partnerships' },
      { name: 'Luke Freed',        role: 'Programming' },
      { name: 'Jenna Zhao',        role: 'Programming' },
      { name: 'Alicia Zhang',      role: 'Professional Development' },
      { name: 'Claire Graham',     role: 'Alumni Relations' },
      { name: 'Alexander Zhao',    role: 'Research' },
      { name: 'Adrian Lazzi',      role: 'Research' },
      { name: 'Kirsten Real',      role: 'Communications' },
      { name: 'Michael Roberson',  role: 'Communications' },
      { name: 'Raunak Agrawal',    role: 'Logistics' },
      { name: 'Ho Jin Jang',       role: 'Community' },
    ],
  },
  '2023-2024': {
    exec: [
      { name: 'Anjali Barnabas',  role: 'President' },
      { name: 'Lucy Chen',        role: 'President' },
      { name: 'Ryan Fortani',     role: 'Vice President' },
      { name: 'Alexis Aiudi',     role: 'Late Stage Lead' },
      { name: 'Alicia Zhang',     role: 'Logistics' },
      { name: 'Allison Lin',      role: 'Director of Programming' },
      { name: 'Christina Xiao',   role: 'Treasurer' },
      { name: 'Christine Kim',    role: 'Director of Professional Development' },
      { name: 'Claire Graham',    role: 'Director of Alumni Relations' },
      { name: 'Helena Yang',      role: 'Logistics' },
      { name: 'Kevin Xu',         role: 'Director of Research' },
      { name: 'Renee Jiang',      role: 'Early Stage Lead' },
      { name: 'Tony He',          role: 'Director of Partnerships' },
      { name: 'Taylor Gonsalez',  role: 'Director of Community' },
      { name: 'Veni Dole',        role: 'Director of Communications' },
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
        <div className="member-name">{member.name}</div>
        <div className="member-role">{member.role}</div>
        <div className="member-meta">{leader ? 'Executive Leadership' : 'Executive Board'}</div>
      </div>
    </motion.div>
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
            {data.placeholder ? (
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
