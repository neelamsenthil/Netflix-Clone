import React, { createContext } from 'react'
export const pageContext = createContext()


const Context = (props) => {
  const contextValue = {
  }
  return (
    <div>
      <pageContext.Provider value={contextValue}>
        {props.children}

      </pageContext.Provider>

    </div>
  )
}

export default Context