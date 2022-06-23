import React, {useState} from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
    const [Color, setColor] = useState(25);
    const [selector, setselector] = useState(false);
    return (
        <div className="container bg-dark vh-100" id="semaforo">
            <span onMouseEnter={
                    () => {
                        setselector(true);
                    }
                }
                className={
                    `position-absolute top-0 start-50 translate-middle-x my-5 bg-success bg-opacity-${
                        selector == true ? (onmouseleave =() => {
                            setselector(false),
                            setColor(25);
                        }) : setColor(100)
                    }`
            }></span>
        <span onMouseEnter={
                () => setColor(100)
            }
            className={
                `position-absolute top-50 start-50 translate-middle bg-warning bg-opacity-${Color}`
        }></span>
        <span onMouseEnter={
                () => setColor(100)
            }
            className={
                `position-absolute bottom-0 start-50 translate-middle-x my-5 bg-danger bg-opacity-${Color}`
        }></span>
    </div>
    );
};

export default Home;
