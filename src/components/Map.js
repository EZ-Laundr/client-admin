import mapboxgl from 'mapbox-gl'
import { useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../index.css'

export default function Map({ customerLat, customerLong }) {
    const [lng, setLng] = useState(105.051187)
    const [lat, setLat] = useState(-5.370346)
    const [zoom, setZoom] = useState(10)
    console.log(customerLat, customerLong, '<<<<< ini di map')
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYWQtYXp6YW0iLCJhIjoiY2t0cWlma3NnMHIwMTMxbDg4dXA2ZW1jZyJ9.BTfzLHBkKJYESMjP__TykA'
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom,
            center: [lng, lat]
        })

        const marker = new mapboxgl.Marker()
            .setLngLat([105.051187, -5.370346])
            .setPopup(new mapboxgl.Popup({ offset: 30 }))
            .addTo(map)
        const marker2 = new mapboxgl.Marker({ color: 'black' })
            .setLngLat([customerLong, customerLat])
            .setPopup(new mapboxgl.Popup({ offset: 30 }))
            .addTo(map)
    }, [])

    return (
        <>
            <div id="map" className="h-60 w-full">

            </div>
        </>
    )

}