import React from 'react';

const bgBlue = {
    backgroundColor: 'blue',
}

const bgGray = {
    backgroundColor: 'gray',
}

class Footer extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        date: new Date() 
     } 
    }

    render () {
        return (
            <div>
                Footer
            </div>
        )
    }
}

export default Footer;
