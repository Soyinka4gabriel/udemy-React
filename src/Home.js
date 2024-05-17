const Home = () => {
    return ( 
        <div className="content home">
            <h2>Wow coding is fun</h2>
            <p>Let see what we can do today</p><br/><br/>
            <br/>
            <Example/>
            <br/>
            <ExampleTwo Name="Shoyinka" Age="20" Job="Data Sci."/>
            <ExampleTwo Name="Imole" Age="23" Job="Data Del"/>
            <ExampleTwo Name="Ayoola" Age="24" Job="Data processor"/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <br/>
            
        </div>
     );
}

const Example = ()=>{
    return(
        <div>
            <div>
                <h3>Name : Soyinka</h3>
                <h3>Age : 20</h3>
                <h3>Job : Datta checker</h3> 
                <br/>
                <hr/>
            </div>

            <div>
                <h3>Name : Timi</h3>
                <h3>Age : 20</h3>
                <h3>Job : Datta Mixer</h3><br/><hr/>
            </div>

            <div>
                <h3>Name : Gabriel</h3>
                <h3>Age : 24</h3>
                <h3>Job : Datta Owmer</h3><br/><hr/>
            </div>
        </div>
    )
}

const ExampleTwo =(props)=>{
    return(
        <div>
            <h3>Name : {props.Name}</h3><br/>
            <h3>Age : {props.Age}</h3><br/>
            <h3>Job : {props.Job}</h3><br/><hr/>
        </div>
    )
}
 
export default Home;