import React from 'react';

class App extends React.Component{

constructor(props) {
    super(props);
    this.state={
           
    };
}




componentDidMount() {
         // get all entities - GET
         fetch("https://apidev.veehive.ai/v1/auth/register", {
           "method": "POST",
           "headers": {

                "Basic-Auth": "Veehive VmVlaGl2ZURldjpWIyNIIXZlRDN2IQ=="
                
           }
         })
        .then(response => response.json())
         .then(response => {
           this.setState({
             signup: response
           })
         })
         .catch(err => { console.log(err); 
         });
       }
}




export {App};