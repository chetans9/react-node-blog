import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";


class ContactUsComponent extends React.Component{
  constructor(props){

    super(props);

    
   

    this.state = {
      email : '',
      name : '',
      message : '',
      redirect : false
    };
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.set = this.set.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.saveForm = this.saveForm.bind(this);

  }

  async saveForm(){

    let response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/contact-us`, this.state);

    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }



  }
  submitForm(event){

    event.preventDefault();
    this.saveForm();
    this.setState({redirect : '/'});
    //this.props.history.push(`/posts/}`);
  }

  set(name){

    return (event) => {

      this.setState({
        [name] : event.target.value

      });
    }

  }

  

  handleNameChange(event){

    this.setState({
      name : event.target.value
    });

  }

  componentDidMount(){
    
    
  }

  render(){
    
    if(this.state.redirect) return  <Navigate to= "/" state={{alertType : "success", alertMsg : "Form Submitted successfully"}} replace/>
    // <Navigate to= {
    //   {
    //     pathname : this.state.redirect,
    //     state : {msg : 'Form submitted'}
    //   }
    // }/>

    

    

    return (
    <div>
      <form onSubmit={this.submitForm}>
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name *</label>
          <input type="text" className="form-control" value={this.state.name} id="exampleFormControlInput1" placeholder="John Doe" onChange={this.set('name')}  required/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address *</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="john.doe@example.com" value={this.state.email}   onChange={this.set('email')} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={this.set('message')} rows={3} defaultValue={this.state.message}/>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </div>


    );

  }

}


// const ContactUsComponent = () => {

//   return (
//     <div>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
//         </div>

//         <div className="col-auto">
//           <button type="submit" className="btn btn-primary mb-3">Submit</button>
//         </div>
//       </form>
//     </div>



//   );


export default ContactUsComponent;