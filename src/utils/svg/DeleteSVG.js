import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DeleteSVG = (props) => (
  <Svg
    width={29}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.76 3.15h-.302c.166 0 .302-.157.302-.35v.35h11.48V2.8c0 .193.136.35.302.35h-.302V6.3h2.718V2.8c0-1.544-1.083-2.8-2.416-2.8H8.458C7.125 0 6.042 1.256 6.042 2.8v3.5H8.76V3.15ZM27.792 6.3H1.208C.54 6.3 0 6.926 0 7.7v1.4c0 .193.136.35.302.35h2.28l.933 22.881C3.575 33.823 4.641 35 5.928 35h17.144c1.291 0 2.352-1.172 2.413-2.669l.932-22.881h2.28c.167 0 .303-.157.303-.35V7.7c0-.774-.54-1.4-1.208-1.4ZM22.78 31.85H6.219l-.914-22.4h18.39l-.914 22.4Z"
    //   fill="#9B9999"
    />
  </Svg>
)

export default DeleteSVG
