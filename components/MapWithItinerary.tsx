'use client'; // Ensures this component runs only on the client

import { Itinerary } from '@/types/tour';
import React, { useEffect } from 'react';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from 'react-leaflet';

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
				<Marker key={index} position={[dest.lat, dest.lng]}>
					<Popup>{dest.name}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};

export default MapWithItinerary;
