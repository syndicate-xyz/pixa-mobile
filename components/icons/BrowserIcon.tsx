import { IconProps } from '@/interfaces'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const BrowserIcon = ({ color = 'white', style }: IconProps) => {
  return (
    <Svg width={20} height={21} viewBox='0 0 20 21' fill='none' style={style}>
      <Path
        d='M18.4375 11.5C18.9898 11.5 19.4375 11.0523 19.4375 10.5C19.4375 9.94772 18.9898 9.5 18.4375 9.5V11.5ZM18 10.5C18 14.9183 14.4183 18.5 10 18.5V20.5C15.5228 20.5 20 16.0228 20 10.5H18ZM10 18.5C5.58172 18.5 2 14.9183 2 10.5H0C0 16.0228 4.47715 20.5 10 20.5V18.5ZM2 10.5C2 6.08172 5.58172 2.5 10 2.5V0.5C4.47715 0.5 0 4.97715 0 10.5H2ZM10 2.5C14.4183 2.5 18 6.08172 18 10.5H20C20 4.97715 15.5228 0.5 10 0.5V2.5ZM10 18.5C9.78721 18.5 9.50566 18.4056 9.16241 18.0738C8.81434 17.7373 8.45521 17.2021 8.13192 16.4631C7.48665 14.9882 7.0625 12.8807 7.0625 10.5H5.0625C5.0625 13.0898 5.51979 15.4823 6.29961 17.2648C6.68887 18.1545 7.1782 18.9373 7.77228 19.5117C8.37118 20.0907 9.12548 20.5 10 20.5V18.5ZM7.0625 10.5C7.0625 8.11928 7.48665 6.01177 8.13192 4.53686C8.45521 3.79792 8.81434 3.26272 9.16241 2.92621C9.50566 2.59436 9.78721 2.5 10 2.5V0.5C9.12548 0.5 8.37118 0.909315 7.77228 1.48832C7.1782 2.06266 6.68887 2.84548 6.29961 3.73522C5.51979 5.51767 5.0625 7.91015 5.0625 10.5H7.0625ZM10 20.5C10.8745 20.5 11.6288 20.0907 12.2277 19.5117C12.8218 18.9373 13.3111 18.1545 13.7004 17.2648C14.4802 15.4823 14.9375 13.0898 14.9375 10.5H12.9375C12.9375 12.8807 12.5133 14.9882 11.8681 16.4631C11.5448 17.2021 11.1857 17.7373 10.8376 18.0738C10.4943 18.4056 10.2128 18.5 10 18.5V20.5ZM14.9375 10.5C14.9375 7.91015 14.4802 5.51767 13.7004 3.73522C13.3111 2.84548 12.8218 2.06266 12.2277 1.48832C11.6288 0.909315 10.8745 0.5 10 0.5V2.5C10.2128 2.5 10.4943 2.59436 10.8376 2.92621C11.1857 3.26272 11.5448 3.79792 11.8681 4.53686C12.5133 6.01177 12.9375 8.11928 12.9375 10.5H14.9375ZM1 11.5L18.4375 11.5V9.5L1 9.5L1 11.5Z'
        fill={color}
      />
    </Svg>
  )
}

export default BrowserIcon
