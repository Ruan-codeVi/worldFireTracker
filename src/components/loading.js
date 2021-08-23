
import spinner from './spinner.gif'

const Loading = () => {
    return (
        <div className='load'>
            <img src={spinner} alt="Loading" />
            <h1>Buscando dados</h1>
        </div>
    )
}

export default Loading
