import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class Create extends Component {
    render() {
        const form_style = {
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
        }
        return (
            <div>
                <form style={form_style} onSubmit={this.props.handlingSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="제목"
                        margin="normal"
                        variant="outlined"
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                    />
                    <TextField
                        label="글 내용"
                        placeholder="글을 작성해 주세요."
                        multiline
                        margin="normal"
                        variant="outlined"
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />
                    <Button variant="outlined" color="secondary" type="submit">
                        업로드
                    </Button>
                </form>
            </div>
        )
    }
}