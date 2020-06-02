import React from 'react';

const Form = ({handleInputChange, handleOnSubmit, state, routeChange}) => {
    return(
        <div className={"app-form"}>
            <main className="pa4 black-80">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Form</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="EWB">EWB</label>
                            <input className="pa2 input-reset ba bg-transparent w-100"
                                   type="number" name="EWB" id="EWB" onChange={handleInputChange} value={state.EWB}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="consigner">Consigner</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                   type="text" name="consigner" id="consigner" onChange={handleInputChange} value={state.consigner}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="consignee">Consignee</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                   type="text" name="consignee" id="consignee" onChange={handleInputChange} value={state.consignee}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="articles">Articles</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                   type="text" name="articles" id="articles" onChange={handleInputChange} value={state.articles}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="date">Date</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                   type="date" name="date" id="date" onChange={handleInputChange} value={state.date}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="from">From</label>
                            <input className="b pa2 input-reset ba bg-transparent  w-100"
                                   type="text" name="from" id="from" onChange={handleInputChange} value={state.from}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="to">To</label>
                            <input className="b pa2 input-reset ba bg-transparent w-100"
                                   type="text" name="to" id="to" onChange={handleInputChange} value={state.to}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" value="Submit" onClick={handleOnSubmit}>Submit</button>
                    </div>
                    <div className="lh-copy mt3">
                        <p href="#0" className="f6 link dim black db" onClick={()=>routeChange('scan')}>Scan QR Code</p>
                    </div>
            </main>
        </div>
    )
}

export default Form;