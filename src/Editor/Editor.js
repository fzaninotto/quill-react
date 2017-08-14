// @flow
import React from 'react'

export default class extends React.Component {

  props: {
    containerStyle: ?Object,
    containerClass: ?string,
    editorStyle: ?Object,
    editorClass: ?string,
    editorID: ?string,
    modules: ?Object,
  }

  static defaultProps = {
    containerStyle: {},
    containerClass: '',
    editorStyle   : {},
    editorClass   : '',
    editorID      : 'quill-react',
    modules       : {}
  }

  defaultModules = {
    toolbar: true,
  }

  Quill

  editor

  componentDidMount() {
    const { editorID, modules } = this.props

    this.Quill  = require('quill')
    this.editor = new this.Quill(`#${editorID}`, {
      modules: {
        ...this.defaultModules,
        ...modules,
      },
      theme  : 'snow'
    })
  }

  render() {
    const { containerStyle, containerClass }     = this.props
    const { editorStyle, editorClass, editorID } = this.props

    return (
      <div style={containerStyle} className={containerClass}>

        <div style={editorStyle} className={editorClass} id={editorID} />

      </div>
    )
  }

}