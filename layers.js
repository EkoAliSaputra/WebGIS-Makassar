var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_AR_1 = format_BATAS_ADMINISTRASI_AR_1.readFeatures(json_BATAS_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_AR_1.addFeatures(features_BATAS_ADMINISTRASI_AR_1);
var lyr_BATAS_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_ADMINISTRASI_AR_1, 
                style: style_BATAS_ADMINISTRASI_AR_1,
                popuplayertitle: 'BATAS_ADMINISTRASI_AR',
                interactive: true,
    title: 'BATAS_ADMINISTRASI_AR<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_0.png" /> Biringkanaya<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_1.png" /> Bontoala<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_2.png" /> Kepulauan Sangkarrang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_3.png" /> Makassar<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_4.png" /> Mamajang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_5.png" /> Manggala<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_6.png" /> Mariso<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_7.png" /> Panakkukang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_8.png" /> Rappocini<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_9.png" /> Tallo<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_10.png" /> Tamalanrea<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_11.png" /> Tamalate<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_12.png" /> Ujung Pandang<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_13.png" /> Ujung Tanah<br />\
    <img src="styles/legend/BATAS_ADMINISTRASI_AR_1_14.png" /> Wajo<br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_BATAS_ADMINISTRASI_AR_1.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_BATAS_ADMINISTRASI_AR_1];
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KOTA': 'KOTA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'PROVINSI': '', 'KOTA': '', 'KECAMATAN': '', 'KELURAHAN': '', 'SUMBER': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BATAS_ADMINISTRASI_AR_1.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'KOTA': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KELURAHAN': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_BATAS_ADMINISTRASI_AR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});