<template>
	<div id="map"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
	name: 'Simmap',
	mounted() {
		// lazy load the required ArcGIS API for JavaScript modules and CSS
		loadModules(['esri/Map', 'esri/views/MapView'], { css: true }).then(([ArcGISMap, MapView]) => {
			const mapb = new ArcGISMap({
				basemap: 'topo-vector'
			});
			console.log(this);
			this.view = new MapView({
				container: 'map',
				map: mapb,
				center: [-118, 34],
				zoom: 8
			});
		});
	},
	beforeDestroy() {
		if (this.view) {
			// destroy the map view
			this.view.container = null;
		}
	}
};
</script>

<style>
	#map{
		width: 100%;
		height: 100%;
		background-color: #42B983
	}
</style>
