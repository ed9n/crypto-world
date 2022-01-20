import React, { ChangeEventHandler } from "react";
import style from "./style.module.scss";
import _ from 'lodash';

interface Props {
    onChange: (value: any) => void;
}

class Input extends React.PureComponent<Props> {
    debounceChange = _.debounce(this.props.onChange, 700);

    render() {
        return(
            <input onChange={this.debounceChange} />
        )
    }
}

export default Input;
