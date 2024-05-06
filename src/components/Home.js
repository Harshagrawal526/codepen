import React from 'react'

function Home({val,fun}) {
  return (
  //   <div className="welcome-container">
  //   <h1>Welcome to the Code Editor</h1>
  //   <p>Write your HTML, CSS, and JavaScript code and see it in action!</p>
  //   <button onClick={fun}>Let's Code</button>
  // </div>
  
  <div className="home-container mx-auto">
    <div className='home-container-child'>
        <h1 >Welcome Coders!</h1>
        <p>Spark your creativity and build amazing websites with our powerful online code editor.</p>
        <p>Edit and preview your code in HTML, CSS, and JavaScript all in one place.</p>
        <button className='animate-pulse' onClick={fun}>Let's Code</button>
        </div>
    </div>
  )
}

export default Home