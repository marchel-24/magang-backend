class GeoJSOONNonPersistentStorage {
    constructor(_jsObject){
        // jsObhect sebagai js Array
    this._jsObject = []
}

addGeoJSON(geoJSONstr) {
    this._jsObject.push(geoJSONstr)

}

getGeoJSONs() {
    return this._jsObject

}

deleteGeoJSONs(index) {
    this._jsObject.splice(index,1)

}
}

const geoDB = new GeoJSOONNonPersistentStorage()

module.exports = geoDB