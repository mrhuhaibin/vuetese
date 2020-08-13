<template>
	<div id="app">
		<!-- <div id="app"><img alt="Vue logo" src="./assets/logo.png" /></div> -->
		<div id="mapcontainer">
			<Simmap></Simmap>
		</div>
	</div>
	
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
/* import { loadModules } from 'esri-loader'; */
import Simmap from './components/map.vue';

export default {
	name: 'App',
	components: {
		Simmap
	}
	/* mounted() {
		// lazy load the required ArcGIS API for JavaScript modules and CSS
		loadModules(['esri/Map', 'esri/views/MapView'], { css: true }).then(([ArcGISMap, MapView]) => {
			const map = new ArcGISMap({
				basemap: 'topo-vector'
			});

			this.view = new MapView({
				container: this.$el,
				map: map,
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
	} */
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	width: 100%;
	height: 100%;
}
#mapcontainer {
	position: absolute;
	left: 50px;
	top: 50px;
	width: 400px;
	height: 400px;
}
</style>
