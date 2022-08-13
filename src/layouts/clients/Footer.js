import React from 'react';

const bgBlue = {
    backgroundColor: 'blue',
    fontSize: '20px'
}

class Footer extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        date: new Date() 
     } 
    }
    
    log() { 
        console.log("Event is fired"); 
    }

    render () {
        return (
            <div style={bgBlue}>
                Footer
                <div onClick={this.log}> log </div>
            </div>
        )
    }
}

export default Footer;
