Leaflet.geojsonStyle
==================

[Geojson CSS](http://wiki.openstreetmap.org/wiki/Geojson_CSS) implementation for Leaflet.

[Live demo](http://albburtsev.github.io/Leaflet.geojsonStyle/src/demo/demo.html)

![Screenshot](https://rawgithub.com/albburtsev/Leaflet.geojsonStyle/master/demo/screenshot.png)

Use ```L.GeoJSON.CSS``` or ```L.geoJson.css``` instead of ```L.GeoJSON``` and ```L.geoJson```:

```js
L.geoJSON.style(json).addTo(map);
```

## Install

Download latest release. Use [minified](https://raw.githubusercontent.com/albburtsev/Leaflet.geojsonStyle/master/leaflet.geojsoncss.min.js) or [development](https://raw.githubusercontent.com/albburtsev/Leaflet.geojsonStyle/master/leaflet.geojsoncss.js) version.

Or use bower for install:

```
bower install Leaflet.geojsonStyle --save
```

## Example of GeoJSON with CSS

```json
{
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"geometry": {
				"type": "Polygon",
				"coordinates": [[
					[37.61489152908325,55.752586015356876],
					[37.61577129364014,55.7539867694403],
					[37.616543769836426,55.75506145183324],
					[37.6177453994751,55.75443355110991],
					[37.619526386260986,55.753491681072205],
					[37.62143611907959,55.75252563689488],
					[37.62117862701416,55.75211506087468],
					[37.61875391006469,55.750762544596384],
					[37.61813163757324,55.749989657097],
					[37.61302471160889,55.749035602973365],
					[37.612552642822266,55.74907183330299],
					[37.6134967803955,55.750641781933986],
					[37.61489152908325,55.752586015356876]
				]]
			},
			"style": {
                "color": "#CC0000",
                "weight": 2,
                "fill-opacity": 0.6,
                "opacity": 1,
                "dashArray": "3, 5"
            }
		},
		{
			"type": "Feature",
			"geometry": {
				"type": "MultiLineString",
				"coordinates": [[[37.611907,55.747355],[37.612639,55.747611],[37.613671,55.747839],[37.614446,55.748040],[37.616002,55.748446],[37.616364,55.748537],[37.616573,55.748585],[37.616779,55.748627],[37.617038,55.748677],[37.618375,55.748887],[37.620201,55.749173],[37.620494,55.749215],[37.620723,55.749246],[37.621209,55.749296],[37.622037,55.749388],[37.622402,55.749421],[37.622745,55.749461],[37.622990,55.749484],[37.623206,55.749507],[37.623680,55.749562],[37.624266,55.749640]],[[37.624245,55.749770],[37.623771,55.749678],[37.623476,55.749623],[37.623147,55.749577],[37.621484,55.749414],[37.620021,55.749222],[37.618740,55.749021],[37.617359,55.748819],[37.616927,55.748750],[37.616755,55.748721],[37.616592,55.748691],[37.616413,55.748652],[37.616225,55.748608],[37.614894,55.748251],[37.614139,55.748055],[37.613795,55.747971],[37.613487,55.747906],[37.612526,55.747741],[37.612248,55.747656],[37.611791,55.747497]]]
			},
			"style": {
				"color": "#CC0000",
				"opacity": 1,
				"weight": 4
			}
		},
		{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [37.61001, 55.752301]
			},
			"style": {
				"icon": {
					"iconUrl": "metro.png",
					"iconSize": [32, 32],
					"iconAnchor": [16, 16]
				}
			}
		}
	]
}
```

## Style properties

For ```Point``` geometry use only ```icon``` property. Value is an object with [Leaflet icon options](http://leafletjs.com/reference.html#icon-iconurl):

```json
{
	"icon": {
		"iconUrl": "metro.png",
		"iconSize": [32, 32],
		"iconAnchor": [16, 16]
	}
}
```

For ```LineString``` (```MultiLineString```) and ```Polygon``` (```MultiPolygon```) use [Leaflet Path options](http://leafletjs.com/reference.html#path-options):

```json
{
	"color": "#CC0000",
	"weight": 2,
	"fill-opacity": 0.6,
	"opacity": 1,
	"dashArray": "3, 5"
}
```

## Popup template

In additional to [GeoJSON Style](http://wiki.openstreetmap.org/wiki/Geojson_CSS) this plugin support templates for [Leaflet.Popup](http://leafletjs.com/reference.html#popup). Use property ```popupTemplate``` in features:

```json
{
	"type": "Feature",
	"properties": {
		"title": "Kremlin",
		"style": {
        		"color": "#CC0000",
        		"weight": 2,
        		"fill-opacity": 0.6,
        		"opacity": 1,
        		"dashArray": "3, 5"
        },
        "popupTemplate": "<strong>{title}</strong>"
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [[
			[37.61489152908325,55.752586015356876],
			[37.61577129364014,55.7539867694403],
			[37.616543769836426,55.75506145183324],
			[37.6177453994751,55.75443355110991],
			[37.619526386260986,55.753491681072205],
			[37.62143611907959,55.75252563689488],
			[37.62117862701416,55.75211506087468],
			[37.61875391006469,55.750762544596384],
			[37.61813163757324,55.749989657097],
			[37.61302471160889,55.749035602973365],
			[37.612552642822266,55.74907183330299],
			[37.6134967803955,55.750641781933986],
			[37.61489152908325,55.752586015356876]
		]]
	}	
}
```