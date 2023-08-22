import { SidebarLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import { Paragraph } from '@/components/typography'
import { StyledLink as Link } from '@/components/link'
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
    <SidebarLayout>
      <Sidebar>
        {data
          .sort((a, b) => a.score - b.score)
          .map((item) => (
            <Paragraph key={item.id}><b>{item.name}</b> has scored <b>{item.score}</b> points</Paragraph>
          ))}
        <Link href="/teams/new">Add a team!</Link>
      </Sidebar>
      {children}
    </SidebarLayout>
  )
}

export default TeamsLayout
