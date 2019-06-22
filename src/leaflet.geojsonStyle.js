/**
 * Leaflet.geojsonCSS
 * @author Trương Thanh Tùng
 * @license MIT
 */
(function (window, document, undefined) {
    if (!window.L || !L.GeoJSON) {
        return;
    }

    L.GeoJSON.Style = L.GeoJSON.extend({
        initialize: function (geojson, options) {
            let styledOptions = L.extend({}, options, {
                onEachFeature: function (feature, layer) {
                    if (options && options.onEachFeature) {
                        options.onEachFeature(feature, layer);
                    }

                    let style = _.get(feature, 'style', _.get(options, 'style')),
                        popupTemplate = _.get(feature, 'popupTemplate', _.get(options, 'popupTemplate'));


                    if (style) {
                        if(_.isFunction(style)) style = style(feature)

                        if (layer instanceof L.Marker) {
                            if (style.icon) {
                                layer.setIcon(L.icon(style.icon));
                            }
                        } else {
                            layer.setStyle(style);
                        }
                    }

                    if (popupTemplate && feature.properties) {
                        let content = _.isObject(popupTemplate) ? _.popupToContent(popupTemplate, feature.properties) : _.template(popupTemplate, feature.properties)

                        layer.bindPopup(content);
                    }
                }
            });

            L.setOptions(this, styledOptions);

            this._layers = {};

            if (geojson) {
                this.addData(geojson);
            }
        }
    });

    L.geoJSON.style = function (geojson, options) {
        return new L.GeoJSON.Style(geojson, options);
    };
})(window, document);