import React, { useEffect, useState } from "react";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { addSpan } from "../../lib/utility";

const Portfolio = () => { 
    const [portfolio, setPortfolio] = useState([]);
    const [lineClamp, setLineClamp] = useState({
        arr:[]
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container ">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box max-w-full h-full sm:h-[400px] sm:max-w-[30%] flex flex-col box-border" key={idx}>
                                <div className="image-holder">
                                    <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                </div>
                                <div className="overflow-auto p-2 h-64">
                                    <h1 className="title">{port.title}</h1>
                                    <h4 
                                        onClick={()=>{
                                                let tmp = lineClamp.arr;
                                                tmp[idx] = !lineClamp.arr[idx];
                                                setLineClamp({arr:tmp});
                                            }
                                        } 
                                        className={`description ${!lineClamp.arr[idx] ? 'line-clamp-2': null}`}
                                    >
                                        { port.description }
                                    </h4>
                                </div>
                                <button
                                        className="hover:translate-y-[-3px] transition-all duration-[0.3s] ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] uppercase text-2xl h-16 font-bold rounded bg-yellow-400"
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
            <div className="portfolio-page ">
                <h1 className="intro">{addSpan('Projects')}</h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
        </>
    );
}

export default Portfolio;