import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../index.css'

export default function Map({ customerLat, customerLong }) {
    const [lng, setLng] = useState(112.68536277903817)
    const [lat, setLat] = useState(-7.44213259649106,)
    const [zoom, setZoom] = useState(10)

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYWQtYXp6YW0iLCJhIjoiY2t0cWlma3NnMHIwMTMxbDg4dXA2ZW1jZyJ9.BTfzLHBkKJYESMjP__TykA'
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom,
            center: [lng, lat]
        })

        const marker = new mapboxgl.Marker()
            .setLngLat([112.66826372765426, -7.416225668253649])
            .setPopup(new mapboxgl.Popup({ offset: 30 }))
            .addTo(map)
        const marker2 = new mapboxgl.Marker({ color: 'black' })
            .setLngLat([112.67188768323943, -7.4210047319738655])
            .setPopup(new mapboxgl.Popup({ offset: 30 }))
            .addTo(map)
    }, [])

    return (
        <>
            <div id="map" className="h-52">

            </div>
        </>
    )

}