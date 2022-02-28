import React from 'react'
import axios from 'axios'
import './Covin.css'


class Covin extends React.Component{
    constructor(){
        super()
        this.state={
            cnews:[],
            name:''
        }
    }

    componentDidMount(){
      const url='https://api.covid19api.com/live/country/south-africa/status/confirmed'
      
      axios.get(url).then((res)=>{
          console.log(res.data[0])
          this.setState({
              cnews:res.data[0]
          })
      })

        
    }

    searchF=(e)=>{
        console.log("searched")
        console.log(this.state.name) // valid
        let countryName= this.state.name
        let nurl= `https://api.covid19api.com/live/country/${countryName}/status/confirmed`
        console.log(nurl)

        axios.get(nurl).then((res)=>{
            console.log(res.data[0])
            this.setState({
                cnews:res.data[0]
            })
        })
    }

    inpCountry=(e)=>{
        this.setState({
            name: e.target.value
        })
        // console.log(this.state.name) // one def     
    }

    render(){
        return(
            <div className='body-wrapper'>
            <span>
                <h4>Covid19 Updates </h4> 
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/94/Coronavirus._SARS-CoV-2.png '  className='cvirus'/> 
            </span>
            <h2>Total Active Cases: {this.state.cnews.Active}</h2>
            <h3>Country: {this.state.cnews.Country}</h3>
            <p className='des'>Confirmed Cases: {this.state.cnews.Confirmed}, 
            Total Deaths: {this.state.cnews.Deaths}, Recovered Cases :{this.state.cnews.Recovered},<br/>
            Last Updated on: {this.state.cnews.Date}
             </p>

             <input  onInput={this.inpCountry} type='text' placeholder='search country' id='country-in'/>
             <button onClick={this.searchF}  className='btn waves-effect waves-light' type='submit' >search</button>

            </div>
            
        )
    }
}

export default Covin