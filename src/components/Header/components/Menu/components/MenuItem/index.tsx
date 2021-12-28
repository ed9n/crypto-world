import React from "react";
import { NavLinkProps, NavLink } from "react-router-dom";
import style from "./style.module.scss"

interface Active extends NavLinkProps {
    getClass?: () => void
}

const MenuItem = (props: Active) => {

    const getClass = (state: any) => {
        return style.item + (state.isActive ? ` ${style.active}` : '')
    }

    return (
        <NavLink
            {...props}
            className={getClass}>
            {props.title}
        </NavLink>
    )
}

export default MenuItem;