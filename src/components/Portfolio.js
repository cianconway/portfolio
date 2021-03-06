import React, { Component } from "react";
export default class Porfolio extends Component {
    render() {
        let projectData = this.props.projectData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h2>Check Out Some of Our Work</h2>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {projectData.portfolio &&
                                projectData.portfolio.map(item => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href="#modal-01">
                                                    <img
                                                        src={`${item.imgurl}`}
                                                        className="item-img"
                                                        alt="previousWork"
                                                    />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
