import React from 'react'
import axios from 'axios'
import config from '../config'


class Imager extends React.Component{
    constructor(){
        super()
        this.state={
            images:[]
        }
    }

    componentDidMount(){
        const url=`https://api.unsplash.com/search/photos?query=food&client_id=${config.uaccess}`  
        axios.get(url).then((res)=>{
            console.log(res.data.results)
            this.setState({
                images:res.data.results
            })
        })  
    }

    render(){

        const imageViewer= this.state.images.map((img,i)=>{
            return( 
                <div className="col s4"  key={i}  >
                    < img src={img.urls.small} />
                    <h6>{img.description}</h6>
                </div>
            )

        })
        console.log(imageViewer)

        return(
            <div className='row'>

                {imageViewer}

            </div>
        )
    }
}

export default Imager



