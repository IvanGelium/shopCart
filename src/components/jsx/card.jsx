import '../styles/card.css'
import '../../globals.css'
import verif from '../../assets/verPin.svg'
import sale from '../../assets/sale.svg'
import star from '../../assets/star.svg'
import add from '../../assets/cartPlus.svg'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Card({ id }) {
    const [error, setError] = useState(null)
    const [load, setLoad] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchDataForPosts = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                )
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`)
                }
                let postsData = await response.json()
                setData(postsData)
                setError(null)
            } catch (err) {
                setError(err.message)
                console.log(err)
                setData(null)
            } finally {
                setLoad(false)
            }
        }

        fetchDataForPosts()
    }, [])

    return (
        <div className='card' key={data ? data.id : null}>
            <div className='imgContainer'>
                <div className='addBtn'>
                    <img src={add} alt='icon' />
                </div>
                {load ? (
                    <div className='loader'>
                        <div className='turner'></div>
                    </div>
                ) : (
                    <div className='hm'>
                        <img
                            className='img'
                            src={data.image}
                            alt='img'
                            height={200 + 'px'}
                        />
                    </div>
                )}
            </div>
            <div className='infoContainer'>
                <div className='priceContainer'>
                    <div className='salePrice'>
                        <img src={sale} alt='icon' />
                        <div className='price'>
                            <h2>
                                {data ? spaces(realPrice(data.price)) : null}
                            </h2>
                        </div>
                    </div>
                    <div className='fakePrice'>
                        <h2>{data ? procent(realPrice(data.price)) : null}</h2>
                    </div>
                </div>
                <div className='fake'>
                    <p>c FM кошелька</p>
                </div>
                <div className='nameContainer'>
                    <img className='icon verif' src={verif} alt='icon' />
                    <div className='name'>{data ? data.title : null}</div>
                </div>
                <div className='unimp category'>
                    <div className='div'>{data ? data.category : null}</div>
                </div>
                <div className='ratingContainer'>
                    <img src={star} alt='icon' />
                    <div className='rate'>{rate()}</div>
                    <div className='unimp'>•</div>
                    <div className='unimp'>{howMuch()} оценок</div>
                </div>
            </div>
        </div>
    )
}

function realPrice(int) {
    return Math.ceil(int * 100)
}

function procent(int) {
    return spaces(int + Math.ceil(int * Math.random()))
}

function rate() {
    return Math.ceil(Math.random() * 4) + Math.ceil(Math.random() * 10) / 10
}

function howMuch() {
    return Math.ceil(Math.random() * (Math.random() * 1000))
}

function spaces(int) {
    return String(int).replace(/(.)(?=(\d{3})+$)/g, '$1 ') + ' ₽'
    // "1,234,567,890"
}
