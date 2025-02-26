'use client';

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const destinations: {
	name: string;
	lat: number;
	lng: number;
}[] = [
	{ name: 'Madrid (Spain)', lat: 40.4168, lng: -3.7038 },
	{ name: 'Merida (Spain)', lat: 38.917, lng: -6.343 },
	{ name: 'Seville (Spain)', lat: 37.3891, lng: -5.9845 },
	{ name: 'Cordoba (Spain)', lat: 37.8882, lng: -4.7794 },
	{ name: 'Granada (Spain)', lat: 37.1773, lng: -3.5986 },
	{ name: 'Valencia (Spain)', lat: 39.4699, lng: -0.3763 },
	{ name: 'Barcelona (Spain)', lat: 41.3874, lng: 2.1686 },
];

import { LatLngTuple } from 'leaflet';

const polylinePositions: LatLngTuple[] = destinations.map((dest: { lat: number; lng: number }) => [dest.lat, dest.lng] as LatLngTuple);

// const point = () => <div className='w-4 h-4 bg-blue-500'></div>;

const ItineraryMap = () => {
	return (
		<MapContainer
			center={[40.0, -4.0]} // Center of Spain
			zoom={6}
			style={{ height: '500px', width: '100%' }}
		>
			{/* Base Tile Layer */}
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			{/* Route Line */}
			<Polyline positions={polylinePositions} color='blue' />

			{/* Markers */}
			{destinations.map((dest, index) => (
				<Marker
					key={index}
					position={[dest.lat, dest.lng]}
					icon={L.divIcon({
						className: 'custom-marker',
						html: `<div style="
              background: ${
								index === 0
									? 'green' // Start point (Madrid)
									: index === destinations.length - 1
									? 'red' // End point (Barcelona)
									: 'blue'
							};
              color: white;
              padding:0;
              border-radius: 10px;
              font-size: 14px;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              width:16px;
              height:16px;
              ">
              <div style="
                width: 6px;
                height: 6px;
                background: white;
                border-radius: 50%;
              "></div>
            </div>`,
					})}
				>
					<Popup>{dest.name}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default ItineraryMap;
