import React from 'react';
import  './Header.css';
class Header extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
      return (

        <div className="header">
          
        <h1 className={this.props.playing?'title-play':'title'}>
        Looper</h1>
        </div>
      );
    }
  }

  export default Header;