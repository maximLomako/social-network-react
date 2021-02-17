import React, {useState} from "react";

interface ProfileStatusType {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
              <input
                type="text"
                autoFocus
                value={this.props.status}
                onBlur={this.deActivateEditMode.bind(this)}
              />
            </div>
          : <div>
              <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>}
      </div>
    )
  }
}