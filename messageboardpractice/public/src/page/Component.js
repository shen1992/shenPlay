/**
 * Created by Administrator on 2016/9/19.
 */
import React from 'react'

export default class App extends React.Component{
    render() {
        return(
               <div>
                    <UserInput /> 
                    <CommentList />
               </div>
            )    
    }
}

 class CommentList extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            comment : [],
        }
    }
    fetchComment() {
      $.ajax({
           url: '/list',
            type: 'get',
            dataType: 'json',
            success: (data) => {
            this.setState({
                comment: data
            })
        }
      })
    }

    componentDidMount() {
        this.fetchComment()
    }
    render() {

        const comment = this.state.comment
        
        return(
            <ul>
                {
                    comment.map((items, index) => {
                        return <li key={items._id}>{ items.msg } <span>{ items.author }</span></li>
                    })
                }
            </ul> 
            )
    } 
}

class UserInput extends React.Component {
    constructor(...args) {
        super(...args)
    }
    
    submitComment() {

        const { author, msg } = this.refs

        var params = {
            author: author.value,
            msg: msg.value
        }

        $.ajax({
            url:'/save',
            type: 'post',
            typeType: 'json', 
            data: params,
            success: (data) => {
                console.log(data)
            }
        })
    }
    render() {
      return(
          <form onSubmit={() => this.submitComment()}>
            <input type="text" placeholder="Your name" name="author" ref="author" /><br />
            <textarea placeholder='Your comment' name="msg"  ref="msg" /><br />
            <input type="submit"/>
          </form>
      )
    }
}


