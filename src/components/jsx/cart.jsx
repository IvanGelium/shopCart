import '../../globals.css'
import '../styles/cart.css'
import '../jsx/cartCard'
import CartCard from '../jsx/cartCard'

export default function Cart(stateOfCart) {
  console.log(stateOfCart.stateOfCart[0].length)
  if (stateOfCart.stateOfCart[0].length < 1) {
    return <div className='sowwy'>sowwy</div>
  }
  return (
    <div className='cartPage'>
      <div className='stripeCart'>
        <div className='Cart'>
          <div className='infoCart'>
            <div className='goodsCart'>
              {stateOfCart.stateOfCart[0].map((el) => (
                <CartCard key={el} id={el} stateOfCart={stateOfCart}></CartCard>
              ))}
            </div>
            <div className='delivCart'></div>
            <div className='payAndInfoCarr'></div>
          </div>
          <div className='sumCart'></div>
        </div>
        <div className='adv'></div>
        <div className='footer'></div>
      </div>
    </div>
  )
}
