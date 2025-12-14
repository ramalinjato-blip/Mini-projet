import React from 'react'

const Container = ({children}) => {
  return (
    <div className="whiteBackground flex flex-col gap-4 flex-1 sm:px-10 sm:py-5 p-5 overflow-auto">
      {children}
    </div>
  )
}
export default Container
