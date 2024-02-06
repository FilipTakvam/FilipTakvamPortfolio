import React from 'react'

function PortfolioImage({src, alt}) {
  return (
    <img 
      src={src} 
      alt={alt}
      style={{display: 'block', width: '100%', height: 'auto', margin: 0}} 
    />
  )
}

export default PortfolioImage