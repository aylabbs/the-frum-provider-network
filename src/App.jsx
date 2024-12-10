import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
      async function fetchData() {
        try {
          // Fetch data from the Netlify function
          const response = await fetch('/.netlify/functions/data');
          const _data = await response.json();
          setData(_data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

    
    fetchData()
  }, [])
  return (
    <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
        
    </>
  )
}

export default App
