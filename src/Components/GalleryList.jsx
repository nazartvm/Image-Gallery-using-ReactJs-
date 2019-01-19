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
        setTimeout(function(){
        this.setState({
        imageData:{"images":[{"id":1,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh0n9pHJW1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/17c4qcC","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":3,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh121HEWa1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/10OiOQX","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":4,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh17lfd9R1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/10OiWzY","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":5,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh1d7s3UD1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/144t1wH","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":6,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh1jdFvHR1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/14gfPkZ","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":7,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh1uhYnog1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/11d1JQK","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":8,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh25vNOvI1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/12mCYrB","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":9,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh29fxz111st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/11IIVO4","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":10,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mnh2m1hnS81st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/18EppVH","source_id":1,"copyright":"CC0","site":"unsplash"},{"id":30,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mopqkkwK2M1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/14lL9AE","source_id":8,"copyright":"CC0","site":"unsplash"},{"id":41,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mpp6tjdFhf1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/1715wob","source_id":13,"copyright":"CC0","site":"unsplash"},{"id":128,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mtw7mhZsCe1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/16LIGif","source_id":75,"copyright":"CC0","site":"unsplash"},{"id":183,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mx3tpto69r1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/1j5JfNg","source_id":114,"copyright":"CC0","site":"unsplash"},{"id":205,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_myebwtELvb1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/K6nFeQ","source_id":133,"copyright":"CC0","site":"unsplash"},{"id":386,"url":"https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_n7fgokF2Ul1st5lhmo1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/unsplash/large/1ly3HZ4","source_id":257,"copyright":"CC0","site":"unsplash"},{"id":1145,"url":"https://splashbase.s3.amazonaws.com/jaymantri/regular/tumblr_n98szyIn7X1qfirfao1_1280.jpg","large_url":"https://splashbase.s3.amazonaws.com/jaymantri/large/1lBqfoB","source_id":null,"copyright":"CC0","site":"jaymantri"}]};
        })
        },2000)
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
