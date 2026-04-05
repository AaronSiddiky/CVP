'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const years = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
  '2020-2021',
  '2019-2020',
  '2018-2019',
  '2017-2018',
  '2016-2017',
]

interface TeamMember {
  name: string
  role: string
  photo: string
}

interface YearData {
  exec: TeamMember[]
  analysts: TeamMember[]
}

const teamData: Record<string, YearData> = {
  '2025-2026': {
    exec: [
      { name: 'Jake Lee', role: 'President', photo: '/exec.JPG' },
      { name: 'Justine Ludden', role: 'President / Education', photo: '/exec.JPG' },
      { name: 'Alexander Zhao', role: 'Vice President', photo: '/exec.JPG' },
      { name: 'Jenna Zhao', role: 'President Emeritus', photo: '/exec.JPG' },
      { name: 'Aaron Siddiky', role: 'Communications', photo: '/exec.JPG' },
      { name: 'Patrick Dugan', role: 'Programming', photo: '/exec.JPG' },
      { name: 'Ethan Rhee', role: 'Programming', photo: '/exec.JPG' },
      { name: 'Ryan Chen', role: 'Partnerships', photo: '/exec.JPG' },
      { name: 'Adele Chen', role: 'Treasurer', photo: '/exec.JPG' },
      { name: 'Adrian Lazzi', role: 'Head of Associates', photo: '/exec.JPG' },
      { name: 'Sophia Bassi', role: 'Head of Associates', photo: '/exec.JPG' },
      { name: 'Audrea Chen', role: 'Communications', photo: '/exec.JPG' },
      { name: 'Liam Dorn', role: 'Logistics', photo: '/exec.JPG' },
      { name: 'Jackie Wang', role: 'Community', photo: '/exec.JPG' },
      { name: 'Gabriela Berenholc', role: 'Alumni Relations', photo: '/exec.JPG' },
      { name: 'Ho Jin Jang', role: 'Professional Development', photo: '/exec.JPG' },
    ],
    analysts: [
      { name: 'Shan Then', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Paarth Ambani', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Matthew Eng', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Isabel Lee', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Drew Smith', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Daniel Ah Hee', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Victor Robila', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Matteo Karkour', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Luke Freed', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Leila Cohen', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Shreya Amalapurapu', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Victor Zhu', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Derin Arpacioglu', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Jayantha Kantamneni', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Karim Nabilsi', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Armaan Thakker', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Mrin Chilkoti', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Carmelo Kniska', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Tony He', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Rohan Singh', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Annabel Cui', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Sophia Li', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Naythan Chan', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Jonah Morris', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Annabelle Leung', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Brandon Yao', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Michael Roberson', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Alexa Kayman', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Kirsten Real', role: 'Associate', photo: '/clubwide.JPG' },
      { name: 'Edward Sutton', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Sandy Chen', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Jan Espelien', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Vivian Mao', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Carter Han', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Zaid Ashruf', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Emma Baltrusaitis', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Nikhil Bohra', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Andrew Barth', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Anna Wei', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Ryan Cortenbach', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Caitlyn Tang', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Michelle Xu', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Venice Chalermthanakom', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Sophia Huh', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Alexis Curisaca', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Etienne Rouillard', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Hannah Stone', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Akira Iwata', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Zane Zhao', role: 'Analyst', photo: '/clubwide.JPG' },
      { name: 'Michael Forde', role: 'Analyst', photo: '/clubwide.JPG' },
    ],
  },
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[3/4] group">
      <Image
        src={member.photo}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
        <h3 className="text-sm sm:text-base font-serif-italic font-bold text-white leading-tight">
          {member.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 mt-0.5 font-serif-italic">
          {member.role}
        </p>
      </div>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-italic text-black mb-6 sm:mb-8 mt-12 sm:mt-16">
      {children}
    </h2>
  )
}

export default function TeamPage() {
  const [activeYear, setActiveYear] = useState('2025-2026')

  const data = teamData[activeYear]

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <Header />

      <section className="pt-28 sm:pt-32 md:pt-40 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-italic text-black">
            Members
          </h1>
        </div>
      </section>

      {/* Year Tabs */}
      <section className="pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-2 scrollbar-hide">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-serif-italic whitespace-nowrap shrink-0 transition-colors ${
                  activeYear === year
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {data ? (
            <>
              <SectionHeading>Executive Board</SectionHeading>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {data.exec.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>

              <SectionHeading>Analysts &amp; Associates</SectionHeading>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                {data.analysts.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 sm:py-20 md:py-28">
              <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-16 max-w-lg mx-auto shadow-sm">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-italic text-black mb-3 sm:mb-4">
                  Coming Soon
                </h3>
                <p className="text-sm sm:text-base text-gray-500 font-serif-italic">
                  Member data for {activeYear} will be added soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
