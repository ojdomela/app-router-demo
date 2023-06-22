import React from 'react'

type Team = {
    name: string
    score: number
    _uid: string
}

export default async function TeamsLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('/api/teams')

  if(!res.ok) {
    throw new Error('Error fetching data!')
  }

  const data: Team[] = await res.json()

  return (
    <>
      <aside>
        {{ ...data }
          .sort((a, b) => a.score - b.score)
          .map((item) => (
            <p key={item._uid}>{item.name}</p>
          ))}
      </aside>
      <div>{children}</div>
    </>
  )
}

