// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true, container: 'container1', title: 'title1'}

  toDarkMode = () => {
    this.setState(() => ({
      isDark: true,
      container: 'container1',
      title: 'title1',
    }))
  }

  toLightMode = () => {
    this.setState(() => ({
      isDark: false,
      container: 'container2',
      title: 'title2',
    }))
  }

  render() {
    const {isDark, container, title} = this.state
    let changeBtn

    if (isDark === true) {
      changeBtn = (
        <button type="button" className="button" onClick={this.toLightMode}>
          Light Mode
        </button>
      )
    } else {
      changeBtn = (
        <button type="button" className="button" onClick={this.toDarkMode}>
          Dark Mode
        </button>
      )
    }
    return (
      <div className="bg-container">
        <div className={`container ${container}`}>
          <h1 className={title}>Click To Change Mode</h1>
          {changeBtn}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
