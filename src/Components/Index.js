import React, { useState } from "react";
import { Accord } from "../Assets/Data/Accord";
import { Main, H1, About, Animate, Div } from "../Assets/Styled";

const Index = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (
        <>
            <div>
                <div tabIndex={0} onClick={() => toggle(!click)}>
                    <About>
                        <p>{click ? 'Greyson Hamilton' : 'Greyson Hamilton...'}</p>
                    </About>
                </div>
                {click && (
                    <ul>
                        {Accord.map((item, i) => (
                            <li key={item.id}>
                                <button>
                                    <span>{item}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <Animate>
                    <Div className="1">
                        HTML
                    </Div>
                    <Div className="2">
                        CSS
                    </Div>
                    <Div className="3">
                        JAVASCRIPT
                    </Div>
                    <Div className="4">
                        REACT
                    </Div>
                    <Div className="5">
                        NODE.js
                    </Div>
                </Animate>
            </div>
        </>
    );
}

export default Index;