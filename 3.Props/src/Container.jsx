import React from 'react'

function Container({children}) {
  return (
    <div>
      Container Companenti Children props
      <hr />
      {children}
    </div>
  )
}

export default Container