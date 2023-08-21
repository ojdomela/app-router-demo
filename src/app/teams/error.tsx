'use client'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div>
    <h2>Something went wrong!</h2>
    <h3>Error message: {error.message}</h3>
    <button onClick={() => reset()}>Try again</button>
  </div>
)

export default Error
