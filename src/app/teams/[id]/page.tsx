import { useRouter } from 'next/router'
import React from 'react'

type ComplexTeam = {
  name: string
  score: number
  matchData: unknown[]
  _uid: string
}

export default async function TeamIdPage() {
  const {
    query: { id },
  } = useRouter()

  const res = await fetch(`/api/teams/${id}`)

  if (!res.ok) {
    throw new Error('Error fetching data!')
  }

  const team: ComplexTeam = await res.json()

  return (
    <p>
      {team.name} has played {team.matchData.length} games!
    </p>
  )
}

