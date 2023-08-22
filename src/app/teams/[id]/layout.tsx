import React from 'react'

type Props = {
  children: React.ReactNode
  params: {
    id: string
  }
}

type Team = {
  name: string
  score: number
  id: string
}

const TeamIdLayout = async ({ children, params: { id } }: Props) => {
  const res = await fetch('http://localhost:3002/teams')

  if (!res.ok) {
    console.error("Response", res)
    throw new Error('Error fetching data!')
  }

  const data: Team[] = await res.json()

  let teamString = 'Team not found!'

  const favoriteTeam = data.find((team) => String(team.id) === id)

  if (favoriteTeam) {
    teamString = `Go Team ${favoriteTeam.name}`
  }

  return (
    <div>
      <h1>{teamString}</h1>
      <div>{children}</div>
    </div>
  )
}

export default TeamIdLayout
