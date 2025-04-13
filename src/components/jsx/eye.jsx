import '../styles/eye.css'

export default function Eye({ top, left, rotate }) {
    return (
        <div
            className='wholeEye'
            style={{ top: top, left: left, rotate: rotate + 'deg' }}
        >
            <div className='eye'>
                <div className='white'>
                    <div className='apple'>
                        <div className='eyesphere'>
                            <div className='blick'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='eyeLashes' id='one'></div>
            <div className='eyeLashes' id='two'></div>
            <div className='eyeLashes' id='three'></div>
        </div>
    )
}
