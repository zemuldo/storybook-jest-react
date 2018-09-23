import React, { Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({hasError: true})
     console.log(error)
    }
    render() {
        
      if(this.state.hasError) {
        return(
          <div>Error Message</div>
      )
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;