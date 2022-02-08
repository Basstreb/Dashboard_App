import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditSVG = (props) => (
    <Svg
        width={27}
        height={31}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m19.344 5.03 3.115 3.542-3.115-3.543Zm2.003-3.122-8.422 9.584a3.717 3.717 0 0 0-.853 1.81l-.778 4.432 3.894-.887a3.016 3.016 0 0 0 1.591-.969l8.423-9.584a3.16 3.16 0 0 0 .59-1.006 3.475 3.475 0 0 0 0-2.374 3.16 3.16 0 0 0-.59-1.006 2.732 2.732 0 0 0-.885-.672A2.442 2.442 0 0 0 23.274 1c-.358 0-.712.08-1.043.236-.33.156-.63.384-.884.672v0Z"
            stroke="#9B9999"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M23.059 21.081v5.02c0 .888-.31 1.74-.861 2.367-.552.628-1.3.98-2.08.98H3.94c-.78 0-1.528-.352-2.08-.98C1.31 27.84 1 26.989 1 26.101V7.693c0-.887.31-1.738.861-2.366.552-.628 1.3-.98 2.08-.98h4.412"
            stroke="#9B9999"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default EditSVG
