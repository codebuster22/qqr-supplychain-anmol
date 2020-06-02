import React, {Component} from 'react';
import QrReader from 'react-qr-reader';

class Scan extends Component {

    constructor(props) {
        super(props);
        this.state={
            scan: false,
            result: 'No Result',
            data: {}
        }
    }

    handleScan = data => {
        if(data){
            this.setState({
                result: data,
                scan: false,
            })
            console.log(data);
            this.fetchOrderDetails(data);
        }
    }

    fetchOrderDetails = async (ewb) => {
        try{
            const result = await fetch('https://dry-atoll-26666.herokuapp.com/profile/'+ewb,{
                mode: 'cors',
            });
            const data = await result.json();
            this.setState({data:data});
        }catch (e) {
            alert('Invalid Code');
            console.log(e);
        }
    }

    handleError = err => {
        console.log(err);
    }

    toggleScan = route => {
        this.setState({scan: !this.state.scan})
    }

    render() {
        return (
            <div className={''}>
                {this.state.scan?(
                    <div className={'app-scan-true'}>
                        <QrReader delay={300} onError={this.handleError} onScan={this.handleScan} style={{width: '100%'}}/>
                        <button className={'pointer'} onClick={this.toggleScan}>Stop Scanning</button>
                    </div>
                ):this.state.result==='No Result'?(
                    (
                        <div className={'app-scan-false'}>
                            <button className={'pointer'} onClick={this.toggleScan}>Start Scanner</button>
                        </div>
                    )
                ):(
                    <div className={'app-scan-false'}>
                        <p>EWB:- {this.state.data.EWB}</p>
                        <p>Consigner:- {this.state.data.consigner}</p>
                        <p>Consignee:- {this.state.data.consignee}</p>
                        <p>Articles:- {this.state.data.articles}</p>
                        <p>Date:- {this.state.data.date}</p>
                        <p>From:- {this.state.data.from}</p>
                        <p>To:- {this.state.data.to}</p>
                        <button className={'pointer'} onClick={this.toggleScan}>Start Scanner</button>
                    </div>
                )
                }
                <p className="f6 link dim black db" onClick={()=>this.props.routeChange('create')}>Generate QR Code</p>
            </div>
        )
    }
}

export default Scan