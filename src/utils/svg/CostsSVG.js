import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CostsSVG = (props) => (
    <Svg
        width={34}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M27.5 15V3c0-1.65-1.35-3-3-3h-21c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3ZM14 13.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Zm19.5-9V21c0 1.65-1.35 3-3 3H5v-3h25.5V4.5h3Z"
        //   fill="#A0A0A0"
        />
    </Svg>
)

export default CostsSVG