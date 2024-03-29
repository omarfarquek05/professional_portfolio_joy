import React from 'react'

const Header = ({query, category}) => {

    if(query && category) {
        return (
          <h1 className="heading3 self-start">
            Search results for "{query}" in <span className="capitalize">{category}</span>
          </h1>
        )
      }
    
      if(query) {
        return (
          <h1 className="heading3 self-start">
            Search results for "{query}"
          </h1>
        )
      }
    
      if(category) {
        return (
          <h1 className="heading3 self-start">
            <span className="capitalize">{category}</span>
          </h1>
        )
      }
    
      return (
        <h1 className="heading3 self-start">No Results</h1>
      )
  
}

export default Header