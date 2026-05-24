ol.proj.get("EPSG:3857").setExtent([2258444.500452, -3449761.521174, 3424485.223655, -2863018.168758]);
var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_NW_Geological_Pologyn_1 = new ol.format.GeoJSON();
var features_NW_Geological_Pologyn_1 = format_NW_Geological_Pologyn_1.readFeatures(json_NW_Geological_Pologyn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_Geological_Pologyn_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_Geological_Pologyn_1.addFeatures(features_NW_Geological_Pologyn_1);var lyr_NW_Geological_Pologyn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_Geological_Pologyn_1, 
                style: style_NW_Geological_Pologyn_1,
                title: '<img src="styles/legend/NW_Geological_Pologyn_1.png" /> NW_Geological_Pologyn'
            });var format_NW_isolines_2 = new ol.format.GeoJSON();
var features_NW_isolines_2 = format_NW_isolines_2.readFeatures(json_NW_isolines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_isolines_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_isolines_2.addFeatures(features_NW_isolines_2);var lyr_NW_isolines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_isolines_2, 
                style: style_NW_isolines_2,
                title: '<img src="styles/legend/NW_isolines_2.png" /> NW_isolines'
            });var format_NW_mineralpoints_3 = new ol.format.GeoJSON();
var features_NW_mineralpoints_3 = format_NW_mineralpoints_3.readFeatures(json_NW_mineralpoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_mineralpoints_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_mineralpoints_3.addFeatures(features_NW_mineralpoints_3);var lyr_NW_mineralpoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_mineralpoints_3, 
                style: style_NW_mineralpoints_3,
                title: '<img src="styles/legend/NW_mineralpoints_3.png" /> NW_mineralpoints'
            });var format_NW_outcrop_4 = new ol.format.GeoJSON();
var features_NW_outcrop_4 = format_NW_outcrop_4.readFeatures(json_NW_outcrop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_outcrop_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_outcrop_4.addFeatures(features_NW_outcrop_4);var lyr_NW_outcrop_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_outcrop_4, 
                style: style_NW_outcrop_4,
                title: '<img src="styles/legend/NW_outcrop_4.png" /> NW_outcrop'
            });var format_NW_Province_Boundary_5 = new ol.format.GeoJSON();
var features_NW_Province_Boundary_5 = format_NW_Province_Boundary_5.readFeatures(json_NW_Province_Boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_Province_Boundary_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_Province_Boundary_5.addFeatures(features_NW_Province_Boundary_5);var lyr_NW_Province_Boundary_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_Province_Boundary_5, 
                style: style_NW_Province_Boundary_5,
                title: '<img src="styles/legend/NW_Province_Boundary_5.png" /> NW_Province_Boundary'
            });var format_NW_structuralpoints_6 = new ol.format.GeoJSON();
var features_NW_structuralpoints_6 = format_NW_structuralpoints_6.readFeatures(json_NW_structuralpoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_structuralpoints_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_structuralpoints_6.addFeatures(features_NW_structuralpoints_6);var lyr_NW_structuralpoints_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_structuralpoints_6, 
                style: style_NW_structuralpoints_6,
                title: '<img src="styles/legend/NW_structuralpoints_6.png" /> NW_structuralpoints'
            });var format_NW_tectoniclines_7 = new ol.format.GeoJSON();
var features_NW_tectoniclines_7 = format_NW_tectoniclines_7.readFeatures(json_NW_tectoniclines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NW_tectoniclines_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NW_tectoniclines_7.addFeatures(features_NW_tectoniclines_7);var lyr_NW_tectoniclines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NW_tectoniclines_7, 
                style: style_NW_tectoniclines_7,
                title: '<img src="styles/legend/NW_tectoniclines_7.png" /> NW_tectoniclines'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NW_Geological_Pologyn_1.setVisible(true);lyr_NW_isolines_2.setVisible(true);lyr_NW_mineralpoints_3.setVisible(true);lyr_NW_outcrop_4.setVisible(true);lyr_NW_Province_Boundary_5.setVisible(true);lyr_NW_structuralpoints_6.setVisible(true);lyr_NW_tectoniclines_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NW_Geological_Pologyn_1,lyr_NW_isolines_2,lyr_NW_mineralpoints_3,lyr_NW_outcrop_4,lyr_NW_Province_Boundary_5,lyr_NW_structuralpoints_6,lyr_NW_tectoniclines_7];
lyr_NW_Geological_Pologyn_1.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'uq_geol': 'uq_geol', 'uq_sacs_no': 'uq_sacs_no', 'lithstrat': 'lithstrat', 'lithrank': 'lithrank', 'parent1': 'parent1', 'rank1': 'rank1', 'parent2': 'parent2', 'rank2': 'rank2', 'parent3': 'parent3', 'rank3': 'rank3', 'parent4': 'parent4', 'rank4': 'rank4', 'chronstrat': 'chronstrat', 'chronrank': 'chronrank', 'litho_grp': 'litho_grp', 'descriptio': 'descriptio', 'color_code': 'color_code', 'hatch': 'hatch', 'hatcht': 'hatcht', 'text_label': 'text_label', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'shape_leng': 'shape_leng', 'envr': 'envr', 'simplith': 'simplith', 'mapno': 'mapno', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_NW_isolines_2.set('fieldAliases', {'id': 'id', 'lntype': 'lntype', 'value': 'value', 'uq_sacs_no': 'uq_sacs_no', 'mapno': 'mapno', 'desc_': 'desc_', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', });
lyr_NW_mineralpoints_3.set('fieldAliases', {'id': 'id', 'commod': 'commod', 'pttype': 'pttype', 'pttypet': 'pttypet', 'mapno': 'mapno', 'descr': 'descr', 'com1': 'com1', 'com2': 'com2', 'com3': 'com3', 'com4': 'com4', 'com5': 'com5', 'com6': 'com6', 'com7': 'com7', 'com8': 'com8', 'com9': 'com9', 'com10': 'com10', 'status': 'status', 'symbol': 'symbol', 'azimuth': 'azimuth', 'size': 'size', 'dep_name': 'dep_name', 'mine_name': 'mine_name', 'dep_conc': 'dep_conc', 'or_undef': 'or_undef', 'uq_ref': 'uq_ref', 'comm1_2': 'comm1_2', 'descriptio': 'descriptio', });
lyr_NW_outcrop_4.set('fieldAliases', {'id': 'id', 'ocflag': 'ocflag', 'mapno': 'mapno', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_NW_Province_Boundary_5.set('fieldAliases', {'id': 'id', 'pr_mdb_c': 'pr_mdb_c', 'pr_code': 'pr_code', 'pr_name': 'pr_name', 'area_sqkm': 'area_sqkm', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_NW_structuralpoints_6.set('fieldAliases', {'id': 'id', 'pttype': 'pttype', 'azimuth': 'azimuth', 'dip': 'dip', 'pttypet': 'pttypet', 'mapno': 'mapno', 'descr': 'descr', 'descriptio': 'descriptio', });
lyr_NW_tectoniclines_7.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'lntype': 'lntype', 'lntypet': 'lntypet', 'mapno': 'mapno', 'shape_leng': 'shape_leng', 'descriptio': 'descriptio', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', });
lyr_NW_Geological_Pologyn_1.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'uq_geol': 'TextEdit', 'uq_sacs_no': 'TextEdit', 'lithstrat': 'TextEdit', 'lithrank': 'TextEdit', 'parent1': 'TextEdit', 'rank1': 'TextEdit', 'parent2': 'TextEdit', 'rank2': 'TextEdit', 'parent3': 'TextEdit', 'rank3': 'TextEdit', 'parent4': 'TextEdit', 'rank4': 'TextEdit', 'chronstrat': 'TextEdit', 'chronrank': 'TextEdit', 'litho_grp': 'TextEdit', 'descriptio': 'TextEdit', 'color_code': 'TextEdit', 'hatch': 'TextEdit', 'hatcht': 'TextEdit', 'text_label': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_leng': 'TextEdit', 'envr': 'TextEdit', 'simplith': 'TextEdit', 'mapno': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NW_isolines_2.set('fieldImages', {'id': 'TextEdit', 'lntype': 'TextEdit', 'value': 'TextEdit', 'uq_sacs_no': 'TextEdit', 'mapno': 'TextEdit', 'desc_': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', });
lyr_NW_mineralpoints_3.set('fieldImages', {'id': '', 'commod': '', 'pttype': '', 'pttypet': '', 'mapno': '', 'descr': '', 'com1': '', 'com2': '', 'com3': '', 'com4': '', 'com5': '', 'com6': '', 'com7': '', 'com8': '', 'com9': '', 'com10': '', 'status': '', 'symbol': '', 'azimuth': '', 'size': '', 'dep_name': '', 'mine_name': '', 'dep_conc': '', 'or_undef': '', 'uq_ref': '', 'comm1_2': '', 'descriptio': '', });
lyr_NW_outcrop_4.set('fieldImages', {'id': 'TextEdit', 'ocflag': 'TextEdit', 'mapno': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NW_Province_Boundary_5.set('fieldImages', {'id': 'TextEdit', 'pr_mdb_c': 'TextEdit', 'pr_code': 'TextEdit', 'pr_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NW_structuralpoints_6.set('fieldImages', {'id': '', 'pttype': '', 'azimuth': '', 'dip': '', 'pttypet': '', 'mapno': '', 'descr': '', 'descriptio': '', });
lyr_NW_tectoniclines_7.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'lntype': 'TextEdit', 'lntypet': 'TextEdit', 'mapno': 'TextEdit', 'shape_leng': 'TextEdit', 'descriptio': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_NW_Geological_Pologyn_1.set('fieldLabels', {'id': 'inline label', 'objectid': 'no label', 'uq_geol': 'no label', 'uq_sacs_no': 'no label', 'lithstrat': 'header label', 'lithrank': 'no label', 'parent1': 'no label', 'rank1': 'no label', 'parent2': 'no label', 'rank2': 'no label', 'parent3': 'no label', 'rank3': 'no label', 'parent4': 'no label', 'rank4': 'no label', 'chronstrat': 'no label', 'chronrank': 'no label', 'litho_grp': 'no label', 'descriptio': 'no label', 'color_code': 'no label', 'hatch': 'header label', 'hatcht': 'no label', 'text_label': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'shape_leng': 'no label', 'envr': 'header label', 'simplith': 'no label', 'mapno': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_NW_isolines_2.set('fieldLabels', {'id': 'inline label', 'lntype': 'no label', 'value': 'no label', 'uq_sacs_no': 'no label', 'mapno': 'header label', 'desc_': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', });
lyr_NW_mineralpoints_3.set('fieldLabels', {'id': 'inline label', 'commod': 'no label', 'pttype': 'no label', 'pttypet': 'no label', 'mapno': 'no label', 'descr': 'no label', 'com1': 'no label', 'com2': 'no label', 'com3': 'no label', 'com4': 'no label', 'com5': 'no label', 'com6': 'no label', 'com7': 'no label', 'com8': 'no label', 'com9': 'no label', 'com10': 'no label', 'status': 'no label', 'symbol': 'no label', 'azimuth': 'no label', 'size': 'no label', 'dep_name': 'no label', 'mine_name': 'no label', 'dep_conc': 'no label', 'or_undef': 'no label', 'uq_ref': 'no label', 'comm1_2': 'no label', 'descriptio': 'no label', });
lyr_NW_outcrop_4.set('fieldLabels', {'id': 'inline label', 'ocflag': 'no label', 'mapno': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_NW_Province_Boundary_5.set('fieldLabels', {'id': 'inline label', 'pr_mdb_c': 'header label', 'pr_code': 'no label', 'pr_name': 'no label', 'area_sqkm': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_NW_structuralpoints_6.set('fieldLabels', {'id': 'inline label', 'pttype': 'no label', 'azimuth': 'no label', 'dip': 'no label', 'pttypet': 'no label', 'mapno': 'no label', 'descr': 'no label', 'descriptio': 'no label', });
lyr_NW_tectoniclines_7.set('fieldLabels', {'id': 'inline label', 'objectid': 'no label', 'lntype': 'no label', 'lntypet': 'no label', 'mapno': 'no label', 'shape_leng': 'no label', 'descriptio': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', });
lyr_NW_tectoniclines_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});