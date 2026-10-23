import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import StatsSection from './components/StatsSection/StatsSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import StepsSection from './components/Steps/Steps'
import { Suspense, useState } from 'react'
import axios from 'axios'

const promiseStats = axios.get('stats.json');
function App() {
  const [cardCount, setCardCount] = useState([]);
  // console.log(cardCount)
  const handleCount = (product) => {
    const addProducts = [...cardCount,product];
    setCardCount(addProducts);
    // console.log(cardCount)
  };
  return (
    <>
      <header>
        <Navbar cardCount={cardCount}></Navbar>
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
          <ProductsSection
            cardCount={cardCount}
            setCardCount={setCardCount}
            handleCount={handleCount}
          ></ProductsSection>
        </Suspense>
        <StepsSection></StepsSection>
      </main>
    </>
  );
}

export default App
