import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <div>Hello World!</div>
    }
}

const rootElement = document.getElementById('app');
ReactDOM.render(<HelloWorld />, rootElement);