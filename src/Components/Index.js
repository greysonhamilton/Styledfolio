import React, { useState } from "react";
import { Accord } from "../Assets/Data/Accord";
import { Main, About, Animate, Ul } from "../Assets/Styled";

const Index = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (
        <Main>
            <Animate>
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
            </Animate>
            <About>
                <div tabIndex={2} onClick={() => toggle(!click)}>
                    <div>
                        <p>{click ? 'Greyson Hamilton' : 'Greyson Hamilton...'}</p>
                    </div>
                </div>
                {click && (
                    <Ul>
                        {Accord.map((item, i) => (
                            <li key={item.id}>
                                <span>{item}</span>
                            </li>
                        ))}
                    </Ul>
                )}
            </About>
        </Main>
    );
}

export default Index;