import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default class Post extends Component {
    _onDelete = () => {
        this.props.Delete(this.props.id)
    }
    render() {
        const card_style = {
            margin: "2rem",
            padding: "2rem",
        }
        return (
            <div>
                <Paper style={card_style}>
                    <Typography variant="h5" component="h3">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                <h6>글 번호 : {this.props.id}</h6>
                            </Typography>
                            <Typography variant="h5" component="h2">
                                <h3>글 제목 : {this.props.title}</h3>
                            </Typography>
                            <Typography color="textSecondary">
                                <p>글 내용 : {this.props.content}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="small" onClick={this._onDelete}>
                                글 삭제
                                </Button>
                        </CardActions>
                    </Typography>
                </Paper>

            </div>
        )
    }
}