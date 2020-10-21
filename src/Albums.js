import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/albums')
        .then(response => {
            setAlbums(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h3>Album List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                {
                    albums.map((album, i) => (
                        <tr key={i}>
                            <td>{album.id}</td>
                            <td>
                                <Link to={"/photos/"+album.id}>{album.title}</Link>
                            </td>
                            <td>{album.userId}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
      </div>
    )    
}

export default Albums;