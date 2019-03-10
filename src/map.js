export const initMap = () => {
    var e = {
        lat: 40.714909,
        lng: -73.751213
    }
        , t = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: e
    });
    new google.maps.Marker({
        position: e,
        map: t
    })
};