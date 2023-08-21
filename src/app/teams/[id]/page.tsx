type ComplexTeam = {
  name: string
  score: number
  matchData: unknown[]
  _uid: string
}

const TeamIdPage = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3002/teams/${id}`)

  if (!res.ok) {
    throw new Error('Error fetching data!')
  }

  const team: ComplexTeam = await res.json()

  return (
    <h2>
      {team.name} has played {team.matchData.length} game{team.matchData.length > 1 && 's'}!
    </h2>
  )
}

export default TeamIdPage
