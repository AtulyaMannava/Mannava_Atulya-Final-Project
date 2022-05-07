import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
                    {this.props.coin_Name}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#9E093F" }}>
                                {this.props.mk_Cap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#9E093F" }}>
                                ${this.props.at_high}
                            </p>
                        </div>
                    </div>
                    

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Positive Sentiments </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#9E093F" }}>
                                {this.props.sentiment_positive} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> High 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.high_24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Low 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                                ${this.props.low_24}
                            </p>
                        </div>
                
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "24rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Last Updated</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#9E093F" }}>
                                {this.props.lastupdated}
                            </p>
                        </div>
                    </div>
                    </section>  
               
                <div>
                    <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize:'20px', overflow: 'visible', height: '4px', marginTop: "3%" }}> Current
                        Price</div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '100px',
                        fontWeight: '700', color: "#9E093F", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        ${this.props.currentPrice}
                    </div>
                </div>
             
               
            </div>
        )
    }
}

export default CardSection