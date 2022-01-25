import React, { memo } from "react";
import { NavLinkProps, NavLink } from "react-router-dom";
import style from "./style.module.scss";

const MenuItem = (props: NavLinkProps) => {

    const getClass = (state: any) => {
        return style.item + (state.isActive ? ` ${style.active}` : '')
    }

    return (
        <NavLink
            {...props}
            className={getClass}>
            {props.children}
        </NavLink>
    )
}

export default memo(MenuItem);