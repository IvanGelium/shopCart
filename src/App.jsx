import './globals.css'
import locPin from './assets/locationPin.svg'

import cart from './assets/cart.svg'
import profile from './assets/profile.svg'
import Eye from './components/jsx/eye'
import Cart from './components/jsx/cart'
import Goods from './components/jsx/goods'

export default function App() {
    const array = shuffle([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
    return (
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
                            <div className='logo'>
                                <h1>Fakedax Market</h1>
                            </div>
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
                            <div className='shopCart unimp'>
                                <img src={cart} alt='icon' />
                                <div>Корзина</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Goods array={array}></Goods>
            <Cart></Cart>
        </>
    )
}

function shuffle(array) {
    let currentIndex = array.length

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }
    return array
}
