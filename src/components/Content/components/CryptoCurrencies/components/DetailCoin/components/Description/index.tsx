import DOMPurify from "dompurify";
import React, { useState } from "react";
import style from "./style.module.scss";
import CSS from 'csstype'

const Description: React.FC<{
    description: string,
    name: string,

}> = ({ description, name }) => {
    const [change, setChange] = useState(true);
    const [hide, setHide] = useState(false);

    const mySafeHTML = DOMPurify.sanitize(description)

    const hideText: any = function () {
        let open = style.open;
        let close = style.close;
        if (hide === true) {
            return open
        } else {
            return close
        }
    }
    console.log(hide)

    return (
        <div className={style.block_description}>
            <h2>What is {name}?</h2>
            <div
                className={hideText()}
                dangerouslySetInnerHTML={{ __html: mySafeHTML }}>
            </div>
            <div className={style.block_button}>
                <button
                    onClick={() => hide ? setHide(false) : setHide(true)}>
                    {hide ? <p>Close</p> : <p>Read more</p>}
                </button>
            </div>

        </div>

    )
}

export default Description;