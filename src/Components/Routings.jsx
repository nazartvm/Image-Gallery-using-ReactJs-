import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import ShowImage from './ShowImage';
import Home from './Home';

class Routing extends Component{
render(){
    return(
        <Switch>
                 <Route path='/showimage/:id' component={ShowImage}/>
                 <Route path='/' component={Home}/>
        </Switch>
    )
}
}
export default Routing;