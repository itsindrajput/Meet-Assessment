import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import Profile from  "./components/Profile";
import Share from  "./components/Share";
import axios from "axios";
import "./app.css"

function App() {
  const [state, setState] = useState(null);
 useEffect(()=>{
     const fetch = async()=>{
      await axios({
          method: 'post',
          url:"https://api.meetworks.in/users/get_unique_jobseeker_profile",
          data :{ jobseeker_id: "614b410c2c4b197356a37f18"}
        }).then(function (response) {
          console.log(response);
          setState(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
 }
  fetch();
  },[])


  return (
    <div className="main">
      <Header/>
      <Profile data={state}/>
      <Share/>
    </div>
  );
}

export default App;
