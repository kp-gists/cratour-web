'use client';

import { Itinerary } from '@/types/tour';
import React from 'react';

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Props = {
	items: Itinerary[];
	height?: number;
};

const MapWithItinerary = ({ items, height = 400 }: Props) => {
	return (
		<MapContainer
			center={[items[0].lat, items[0].lng]} // Center of Spain
			zoom={8}
			style={{ height: `${height}px`, width: '100%', zIndex: 10 }}
		>
			{/* Base Tile Layer */}
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			{/* Route Line */}
			<Polyline positions={items.map((i) => [i.lat, i.lng])} color='blue' />

			{/* Markers */}
			{items.map((dest, index) => (
				<Marker
					key={index}
					position={[dest.lat, dest.lng]}
					icon={L.divIcon({
						className: 'custom-marker',
						html: `<div style="
                background: ${
									index === 0
										? 'green' // Start point (Madrid)
										: index === items.length - 1
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

export default MapWithItinerary;
