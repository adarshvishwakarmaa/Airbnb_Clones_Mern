import React, { createContext, useState } from 'react'
export const authDataContext = createContext()



function AuthContext({children}){
    let serverUrl = "https://airbnb-backend-7o3o.onrender.com"
    const [loading, setLoading] = useState(false);

   let value={
        serverUrl,
        loading, setLoading
    }
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
