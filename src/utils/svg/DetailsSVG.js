import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DetailsSVG = (props) => (
  <Svg
    width={32}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M30 0H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 22H2V2h28v20Z"
    //   fill="#9B9999"
    />
    <Path
      d="M7 8h18a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2ZM7 12h18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM7 16h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z"
    //   fill="#9B9999"
    />
  </Svg>
)

export default DetailsSVG