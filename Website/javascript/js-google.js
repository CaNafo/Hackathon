

        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: new google.maps.LatLng(43.847033, 18.373820),
                mapTypeId: 'roadmap'
            });

            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                empty: {
                    icon: {
                        url: 'images/open-trash-can.svg', // url
                        scaledSize: new google.maps.Size(40, 40), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0), // anchor
                        labelOrigin: new google.maps.Point(22, 50)
                    }
                },
                between25_50: {
                    icon: {
                        url: 'images/udner-50.svg', // url
                        scaledSize: new google.maps.Size(40, 40), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0), // anchor
                        labelOrigin: new google.maps.Point(22, 50)
                    }
                },
                between50_80: {
                    icon: {
                        url: 'images/50-and-above.svg', // url
                        scaledSize: new google.maps.Size(40, 40), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0), // anchor
                        labelOrigin: new google.maps.Point(22, 50)
                    }
                },

                full: {
                    icon: {
                        url: 'images/trash-can-with-cover.svg', // url
                        scaledSize: new google.maps.Size(40, 40), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 0), // anchor
                        labelOrigin: new google.maps.Point(22, 50)
                    }
                }
            };

            var features = [
                {
                    position: new google.maps.LatLng(43.847816, 18.367424),
                    type: 'empty',
                    percent: '0'
                },
                {
                    position: new google.maps.LatLng(43.845781, 18.377195),
                    type: 'between25_50',
                    percent: '32'
                },
                {
                    position: new google.maps.LatLng(43.848658, 18.372856),
                    type: 'between50_80',
                    percent: '69'
                },
                {
                    position: new google.maps.LatLng(43.844555, 18.369487),
                    type: 'full',
                    percent: '91'
                }
            ];

            // Create markers.


            for(i = 1; i < 5; i++)
            {
                var langitudeFor = 43.844555 + i;
                insertData(langitudeFor, 18.369487, 56 + i);
            }

            function insertData(longitude, latitude, percentage) {
            
                var features = [
                    {
                        position: new google.maps.LatLng(longitude, latitude),
                        type: (percentage <= 1) ? ("empty") : 
                        ((percentage > 1 && percentage <= 50) ? ("twebeen25_50") : 
                        ((percentage > 50 && percentage <= 80) ? ("between50_80"):
                        ((percentage > 80 ) ? ("full"): "" ))),
                        percent: percentage
                    }
                ];

                features.forEach(function (features) {
                    var marker = new google.maps.Marker({
                        position: features.position,
                        icon: icons[features.type].icon,
                        label: {
                            text: features.percent + "%",
                            color: "orange",
                            fontSize: "14px",
                            fontWeight: "bold"
                        },
                        map: map
                    });
                });

                return features;
            }

        }

			