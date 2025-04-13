import Card from './card.jsx'

export default function Goods({ array }) {
    return (
        <div className='goodsGrid'>
            <div className='stripe'>
                <div className='aGrid'>
                    {array.map((el) => (
                        <Card id={`${el}`}></Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
