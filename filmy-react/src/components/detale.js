import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Detale extends Component{

  state = {
    film: null
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    axios.get('http://127.0.0.1:8000/api/filmy/'+ id + '/').then(
      res => {
        this.setState({film: res.data});
      }
    ).then(
      err => {
        console.log('error', err);
      }
    )
  }

   render(){
     const baseUrl = "http://127.0.0.1:8000"
      return (
      <div>
        {this.state.film ? (
          <div className="detal">
          <img src= {baseUrl+this.state.film.plakat} width="200"  alt="film plakat"/>
          <div>
            <h1>{this.state.film.tytul} ({this.state.film.rok})</h1>
            <p>{this.state.film.opis}</p>
            <Link to={'/lista/'}>Powrot</Link>
          </div>
          </div>
        ): null}
      
      </div>
    );
  }
}
    
  
  export default Detale;
  