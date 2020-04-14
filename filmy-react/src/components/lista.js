import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Lista extends Component{
    state = {
        filmy: ['titanic', 'avatar']
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/filmy/').then(
          res => {
            this.setState({filmy: res.data});
          }
        ).then(
          err => {
            console.log('error', err);
          }
        )
    }
   
  render(){
    return (
    <div>
     <h1 className="glowny">Lista filmow z react</h1>
     {this.state.filmy.map(film => {
         return (
         <Link to={'/detale/'+ film.id + '/'}>
         <img key = {film.id} src= {film.plakat} width="150" height="220" alt="film plakat"/>
         </Link>
         )
     })}
    </div>
  );
}
}
  

export default Lista;
