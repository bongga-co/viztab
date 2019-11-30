import React, { Suspense } from 'react'

export const LazyRoute = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  )
}
