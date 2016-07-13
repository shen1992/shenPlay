import React from 'react';
export default class LazyLoad extends React.Component {

    loaded = false;
    timer = null;

    onScroll = () => {
        const { element } = this.refs;
        if(!element) {
            return;
        }
        clearInterval(this.timer);
        if(this.loaded) {
            window.removeEventListener('scroll', this.onScroll);
            return;
        }
        const windowHeight = document.body.clientHeight;
        const { scrollY } = window;
        const elementTop = element.offsetTop;

        if(windowHeight + scrollY >= elementTop) {
            this.loaded = true;
            this.timer = setTimeout(() => {
                this.props && this.props.action()
            }, 0);
        }
    };

    componentDidMount() {
        const { element } = this.refs;
        const windowHeight = document.body.clientHeight;
        const { scrollY } = window;
        if( scrollY > element.offsetTop && (windowHeight + scrollY) >= element.offsetTop ) {
            this.loaded = true;
            this.props && this.props.action();
        } else  {
            window.addEventListener('scroll', this.onScroll)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }


    render() {
        return (
            <div style={{height:this.props.height}} ref="element" >
                {
                    this.props.children
                }
            </div>
        )
    }
}
