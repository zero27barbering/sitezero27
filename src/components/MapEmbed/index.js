import React from 'react';

export default function MapEmbed({ address, number }) {

    const addressQuery = encodeURI(`${number} ${address}`)

    return (
        <iframe
            id="gmap_canvas"
            src={` https://maps.google.com/maps?q=${addressQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed `}
            frameBorder="0"
            scrolling="no" marginHeight="0" marginWidth="0"
        />
    )
}
