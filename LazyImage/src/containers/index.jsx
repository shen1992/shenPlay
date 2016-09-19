import React from 'react';
import classnames from 'classnames';
import inViewport from 'in-viewport';
import preImage from '../assets/images/anonymous.png';
import style from './style.scss';
import {render} from 'react-dom';

export default class LazyLoad extends React.Component {
    
    componentDidMount() {
        const { img } = this.refs;
        const offset = { offset: 0 };
        this.props.offset && (offset.offset = parseInt(this.props.offset));
        this.props.src && inViewport(img, offset, () => {
            let image = new window.Image();
            image.src = this.props.src;

            image.onload = () => {
                this.refs.img && (img.src = this.props.src);
            };
        })
    }
    
    render() {
        
        const src = preImage;
        return (
            <img src={src} ref="img" className={ this.props.className } />
        )
    }
}

export default class ToDo extends React.Component {
    render() {
        return (
            <div>
                { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
                    return  <LazyLoad className="img" src="http://jyhd.uliveapp.com/web/hello.png" key={i} />
                }) }
               
            </div>
        )
    }
}

render(
    <ToDo />,
    document.getElementById('app')

)