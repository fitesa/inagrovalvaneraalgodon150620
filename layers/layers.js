var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucinIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedad_1 = format_EvolucinIndicedeHumedad_1.readFeatures(json_EvolucinIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedad_1.addFeatures(features_EvolucinIndicedeHumedad_1);
var lyr_EvolucinIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedad_1, 
                style: style_EvolucinIndicedeHumedad_1,
                interactive: false,
    title: 'Evolución Indice de Humedad<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedad_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad_2 = format_IndicedeHumedad_2.readFeatures(json_IndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_2.addFeatures(features_IndicedeHumedad_2);
var lyr_IndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_2, 
                style: style_IndicedeHumedad_2,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_2_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedad_2_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedad_2_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedad_2_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedad_2_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacin_3 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacin_3 = format_EvolucinIndicedeVegetacin_3.readFeatures(json_EvolucinIndicedeVegetacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacin_3.addFeatures(features_EvolucinIndicedeVegetacin_3);
var lyr_EvolucinIndicedeVegetacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacin_3, 
                style: style_EvolucinIndicedeVegetacin_3,
                interactive: false,
    title: 'Evolución Indice de Vegetación<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_3_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_3_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_3_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_3_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacin_3_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacin_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacin_4 = format_IndicedeVegetacin_4.readFeatures(json_IndicedeVegetacin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacin_4.addFeatures(features_IndicedeVegetacin_4);
var lyr_IndicedeVegetacin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacin_4, 
                style: style_IndicedeVegetacin_4,
                interactive: false,
    title: 'Indice de Vegetación<br />\
    <img src="styles/legend/IndicedeVegetacin_4_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacin_4_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacin_4_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacin_4_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacin_4_4.png" /> Muy alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucinIndicedeHumedad_1.setVisible(true);lyr_IndicedeHumedad_2.setVisible(true);lyr_EvolucinIndicedeVegetacin_3.setVisible(true);lyr_IndicedeVegetacin_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucinIndicedeHumedad_1,lyr_IndicedeHumedad_2,lyr_EvolucinIndicedeVegetacin_3,lyr_IndicedeVegetacin_4];
lyr_EvolucinIndicedeHumedad_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacin_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacin_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedad_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacin_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacin_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedad_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedad_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacin_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacin_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});