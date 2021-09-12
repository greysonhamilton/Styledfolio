import React, { useState } from "react";
import { Accord } from "../Assets/Data/Accord";
import { Main, About, Animate, Ul, Skill, P } from "../Assets/Styled";

const Index = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (
        <Main>
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
            <Animate>
                <Skill className="1">
                    <P>HTML</P>
                </Skill>
                <Skill className="2">
                    <P>CSS</P>
                </Skill>
                <Skill className="3">
                    <P>JAVASCRIPT</P>
                </Skill>
                <Skill className="4">
                    <P>REACT</P>
                </Skill>
                <Skill className="5">
                    <P>NODE.js</P>
                </Skill>
            </Animate>
        </Main>
    );
}

export default Index;