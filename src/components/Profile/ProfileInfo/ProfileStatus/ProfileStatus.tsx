import React from "react";

interface ProfileStatusType {
  status: string
  updateStatus: any
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (event: { target: HTMLInputElement; }) => {
    this.setState({
      status: event.target.value
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
              value={this.state.status}
              onChange={this.onStatusChange}
              onBlur={this.deActivateEditMode}
            />
          </div>
          : <div>
            <span onDoubleClick={this.activateEditMode}>{'no status' && this.props.status}</span>
          </div>}
      </div>
    )
  }
}