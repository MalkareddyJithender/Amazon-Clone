import React from 'react';
import className from 'classnames';


const Toggle = ({text,clickHandler,icon,active,large}) =>
{
    const buttonClass = className({
        'button-toggle':true,
        'no-icon':!icon,
        active:active,
        large
    });

    const iconClass = `fa fa-fw fa-${icon}`;

    return (
        <button
        id={text}
        className={buttonClass} 
        onClick={clickHandler}
        >
            <i className={iconClass} id="button__icon" aria-hidden="true"></i>
            <span className="button__text">{text}</span>
        </button>   
    );
};

export default Toggle;