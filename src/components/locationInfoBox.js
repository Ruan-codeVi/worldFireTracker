

const locationInfoBox = ({info}) => {
    return (
        <div className='location-info'>
            <h2>Informações do Local</h2>
            <ul>
                <li>ID: <strong>{info.id }</strong></li>
                <li>Local: <strong>{info.title }</strong></li>
            </ul>
            
        </div>
    )
}
export default locationInfoBox;