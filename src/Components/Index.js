import React, { useState } from "react";
import { Accord } from "../Assets/Data/Accord";
// import { Main, About, Animate, Div } from "../Assets/Styled";

const Index = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (
        <div>
            <div>
                <div className="1">
                    HTML
                </div>
                <div className="2">
                    CSS
                </div>
                <div className="3">
                    JAVASCRIPT
                </div>
                <div className="4">
                    REACT
                </div>
                <div className="5">
                    NODE.js
                </div>
            </div>
            <div>
                <div tabIndex={2} onClick={() => toggle(!click)}>
                    <div>
                        <p>{click ? 'Greyson Hamilton' : 'Greyson Hamilton...'}</p>
                    </div>
                </div>
                {click && (
                    <ul>
                        {Accord.map((item, i) => (
                            <li key={item.id}>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Index;