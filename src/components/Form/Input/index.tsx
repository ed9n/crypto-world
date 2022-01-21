import React, { ChangeEventHandler } from "react";
import style from "./style.module.scss";
import _ from 'lodash';

interface Props {
    onChange: (value: any) => void;
    placeholder: string
}

class Input extends React.PureComponent<Props> {
    debounceChange = _.debounce(this.props.onChange, 700);

    render() {
        return(
            <input onChange={this.debounceChange} placeholder={this.props.placeholder} />
        )
    }
}

export default Input;
