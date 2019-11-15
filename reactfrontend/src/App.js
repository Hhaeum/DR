// 전체 수정
import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Api from './Api'
import Post from './components/Post'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';



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

  _handlingDelete = async (id) => {
    await Api.deletepost(id)
    this._getPosts()
  }

  render() {
    
    const paper = {
      margin: "1rem",
      padding: "1rem",
    }
    return (
      
      <Container maxWidth="sm">
        <Paper style = {paper}>
          <Typography variant="h5" component="h3">
            <h1>LIKE LION 대나무 숲</h1>
            <Form
              handlingChange={this._handlingChange}
              handlingSubmit={this._handlingSubmit}
              title={this.state.title}
              content={this.state.content}
            />
          </Typography>
        </Paper>
        <Typography component="p">
          {
            
            this.state.posts.map((post) =>
              <div>
                <Post key={post.id} id={post.id} title={post.title} content={post.content} Delete={this._handlingDelete} />
                {/* await 붙이면 앞 실행 기다리고 실행함 */}
              </div>
            )
          }
        </Typography>
      </Container>
    );
  }
}

export default App;

