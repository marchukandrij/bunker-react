import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const BunkerMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 49.5560431, lng: 25.5959608 }}>
    <Marker 
        position={{ lat: 49.5560431, lng: 25.5964133 }} 
        icon={process.env.PUBLIC_URL + "/images/map-marker.svg"}
    />
  </GoogleMap>
)

export const PageContact = () => {
    return (
        <div className="container">

            <div className="contact">
                <div className="contact__data">
                    <div className="contact__title">КОНТАКТИ</div>
                    <div className="contact__text">м. Тернопіль бульвар Шевченка, 1</div>
                    <div className="contact__text">+38 098 295 1466</div>
                    <div className="contact__text">email@gmail.com</div>
                </div>
                <div className="contact__map">
                <BunkerMap
                    containerElement={<div style={{ height: `563px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                </div>

            </div>

        </div>
    )
}