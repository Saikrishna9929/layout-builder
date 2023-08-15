// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const contentClassName = showContent ? '' : 'hide'
      const leftNavbarClassName = showLeftNavbar ? '' : 'hide'
      const rightNavbarClassName = showRightNavbar ? '' : 'hide'

      return (
        <div>
          <ul className={leftNavbarClassName}>
            <li>Left Navbar Menu</li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>

          <div className={contentClassName}>
            <h1>Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={rightNavbarClassName}>
            <h1>Right Navbar</h1>
            <ul>
              <li>Ad 1</li>
              <li>Ad 2</li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
