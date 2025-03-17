/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'; // Ensures this component runs only on the client

import { Itinerary } from '@/types/tour';
import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';
// Fix for missing default marker icons
// Apply globally
type Props = {
	items: Itinerary[];
	height?: number;
};

const ZoomControl = () => {
	const map = useMap();

	useEffect(() => {
		const enableZoom = (e: KeyboardEvent) => {
			if (e.ctrlKey) {
				map.scrollWheelZoom.enable();
			}
		};

		const disableZoom = () => {
			map.scrollWheelZoom.disable();
		};

		document.addEventListener('keydown', enableZoom);
		document.addEventListener('keyup', disableZoom);

		return () => {
			document.removeEventListener('keydown', enableZoom);
			document.removeEventListener('keyup', disableZoom);
		};
	}, [map]);

	return null;
};

const MapWithItinerary = ({ items, height = 400 }: Props) => {
	if (typeof window === 'undefined') return null; // Prevent SSR issues

	return (
		<MapContainer
			center={[items[0].lat, items[0].lng]}
			zoom={8}
			style={{ height: `${height}px`, width: '100%', zIndex: 10 }}
			maxZoom={12}
			minZoom={6}
			scrollWheelZoom={false}
		>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<ZoomControl />
			<Polyline positions={items.map((i) => [i.lat, i.lng])} color='blue' />
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
					{/* TODO add the city card */}
					<Popup>{dest.name}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default MapWithItinerary;
