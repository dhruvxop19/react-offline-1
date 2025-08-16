

function App() {

  return (
   
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <div style={{display : "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent
            name = {"harkirat"}
            subtitile = {"20 followers"}
            time = {"2m ago"}
            image = {"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            description = {" Want to know how to win big ? Check out how these folks won $6000 in bounties "}
            />
            <br />
          </div>
          <div>
            <PostComponent
            name = {"raman"}
            subtitile = {"promoted"}
            time={"4m ago"}
            image = {"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            description = {"How to get hired in 2025? I lost my job in 2024, this is the roadmap I followed to get a job "}
             />
            <br />
          </div>
          <div>
            <PostComponent/>
          </div>
        </div>
      </div>
       </div>
  )

}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1 , padding: 20
}

function  PostComponent({name,subtitile,time,image, description}) {
  return <div style={style}>
     <div style={{display: "flex"}}> 
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10 , marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{subtitile}</div>
        <div style={{display : 'flex' }}>      
        <div>{time}</div>
        <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.
        jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" style={{width : 12 , height: 12}} />
        </div>
      </div>
</div>
       <div style={{fontSize : 12}}>
        {description}

       </div>
       </div>
}

export default App
