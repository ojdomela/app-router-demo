import { Metadata } from 'next'

type TeamData = {
  name: string
  score: number
  matchData: unknown[]
  _uid: string
}

type Params = { params: { id: string } }

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  try {
    const res = await fetch(`http://localhost:3002/teams/${id}`)
    if (!res.ok) {
      throw new Error('Error fetching data!')
    }
    const team: TeamData = await res.json()
  
    return {
      title: team.name,
    }

  } catch (err) {
    return {
      title: 'Error title!'
    }
  }
}

const TeamIdPage = async ({ params: { id } }: Params) => {
  const res = await fetch(`http://localhost:3002/teams/${id}`)

  if (!res.ok) {
    throw new Error('Error fetching data!')
  }

  const team: TeamData = await res.json()

  return (
    <h2>
      {team.name} has played {team.matchData.length} game{team.matchData.length > 1 && 's'}!
    </h2>
  )
}

export default TeamIdPage
