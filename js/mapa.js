(function(){
    "use strict";
var map = L.map('mapa').setView([-12.053024, -76.976105], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-12.053024, -76.976105]).addTo(map)
            .bindPopup('PWD K-loz <br> Diseñador Web Profesional.')
            .openPopup();
})();