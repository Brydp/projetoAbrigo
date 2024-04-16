import { View, StyleSheet } from "react-native";
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from "react";
import MapView, {Marker} from 'react-native-maps';

export default function Local() {

    const [erro, setErro] = useState();
    const [localizacao, setLocalizacao] = useState();

    const mapRef = useRef();

    async function getLocation(){

        let {status} = Location.requestForegroundPermissionsAsync();
        if( status !== "granted"  ){
            setErro( "Erro" );
            return;
        }

        let location = Location.getCurrentPositionAsync({});
        setLocalizacao( location );
    }

    useEffect(() => {

        getLocation();

        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, ( response ) => {
            setLocalizacao( response );
            mapRef.current?.animateCamera({
                center: response.coords
            })
        }
        );


    }, [])

    return (
        <View>
            {localizacao &&
                <MapView
                    ref={mapRef}
                    initialRegion={{
                        latitude: localizacao?.coords.latitude,
                        longitude: localizacao?.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                    style={css.mapa}
                >
                    <Marker coordinate={{
                        latitude: localizacao.coords.latitude,
                        longitude: localizacao.coords.longitude
                    }} />
                </MapView>
            }
        </View>
    )
}
const css = StyleSheet.create({
    mapa: {
        width: "100%",
        height: "100%"
    }
})