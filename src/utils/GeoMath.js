function haversine(currentPosition, businessCoords) {
    const R = 6371; // km
    const dLat = (businessCoords.lat - currentPosition.coords.latitude) * Math.PI / 180;
    const dLon = (businessCoords.lon - currentPosition.coords.longitude) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(currentPosition.coords.latitude * Math.PI / 180) * Math.cos(businessCoords.lon * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const GeoMath = {
    haversine
};

export default GeoMath;