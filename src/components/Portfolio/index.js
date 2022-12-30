import React, { useEffect, useState } from "react";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { addSpan } from "../../lib/utility";

const Portfolio = () => { 
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        console.log('port', port.title);
                        return (
                            <div className="image-box" key={idx}>
                                <div className="image-holder">
                                    <img 
                                    src={'http://localhost:3000/portfolio' + port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                </div>
                                <div className="content">
                                    <h1 className="title">{port.title}</h1>
                                    <h4 className="description">{port.description}</h4>
                                </div>
                                <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="portfolio-page">
                <h1 className="intro">{addSpan('Projects')}</h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
        </>
    );
}

export default Portfolio;