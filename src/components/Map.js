import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './locationMarker'
import LocationInfoBox from './locationInfoBox'


const Map = ( { eventData, center, zoom } ) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map( ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo( { id:ev.id, title: ev.title } )} />
        }
        return null
  })  

    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{key:'sua chave da api do google maps, aqui!'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo }/>}
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: -23.561684,
        lng: -46.625378,
    },
    zoom: 4
        
    
}

export default Map
