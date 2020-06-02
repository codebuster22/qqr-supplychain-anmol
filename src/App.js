import React, {Component} from 'react';
import './App.css';
import QRCode from 'qrcode.react';
import Form from './Form.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consigner: "",
      consignee: "",
      articles: "",
      date: "",
      from: "",
      to: "",
      EWB: 0,
      route: 'create',
    }
  };

  handleInputChange = (evt) => {
    const {target} = evt;
    const value = target.type === 'checkbox'? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    })
  };

  handleOnSubmit = async () => {
    console.log("Start Submit")
    const result = await fetch('http://localhost:3001/fillDetails',{
      method: 'POST',
      body: JSON.stringify(this.state),
    })
    const data = await result.json();
    alert("Data Saved");
    this.setState({
      consigner: "",
      consignee: "",
      articles: "",
      date: "",
      from: "",
      to: "",
      EWB: 0
    })
  }

  handleRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
        <div className="App ">
          {this.state.route==='create'?(
              <div className={'app-create'}>
                <h1>Generate QR Code</h1>
                <Form handleInputChange={this.handleInputChange} handleOnSubmit={this.handleOnSubmit} state={this.state} routeChange={this.handleRouteChange}/>
                <QRCode value={this.state.EWB.toString()} renderAs={'canvas'}/>
              </div>
          ):(
              <div className={'app-scan'}>
                <h1>Scan QR Code</h1>
              </div>
          )}
        </div>
    )
  }
}

export default App;
