import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Loader from './Loader';
class ShowImage extends Component{
    constructor(props){
        super(props);
        //console.log(this.props.match.params.id);
        this.state={
            currentUrl:""
        }
        this.closePopup=this.closePopup.bind(this);
    }
    closePopup(e){
        this.props.history.push(`/`);        
       e.preventDefault();
    }
    componentDidMount() {
        axios.get('http://www.splashbase.co/api/v1/images/'+this.props.match.params.id).then((res)=>{
             //console.log(res.data.large_url);
             this.setState({
                 currentUrl:res.data.large_url
             })
        })
          }
    render(){
        let image;
        if(this.state.currentUrl!=""){
            image=<img src={this.state.currentUrl} alt="Smiley face" />;
        }
        else{
            image=<Loader />;
        }
        return(
            <div className="testpopup">
                {/* <Link to="/">Close</Link> */}
                {/* <button type="button" onClick={this.closePopup}>Close</button> */}
                <button type="button" class="close" aria-label="Close" onClick={this.closePopup}>
  <span aria-hidden="true">&times;</span>
</button>
                {image}
            </div>
        )
    }
}

export default ShowImage;