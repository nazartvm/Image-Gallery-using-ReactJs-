import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Loader from './Loader'
class GalleryList extends Component{
    constructor(props){
          super(props);
          this.state={imageData:[]};
    }
    componentDidMount() {
        axios.get('//splashbase.co/api/v1/images/search?query=laptop')
        .then(res => {
          //const posts = res.data.data.children.map(obj => obj.data);
          //console.log(res);
          this.setState({ imageData:res.data.images });
          //console.log(this.state.imageData);
        });
          }
    render(){
        let constructionData;
        if(this.state.imageData.length>=1){
            constructionData= <ImageList ImagesList={this.state.imageData}/>;
        }
        else{
            constructionData=<Loader />;
        }
        return(
            <div className="container-fluid image-list">
                
               {constructionData}
            </div>
        )
    }
}
const ImageList=(props)=>{
    return(
       <div className="row">
           {props.ImagesList.map((item)=>
           <div key={item.id} className="col-md-4">
                  <Link to={`/showimage/${item.id}`}>Show Maximized Image</Link>
            <img src={item.url} className="img-responsive image-gallery"/>
              </div>
           )}
       </div>
    )
}
export default GalleryList;
