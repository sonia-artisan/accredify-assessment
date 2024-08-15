import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center p-10 gap-6 rounded-lg border-border border-solid border-[1px]'>{children}</div>
  )
}

export default Container