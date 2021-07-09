import React, { useState, useEffect } from "react";
import "../App.css";

function Users() {
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setProfileData(json);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  const filterItems = (e) => {
    let text = e.target.value.toLowerCase();
    console.log(text);
    let newData = data.filter((item) => {
      const values = Object.values(item).map((e) => "" + e);
      let result = values.filter(
        (value) => value.toLowerCase().indexOf(text) > -1
      );
      console.log(result);
      return !!result.length;
    });
    setProfileData(newData);
  };

  return (
    <div className="apiDiv">
      {/* <img
        alt="background"
        src=""
      /> */}
      <div className="headerDiv">
        <h1>API DISPLAY</h1>
      </div>

      <div className="searchBar">
        <input
          type="text"
          className="filter"
          placeholder="Search items..."
          onChange={filterItems}
        />
      </div>

      <div className="btnDiv">
        <button onClick={() => getApi()}>Fetch Users</button>
      </div>
      <div className="main">
        <div className="userHolder">
          {profileData.map((item) => (
            <div className="userDiv" key={item.id}>
              <p className="apiItem">{item.id} </p>
              <p className="apiItem">{item.name}</p>
              <p className="apiItem">{item.phone}</p>
              <p className="apiItem">{item.username}</p>
              <p className="apiItem"> {item.email}</p>
              <p className="apiItem">{item.address.street}</p>
              <p className="apiItem">{item.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
