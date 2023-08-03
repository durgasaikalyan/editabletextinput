import {Component} from 'react'
import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Input,
  Button,
} from '../styledComponents' // Adjust the import path based on your component structure

class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      editMode: false,
    }
  }

  handleInputChange = event => {
    this.setState({text: event.target.value})
  }

  handleSaveClick = () => {
    this.setState({editMode: false})
  }

  handleEditClick = () => {
    this.setState({editMode: true})
  }

  render() {
    const {text, editMode} = this.state

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          {editMode ? (
            <InputContainer>
              <Input value={text} onChange={this.handleInputChange} />
            </InputContainer>
          ) : (
            <Paragraph>{text}</Paragraph>
          )}
          {editMode ? (
            <Button onClick={this.handleSaveClick}>Save</Button>
          ) : (
            <Button onClick={this.handleEditClick}>Edit</Button>
          )}
        </CardContainer>
      </AppContainer>
    )
  }
}

export default TextInput
