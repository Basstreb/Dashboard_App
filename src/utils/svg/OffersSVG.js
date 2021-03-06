import * as React from "react"
import Svg, { Path } from "react-native-svg"

const OffersSVG = (props) => (
    <Svg
        width={29}
        height={29}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M14.5.75C6.918.75.75 6.918.75 14.5S6.918 28.25 14.5 28.25s13.75-6.168 13.75-13.75S22.082.75 14.5.75Zm1.375 20.508v1.492h-2.75v-1.485C9.909 20.76 9 18.512 9 17.25h2.75c.015.197.219 1.375 2.75 1.375 1.898 0 2.75-.804 2.75-1.375 0-.445 0-1.375-2.75-1.375-4.785 0-5.5-2.585-5.5-4.125 0-1.771 1.415-3.553 4.125-4.008V6.266h2.75v1.525c2.384.564 3.3 2.548 3.3 3.959H17.8l-1.375.025c-.02-.523-.296-1.4-1.925-1.4-1.786 0-2.75.71-2.75 1.375 0 .514 0 1.375 2.75 1.375 4.785 0 5.5 2.585 5.5 4.125 0 1.771-1.415 3.553-4.125 4.008Z"
            // fill="#A0A0A0"
        />
    </Svg>
)

export default OffersSVG