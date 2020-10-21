import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function Photos(props) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/photos?albumId=' + props.match.params.id)
        .then(response => {
            setPhotos(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
    }, [props.match.params.id]);

    return (
        <div>
            <h3>Photo List - Album Id: {props.match.params.id}</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                </tr>
                </thead>
                <tbody>
                {
                    photos.map((photo, i) => (
                        <tr key={i}>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <a href={photo.url}>
                                    <img src={photo.thumbnailUrl} alt={photo.title} />
                                </a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
      </div>
  )    
}

export default Photos;