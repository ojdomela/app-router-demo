import { AlignCenter } from '@/components/align-center'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'
import React from 'react'

type Team = {
  name: string
  score: number
  id: string
}

const TeamsLayout = async ({ children }: { children: React.ReactNode }) => {
  const res = await fetch('http://localhost:3002/teams')

  if (!res.ok) {
    throw new Error('Error fetching teams data!')
  }

  const data: Team[] = await res.json()

  return (
    <AlignCenter>
      <Sidebar>
        {data
          .sort((a, b) => a.score - b.score)
          .map((item) => (
            <p key={item.id}>{item.name} has scored {item.score} points</p>
          ))}
        <Link href="/teams/new">Add a team!</Link>
      </Sidebar>
      {children}
    </AlignCenter>
  )
}

export default TeamsLayout
