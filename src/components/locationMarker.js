import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const locationMarker = ({lat, lng, onClick}) => {
    return (
        <div className='location-Marker' onClick={onClick}>
            <Icon icon={locationIcon} className='location-icon'/>
        </div>
    )
}

export default locationMarker
