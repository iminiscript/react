import React from 'react';

class Header extends React.Component {

    // All the Functions should above the render;
    yourMethod() {
        const inside = 'Inside the Method';
        console.log('Your Method');
        console.log(inside);
    }
    render() {
        // All the Variable should be inside unless we define them under Method
        const date = 'Maninder';
        // Call the method using this.
        this.yourMethod();
        return (
            <header>
                <h1>This is Header from class component</h1>
                <p>{console.log(date)}</p>
            </header>
        )
    }
}

export default Header;