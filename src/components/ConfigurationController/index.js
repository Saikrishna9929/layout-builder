// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const toggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const toggleShowRightNavbar = event => {
        console.log(event.target.checked)
        onToggleShowRightNavbar(event.target.checked)
      }
      console.log(showRightNavbar)
      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="contentCheckbox"
              onChange={toggleShowContent}
              checked={showContent}
            />
            <label htmlFor="contentCheckbox">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavCheckbox"
              onChange={toggleShowLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavCheckbox">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavCheckbox"
              onChange={toggleShowRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavCheckbox">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
