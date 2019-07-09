import React, { useEffect } from "react"
import ResponsiveUtils from "../Responsivness/Responsivness";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import { Input } from "antd"

export default function InputBox({
    style,
    onValueChange,
    ...props }) {

    return <Input
        onChange={e => onValueChange(e.target.value)}
        {...props}
        style={{
            marginBottom: "10px",
            ...style,
        }} />
}