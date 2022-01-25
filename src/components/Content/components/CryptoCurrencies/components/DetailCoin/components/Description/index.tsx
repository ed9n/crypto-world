import DOMPurify from "dompurify";
import React, { useState } from "react";
import style from "./style.module.scss";

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

    return (
        <div className={style.block_description}>
            <h2>What is {name}?</h2>
            <div
                className={hideText()}
                dangerouslySetInnerHTML={{ __html: mySafeHTML }}>
            </div>
            <div className={style.block_button}>
                <button
                    onClick={() => hide ? setHide(false) : setHide(true)}
                    className={ hide ? style.button_close: style.button_open}
                    >
                    {hide ? <p></p> : <p>Read more</p>}
                </button>
            </div>

        </div>

    )
}

export default Description;