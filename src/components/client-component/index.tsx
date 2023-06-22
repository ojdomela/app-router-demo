'use client'
import React from 'react'
import ServerComponent from '../server-component'

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ServerComponent /> {/* invalid */}
    </>
  )
}
