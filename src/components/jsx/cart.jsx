import '../../globals.css'
import '../styles/cart.css'

export default function Cart() {
    return (
        <div className='cartPage'>
            <div className='stripeCart'>
                <div className='Cart'>
                    <div className='infoCart'>
                        <div className='goodsCart'>
                            <div className='cartCard'></div>
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
