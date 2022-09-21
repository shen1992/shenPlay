import React from 'react';
import classnames from 'classnames'
import {render} from 'react-dom';
import style from './style.scss';

let instance =[];

//组件1
export default class Modal extends React.Component {

    onClickMask = () => {
      Modal.close();
    };
    closeModal = () => {
        if(this.props.onClose) {
            this.props.onClose();
            Modal.close();
        }else {
            Modal.close();
        }
    }

    onBackropCloseable = () => {
        if(this.props.backropCloseable) {
            this.closeModal();
        }
    }


    render() {

        const { className, type, title, ...other } = this.props;
        const classname = classnames({ 'Modal_new': true, 'className': className, 'Modal--small': type === 'small' });
        return (
            <div {...other}
                className={classname}
                onClick={ () => this.onBackropCloseable() }
            >
                <div className="Modal_container" onClick={ (e) => e.stopPropagation() }>
                    {
                         <header className="Modal_header">{ title ? title : null }<span className="Modal_header_close">X</span></header>
                    }
                    <div className="Modal_content">{ this.props.children }</div>
                    <footer className="Modal_footer" >
                        {this.props.okText ?
                            <span onClick={ () => this.closeModal() }>{this.props.okText}</span>
                            :
                            null}
                        { this.props.cancel ? this.props.cancel : null }
                    </footer>
                </div>
            </div>
        )
    }
}

Modal.show = (modal, id) => {
    const target = document.createElement('div');
    const target_id = id ? `Modal_id_${id}}` : `Modal_${Date.now()}`;
    target.id = target_id;
    instance.push(target_id);
    if(!React.isValidElement(modal)) {
        modal = createModal(modal);
    }
    document.body.appendChild(target);
    render(modal, target);
}
function createModal(props){
    return <Modal {...props}></Modal>
}
Modal.close = (id) => {
    const target_id = id ? `Modal_id_${id}` : instance.pop();
    if(id) {
        const index = instance.indexOf(target_id);
        if(index != -1) {
            instance.splice(index, 1);
        } else {
            console.log('no matching id');
        }
    }
    const Modal = document.getElementById(target_id);
    document.body.removeChild(Modal);
}


//实例
export default class ToDo extends React.Component {
        clickHandle = () => {
            Modal.show({
                id: '123',
                title: '我的弹框组件',
                children: ( <div><div>123</div><div>123</div><div>123</div><div>123</div><div>123</div></div> ),
                okText:'返回',
                backropCloseable: true,
                onClose: function () {
                    alert('hello');
                },
                type: 'small'
            },
                '123');
    }
    render() {
        return (
            <button  onClick={ () => this.clickHandle() } >点我</button>
        )
    }
}

render(
    <ToDo />,
    document.getElementById('app')
)