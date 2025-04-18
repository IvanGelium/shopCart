import Card from './card.jsx'

export default function Goods({ array, stateOfCart }) {
  let i = 0
  return (
    <div className='goodsGrid'>
      <div className='stripe'>
        <div className='aGrid'>
          {array.map((el) => (
            <Card key={el} id={el} stateOfCart={stateOfCart}></Card>
          ))}
        </div>
      </div>
    </div>
  )
}
