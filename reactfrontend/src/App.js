// 전체 수정
import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Api from './Api'
import Post from './components/Post'

class App extends Component {
  state = {
    title: "",
    content: "",
    posts: [],
  }

  _handlingChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handlingSubmit = async (event) => {
    event.preventDefault()
    await Api.createPost({ title: this.state.title, content: this.state.content })
    this._getPosts()
  }

  async _getPosts() {
    const results = await Api.getAllPosts()
    this.setState({
      posts: results.data,
    })
  }

  componentDidMount() {
    this._getPosts()
  }

  _handlingDelete = async(id)=>{
    await Api.deletepost(id)
    this._getPosts()
  }

  render() {
    return (
      <div className="App" >
        <h1>멋쟁이 사자처럼 대나무숲</h1>
        <Form
          handlingChange={this._handlingChange}
          handlingSubmit={this._handlingSubmit}
          title={this.state.title}
          content={this.state.content}
        />
        {
          this.state.posts.map((post) =>
            < div >
              <Post key={post.id} id={post.id} title={post.title} content={post.content} Delete={this._handlingDelete} />
            {/* await 붙이면 앞 실행 기다리고 실행함 */}
            </div>
          )
        }
      </div>
    );
  }
}

export default App;