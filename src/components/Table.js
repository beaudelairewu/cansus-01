import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";

export default function Table() {
    const [ftData, setFtData] = useState([])

    async function getData(){
        // const fetchedData = []
        const querySnapshot = await getDocs(collection(db, "stations"));
            setFtData([])
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const dat = {
                id: doc.id,
                name: doc.data().name,
                lat: doc.data().location._lat,
                long: doc.data().location._long,
                status: doc.data().status,
                updated: ''
            }
            let date =  doc.data().lastUpdated.toDate().toString().split(' ')
            dat.updated = `${date[1]} ${date[2]}, ${date[3]}`
            // console.log(dat)
            // fetchedData.push(dat)
            setFtData(prevState => [...prevState, dat])
        });
        // console.log(fetchedData)
    }

    useEffect(()=>{
        getData()
        // console.log(ftData)
    },[])
    
  return (
    <div>
        <div className="ClusterList">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <br></br>
                            <div className="table-responsive" >
                                <table className="table align-middle table-hover" >
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Updated</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {ftData.map((data, i) => 
                                        <tr key={data.id}>
                                            <th scope="row">{i+1}</th>
                                            <th scope="row" >
                                                {data.name}
                                            </th>
                                            <td>{data.lat}, {data.long}</td>
                                            <td style={data.status==true?{color:'green'}:{color:"red"}}>{data.status.toString()}</td>
                                            <td >{data.updated}</td>
                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
