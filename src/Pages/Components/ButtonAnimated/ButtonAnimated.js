import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = () => (
    <Button animated='fade'>
      <Button.Content hidden>Enviar comentário</Button.Content>
      <Button.Content visible>
        <Icon name='comments'/>
      </Button.Content>
    </Button>

)

export default ButtonAnimated;