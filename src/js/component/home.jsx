import React, { useState } from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
    const [arrayColor, setColor] = useState([25, 25, 25, 25]);
    const [Add, setAdd] = useState(false);

    return (
        //Verde
        <div className="container bg-dark vh-100" id="semaforo">
            <span onMouseEnter={() => { setColor([100, 25, 25, 25]) }}
                className={
                    `bg-success bg-opacity-${arrayColor[0]}`
                }></span>
            <span onMouseEnter={() => { setColor([25, 100, 25, 25]) }}
                className={
                    ` bg-warning bg-opacity-${arrayColor[1]}`
                }></span>
            <span onMouseEnter={() => {
                setColor([25, 25, 100, 25])
            }
            }
                className={
                    ` bg-danger bg-opacity-${arrayColor[2]}`
                }></span>
            <span onMouseEnter={() => {
                setColor([25, 25, 25, 100])
            }
            }
                className={Add === true ? `
                d-block bg-info bg-opacity-${arrayColor[3]}` : 'd-none'
                }
                ></span>
            <div className="d-flex">
                <button type="button" className="btn btn-outline-light m-2" onClick={() => { setAdd(Add === true ? false : true) }}>+</button>
                <button type="button" className="btn btn-outline-light m-2" >Auto</button>
            </div>
        </div>


    );
};

export default Home;
