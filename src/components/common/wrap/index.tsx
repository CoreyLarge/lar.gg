import React from "react";
import "./wrap.scss";

interface WrapProps {
    children: React.ReactNode
}

export const Wrap = (props: WrapProps) => (
    <div className="wrap">
        {props.children}
    </div>
)
