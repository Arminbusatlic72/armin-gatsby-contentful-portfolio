import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'



class LeafletMap extends React.Component {

    static propTypes = {
        /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
        position: PropTypes.array,

        /** Initial zoom level for the map (default 13) **/
        zoom: PropTypes.number,

        /** If set, will display a marker, which when clicked will display this text **/
        markerText: PropTypes.string
    }

    static defaultProps = {
        position: [44.815071, 20.460480],
        zoom: 12,
        markerText: "11 000 Beograd, Serbia"
    }

    render() {


        return (
            <Map center={this.props.position} zoom={this.props.zoom}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/armin-busatlic/ckdqg5u7o043m19o3bc7rq4gl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJtaW4tYnVzYXRsaWMiLCJhIjoiY2tkcWZ0b3lhMTRpYjJ3dHZzcTZsbHVhZCJ9.nqpbefHGtkwSPUajl-uYpg"
                    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                />
                {this.props.markerText !== "" &&
                    <Marker position={this.props.position}>
                        <Popup>{this.props.markerText}</Popup>
                    </Marker>
                }
            </Map>
        );

    }
}

export default LeafletMap