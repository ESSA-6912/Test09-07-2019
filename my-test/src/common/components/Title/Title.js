import React, { useEffect } from "react"
import ResponsiveUtils from "../Responsivness/Responsivness";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";

export default function Title({ style,
    sub,
    ...props }) {
    const size = useWindowSize()

    return <h1 {...props} style={{
        fontSize: sub
            ? ResponsiveUtils.choose({ mobile: 16, other: 18 })
            : ResponsiveUtils.choose({ mobile: 25, other: 40 }),
        opacity: sub ? .6 : 1,
        fontFamily: "'Poppins', sans-serif",
        ...style,
    }} />
}