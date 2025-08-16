import { useState } from "react";
import { PostComponent } from "./post";

function App() {

  const posts = [{
    name : "harkirat",
    subtitile : "1000 followers",
    time : "2m ago",
    image : "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    description : "Want to know how to win big ? Check out how these folks won $6000 in bounties"
  }]

  function addPost() {

  }

  return (

    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post </button>
      <div style={{ display: "flex", justifyContent: "center" }}>

        <div>
          <PostComponent
            name={"harkirat"}
            subtitile={"11000 followers"}
            time={"2m ago"}
            image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            description={" Want to know how to win big ? Check out how these folks won $6000 in bounties "}
          />

        </div>
      </div>

    </div>
  )
}


export default App
