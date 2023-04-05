import React from "react";

const Card = (props) => {
    const ctx = React.Children.map(props.children, callback => <div>{callback}</div>)
    return <div className="card">
        <div className="card-body">
            {ctx}
        </div>
    </div>
};

export default Card;