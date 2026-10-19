import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StatsSection from './components/StatsSection/StatsSection'
import { Suspense } from 'react'
import axios from 'axios'

const promiseStats = axios.get('stats.json');
function App() {
  console.log(promiseStats)
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <StatsSection promiseStats={promiseStats}></StatsSection>
        </Suspense>
      </main>
    </>
  );
}

export default App
