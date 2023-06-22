import { useRouter } from 'next/router'
import React from 'react'

type Team = {
  name: string
  score: number
  _uid: string
}

export default async function TeamIdLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('/api/teams')

  if (!res.ok) {
    throw new Error('Error fetching data!')
  }

  const data: Team[] = await res.json()

  const {
    query: { id },
  } = useRouter()

  let teamString = 'Team not found!'

  const favoriteTeam = data.find(team => team._uid === id)

  if(favoriteTeam) {
    teamString = `Go Team ${favoriteTeam.name}`
  }

  return (
    <>
      <h1>{teamString}</h1>
      <div>{children}</div>
    </>
  )
}

