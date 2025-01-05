import React from 'react'

const OrangeGradientBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background: `
          linear-gradient(to bottom, 
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 15%,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0) 45%,
            rgba(265, 165, 0, 0.2) 60%,
            rgba(284, 165, 0, 0.7) 75%
          )
        `,
      }}
    />
  )
}

export default OrangeGradientBackground

