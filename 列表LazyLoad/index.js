/**
 * Created by Administrator on 2016/7/8.
 */
import React from 'react';
let LIST_SIZE = 10;
export default class LazyLoad extends React.Component {
    state = {
        page: 1,
    };
    
    onScroll() {
        const { element} = this.refs;
        const container = document.querySelector('.container');
        const containerHeight = container.clientHeight;
        const containerScrollTop = container.scrollTop;
        
        if(containerHeight + containerScrollTop >= element.scrollHeight) {
            this.setState({ page: this.state.page + 1 });
        }
    }
    
    render() {
        let  list = [];
        list.splice(0,LIST_SIZE * this.state.page);
        
        return (
            <div  className="container"  ref={ this.onScroll } >
                <ul ref="element"></ul>
            </div>
        )
        
    }
    
}