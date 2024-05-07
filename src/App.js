import React, { useState, useEffect } from 'react';
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCodepen} from '@fortawesome/free-brands-svg-icons'
import Img from './img.svg'



function App({ val, fun }) {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className='bg-orange-400 bg-opacity-70 p-2 text-2xl font-medium flex justify-between'>
        {/* <div className='px-3'><FontAwesomeIcon icon={faCodepen} /></div> */}
        <div><img src={Img} className='app-logo' alt='logo'/></div>
        <div className='px-2'>CodeCanvas</div>
        <div  className='ml-auto px-3'>
      <button onClick={fun} className='  text-black  hover:text-blue-400 transition-colors duration-300'>Go To Home</button>
      </div>
      </div>

      {/* <div className='flex justify-center items-center gap-4 '>
        <div className='bg-red-300 border-2 border-green-500 '>A</div>
        <div className='bg-red-300 border-2 border-green-500 '>A</div>
        <div className='bg-red-300 border-2 border-green-500 '>Aijijijajauhaihadoiadao <div>huf</div></div>
        <div className='bg-red-300 border-2 border-green-500 '>A</div>
        <div className='bg-red-300 border-2 border-green-500 '>A</div>
      </div> */}
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div >
      <div className='bg-orange-400 text-center border-4 rounded-xl text-xl'>OUTPUT</div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
