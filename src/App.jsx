import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StatsSection from './components/StatsSection/StatsSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import StepsSection from './components/Steps/Steps'
import { Suspense } from 'react'
import axios from 'axios'

const promiseStats = axios.get('stats.json');
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <StatsSection promiseStats={promiseStats}></StatsSection>
        </Suspense>
        <Suspense>
          <ProductsSection></ProductsSection>
        </Suspense>
        <StepsSection></StepsSection>
      </main>
    </>
  );
}

export default App
