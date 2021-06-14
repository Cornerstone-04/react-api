import React, {useState, useEffect} from 'react'

function Users() {
const [data, setData] = useState([]);
const getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        setData(json);
    })
}

    useEffect(() => {
        getApi();
    }, [])

    return (
        <div className="apiDiv">
            <img alt="background" src="https://images.pexels.com/photos/7438107/pexels-photo-7438107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000&h=1000"/>
            <div className="headerDiv">
                <h1>
                    API DISPLAY
                </h1> 
            </div>

            <div className="btnDiv">
                <button onClick={getApi}>Fetch Users</button>
            </div>
            <div className="main">
                {/* {JSON.stringify(data)} */}
                <div className="userHolder">
                    {data.map(item =>
                        <div className="userDiv" key={item.id}>
                            <p>{item.id} </p>    
                            <p>{item.name}</p>
                            <p>{item.phone}</p>
                            <p>{item.username}</p>
                            <p>{item.email}</p>
                            <p>{item.address.street}</p>
                            <p>{item.company.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Users;
