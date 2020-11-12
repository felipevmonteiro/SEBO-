import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
require('typeface-quicksand')

const Comments = (props) => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comentário em <span class="badge badge-danger">destaque</span> do livro
    </Header>

    <Comment>
      <Comment.Avatar src={props.icon} />
      <Comment.Content>
        <Comment.Author as='a'>
          {props.name}
        </Comment.Author>
        <Comment.Metadata>
          <div>{props.time}</div>
        </Comment.Metadata>
        <Comment.Text> {props.comment} </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    </Comment.Group>  
)

export default Comments;
