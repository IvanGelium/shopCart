import './globals.css'
import locPin from './assets/locationPin.svg'
import { useState } from 'react'
import { useEffect } from 'react'
import cart from './assets/cart.svg'
import profile from './assets/profile.svg'
import Eye from './components/jsx/eye'
import Cart from './components/jsx/cart'
import Goods from './components/jsx/goods'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'

let array = shuffle([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
])

export default function App() {
  const stateOfCart = useState([])
  let cartSum = stateOfCart[0].reduce((ac, el) => ac + el.count, 0)
  return (
    <BrowserRouter>
      <>
        <Eye top={500} left={100} rotate={40}></Eye>
        <div className='placeholder'>{'<-- Корзина работает'}</div>
        <div className='header'>
          <div className='stripe'>
            <div className='firstLine'>
              <div className='locationContainer'>
                <img className='locIcon' src={locPin} alt='icon' />
                <div className='city'>Voronezh</div>
                <div className='language'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className='hren'>Powered by tits and bits</div>
            </div>
            <div className='secondLine'>
              <div className='onethird'>
                <Link to='/'>
                  <div className='logo'>
                    <h1>Fakedax Market</h1>
                  </div>
                </Link>
              </div>
              <div className='secondThird'>
                <div className='searchBar'>
                  <h3>Поиск...</h3>
                </div>
              </div>
              <div className='thirdThird'>
                <div className='profile unimp'>
                  <img src={profile} alt='icon' />
                  <div>Войти</div>
                </div>
                <Link to='/shopCart'>
                  <div className='shopCart unimp'>
                    {stateOfCart[0].length > 0 ? (
                      <div className='shopCartCount'>
                        <div>{cartSum}</div>
                      </div>
                    ) : null}
                    <img src={cart} alt='icon' />
                    <div>Корзина</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* asd */}
      </>
      <Routes>
        <Route
          path='/'
          element={<Goods array={array} stateOfCart={stateOfCart} />}
        />
        <Route path='/shopCart' element={<Cart stateOfCart={stateOfCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

function shuffle(array) {
  let currentIndex = array.length
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}
