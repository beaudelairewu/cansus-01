import React, {useEffect, useRef, useState} from 'react'
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import mapboxgl from 'mapbox-gl';
// mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhdWRlbGFpcmUiLCJhIjoiY2xkc2t3eHh6MHRjdjNvcGZuYWpkMXE0bSJ9.5TR5KGuf2vyblYY4bgkNFQ';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(99.0057364);
    const [lat, setLat] = useState(18.7981499);
    const [zoom, setZoom] = useState(14);
    // const [feDat, setFeDat] = useState()

    // const coordinates = [
    //     [18.798998, 99.008687],
    //     [18.798731, 99.003083],
    //     [18.797255, 99.006564]
    // ]



    useEffect(() => {
        //fetch mapbox view
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });

        // coordinates.forEach((cod)=>{
        //     // new mapboxgl.Popup().setText(status)
        //     new mapboxgl.Marker()
        //         .setLngLat([cod[1],cod[0]])
        //         .addTo(map.current)
        //         .setPopup('lololol')
        // })

        //fetch data from firebase and add to state
        async function getData(){
            const fetchedData = []
            const querySnapshot = await getDocs(collection(db, "stations"));
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const dat = {
                    name: doc.data().name,
                    lat: doc.data().location._lat,
                    long: doc.data().location._long,
                    status: doc.data().status
                }
                fetchedData.push(dat)
            });
            console.log(fetchedData)
            // setFeDat(fetchedData)
            fetchedData.forEach((ob)=>{
                //create popup html
                const displayHTML = `<strong>${ob.name}</strong><p>status: ${ob.status}</p>`
                //set popup value
                const popup = new mapboxgl.Popup()
                    .setHTML(displayHTML)
                if (ob.status == true) {
                    new mapboxgl.Marker()
                        .setLngLat([ob.long, ob.lat])
                        .addTo(map.current)
                        .setPopup(popup)
                } 
                //set pin color to orange if status==false
                else if (ob.status == false){
                    new mapboxgl.Marker({color: "#ce5c3f"})
                        .setLngLat([ob.long, ob.lat])
                        .addTo(map.current)
                        .setPopup(popup)
                }
            })
        }
        getData()

      });

  return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )
}

{/* <div className='container'>
            <h1 className='py-2 mt-1'>Dashboard</h1>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div ref={mapContainer} className="map-container" />
                    </div>
                </div>
            </div>
            <div className='row py-2 my-1'>
                <div className='col-4'>
                    <div className='card py-1 px-1'>
                        sth
                    </div>
                </div>
            </div>
    
        </div> */}