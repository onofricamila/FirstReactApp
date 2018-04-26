import React from 'react';

// this fx dowa not return jsx, it returns another fx
const withClass = (WrappedComponent, className) => {
    return (props) => ( // this fx is a component
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withClass;