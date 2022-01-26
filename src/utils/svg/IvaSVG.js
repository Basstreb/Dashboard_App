import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IvaSVG = (props) => (
  <Svg
    width={24}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 3.313A2.813 2.813 0 0 1 6.813.5h5.317v5.935a2.811 2.811 0 0 0 2.813 2.813h5.932v10.315a2.812 2.812 0 0 1-2.813 2.812H15.07a4.377 4.377 0 0 0-4.194-3.125h-.031l2.515-2.516a2.188 2.188 0 1 0-3.093-3.093L7.75 16.156v-.031A4.375 4.375 0 0 0 4 11.794V3.312Zm11.25 20.312c0 .671-.15 1.306-.421 1.875h3.235A5.937 5.937 0 0 0 24 19.562v-7.35a2.812 2.812 0 0 0-.825-1.99l-1.05-1.05v10.39a4.062 4.062 0 0 1-4.063 4.063H15.25Zm-1.245-17.19v-5.35c.095.073.188.153.272.239l5.774 5.773c.088.088.168.18.242.275h-5.35a.937.937 0 0 1-.938-.937ZM3.375 19.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm0-4.375a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm7.5 11.875a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm0-4.375a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.6-6.525a.937.937 0 1 0-1.325-1.325L1.775 23.9A.937.937 0 1 0 3.1 25.225l9.375-9.375Z"
      fill="#A0A0A0"
    />
  </Svg>
)

export default IvaSVG