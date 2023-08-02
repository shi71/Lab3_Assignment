import React from 'react';

//function Header({ children, className }) {
function Header(props) {
    const { children, ...extra } = props;

    // children is what's inside the <Header> tag
    // extra is a JSON object with { className: 'top-header', id: 'header', title: 'This is the header' }
    
    return (
        /*<header className={props.className} id={props.id}>
                {props.children}
        </header>*/

        <header {...extra}>
            {children}
        </header>
    );
}

export default Header;