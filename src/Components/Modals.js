import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
import {connect} from "react-redux"
import {addmovie , edit} from "../Actions/actionFunc"


class Modals extends Component {
    state={
    
    title : this.props.movie? this.props.movie.title : "",

    img : this.props.movie? this.props.movie.img : "",

    rating : this.props.movie? this.props.movie.rating : "",

    

    discriptionM:this.props.movie? this.props.movie.discriptionM : "",

      show:false
    }
//ajout un movieName
    movieName=(e)=>{

      this.setState({

        title: e.target.value
      })

    }
 //Movie discription 
 movieDiscription=(e)=>{
   this.setState({
     discriptionM:e.target.value
   })
 }   
//Movie url
moviImage=(e)=>{
  this.setState({
    img: e.target.value
  })
}

//movie rate

moviRate=(e)=>{
  this.setState({
    rating: Number(e.target.value)
  })
}

hundelInput=()=>{
  this.props.movie?
  this.props.edit({img:this.state.img,
    title:this.state.title,
    rating:this.state.rating,
    id:this.props.movie.id,
    discriptionM:this.state.discriptionM
    })

    &&

    this.setState({
      show: false
    })
    :
    this.props.addmovie({title:this.state.title,
      img:this.state.img,
      rating:this.state.rating,
      discriptionM:this.state.discriptionM})
      &&
  
      this.setState({
        show: false

      })
      this.setState({
        title : "",

    img :  "",

    rating : "",

    

    discriptionM: "",
      })

}


  handleShow = () =>{
    
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
    <Button variant="secondary" className={this.props.movie ?  "Modal-cont" : "Modal-add"} onClick={this.handleShow}>
    <img className="Modal-img" src="https://pngimage.net/wp-content/uploads/2018/06/icon-add-png-7.png"/>
     
    </Button>
    <Modal className="Modal-content" show={this.state.show} onHide={this.handleShow} animation={false} >
      <Modal.Header style={{background: "#00FFFF"}} closeButton>
        
      </Modal.Header>

      <Modal.Body className="Modal-input" >
        
        <form >
          <label className="MN fname">Movie's Name</label>
          <input className="title-input input"  placeholder=" " name='title' type='text' onChange={this.movieName} value={this.state.title}/>
          <label className="MI fname">Upload Banner</label>
          <input className="img-input input" placeholder=" " name='image' type='text' onChange={this.moviImage} value={this.state.img}/>
          <label className="MR fname">Movie Rating</label>
          <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.moviRate} value={this.state.rating}/>
          <label className="MD fname">Description</label>
          <input className="rating-input input" placeholder=" " name='rating' type='text'  onChange={this.movieDiscription} value={this.state.discriptionM}/>

          
          </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleShow}>
          Close
        </Button>
        <Button variant="primary" onClick={
          ()=>{this.hundelInput()}
           
           }>

          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    );
  }
}




export default connect(null,{addmovie , edit})(Modals)