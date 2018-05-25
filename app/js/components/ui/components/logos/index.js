import React from 'react'
import styled from 'styled-components'

const StyledBug = styled.svg`
  display: block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

const logoRatio = 0.118387909
const getHeight = width => Math.floor(width * logoRatio)

const Logo = ({ width = 180, color = 'white', noShadows, ...rest }) => (
  <svg width={width} height={getHeight(width)} viewBox="0 0 397 47" {...rest}>
    <g id="Canvas" fill="none">
      <g id="blockstack-logoRev">
        <g id="BLOCKSTACK">
          <path
            id="Fill 13"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 11.8126 16.5144C 11.8126 17.6257 11.4675 18.4162 10.76 18.9298C 9.99869 19.4855 8.84481 19.7657 7.3348 19.7657L 5.15209 19.7657L 5.15209 13.6145L 7.3348 13.6145C 11.3488 13.6145 11.8126 15.2686 11.8126 16.5144ZM 9.83408 8.761C 9.26109 9.25024 8.24809 9.49648 6.82197 9.49648L 5.15209 9.49648L 5.15209 4.36268L 6.92327 4.36268C 8.24176 4.36268 9.22311 4.5668 9.84357 4.97018C 10.3865 5.32173 10.6492 5.89845 10.6492 6.73761C 10.6492 7.63186 10.3817 8.29282 9.83408 8.761ZM 12.9617 11.1829C 13.6645 10.7893 14.2343 10.2725 14.668 9.64229C 15.374 8.6071 15.7333 7.465 15.7333 6.24675C 15.7333 5.0933 15.5053 4.097 15.0574 3.287C 14.6095 2.47213 13.9795 1.81441 13.1849 1.33003C 12.4204 0.863464 11.5103 0.520022 10.4815 0.309421C 9.47636 0.10368 8.37313 4.34399e-09 7.19868 4.34399e-09L 0.590393 4.34399e-09C 0.264331 4.34399e-09 0 0.270541 0 0.604263L 0 23.5225C 0 23.8562 0.264331 24.1268 0.590393 24.1268L 7.74633 24.1268C 9.01892 24.1268 10.214 23.9858 11.2982 23.7056C 12.403 23.4205 13.3796 22.9685 14.2011 22.3674C 15.04 21.7535 15.7 20.9742 16.1638 20.0492C 16.6276 19.1242 16.8618 18.0307 16.8618 16.7946C 16.8618 15.0969 16.3743 13.7231 15.4088 12.709C 14.7804 12.0496 13.9605 11.5393 12.9617 11.1829Z"
            transform="translate(90.9452 12.3691)"
            fill={color}
          />
          <path
            id="Fill 9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 15.04 19.4838L 5.11727 19.4838L 5.11727 0.604263C 5.11727 0.270541 4.85293 4.34399e-09 4.52687 4.34399e-09L 0.590392 4.34399e-09C 0.264331 4.34399e-09 -8.2959e-07 0.270541 -8.2959e-07 0.604263L -8.2959e-07 23.5225C -8.2959e-07 23.8562 0.264331 24.1268 0.590392 24.1268L 15.04 24.1268C 15.366 24.1268 15.6304 23.8562 15.6304 23.5225L 15.6304 20.0881C 15.6304 19.7544 15.366 19.4838 15.04 19.4838Z"
            transform="translate(123.826 12.3691)"
            fill={color}
          />
          <path
            id="Fill 11"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 13.5236 12.3732C 13.5236 13.6125 13.4144 14.7417 13.196 15.7266C 12.9807 16.7067 12.68 17.5459 12.3017 18.2231C 11.9376 18.8759 11.4992 19.3781 10.9959 19.7199C 10.0034 20.4004 8.70552 20.3744 7.7495 19.7199C 7.24616 19.3781 6.80772 18.8759 6.44367 18.2247C 6.0638 17.541 5.76939 16.7051 5.56837 15.7331C 5.36102 14.7417 5.25497 13.6109 5.25497 12.3732C 5.25497 9.927 5.65859 7.99757 6.45475 6.64001C 7.20343 5.36344 8.16262 4.74298 9.39089 4.74298C 10.616 4.74298 11.5768 5.36344 12.3239 6.64001C 13.12 7.99595 13.5236 9.92376 13.5236 12.3732ZM 16.2065 3.34653C 15.3914 2.27409 14.3863 1.43654 13.2261 0.861439C 10.9088 -0.288766 7.86821 -0.285526 5.55412 0.861439C 4.39075 1.43816 3.38882 2.27409 2.57367 3.34653C 1.76643 4.40602 1.12855 5.7166 0.67745 7.23941C 0.227928 8.74764 1.39863e-06 10.4746 1.39863e-06 12.3732C 1.39863e-06 14.2962 0.227928 16.0409 0.675867 17.5589C 1.12697 19.0914 1.76326 20.423 2.56734 21.5165C 3.38249 22.6246 4.386 23.4865 5.55096 24.0778C 6.70958 24.6658 8.00275 24.9623 9.39089 24.9623C 10.779 24.9623 12.069 24.6658 13.2292 24.0778C 14.3926 23.4865 15.3977 22.6246 16.2129 21.5165C 17.0153 20.423 17.6516 19.0914 18.1059 17.5589C 18.5523 16.0393 18.7786 14.2945 18.7786 12.3732C 18.7786 10.4778 18.5523 8.75088 18.1043 7.23941C 17.6501 5.7166 17.0138 4.40602 16.2065 3.34653Z"
            transform="translate(153.147 11.9541)"
            fill={color}
          />
          <path
            id="Fill 29"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 15.9928 18.1398C 15.8805 18.0135 15.7206 17.9406 15.5544 17.9406C 15.3866 17.9406 15.2283 18.0135 15.116 18.1398C 14.524 18.8089 13.8924 19.3322 13.2371 19.695C 11.9345 20.4159 10.0683 20.3673 8.70394 19.6983C 7.998 19.3548 7.38861 18.8559 6.89002 18.2192C 6.38036 17.5696 5.97674 16.7547 5.69183 15.7941C 5.40375 14.8188 5.25656 13.6945 5.25656 12.4471C 5.25656 11.224 5.40375 10.1176 5.69183 9.15528C 5.97674 8.20433 6.37561 7.39271 6.8742 6.74146C 7.36488 6.10318 7.96476 5.60746 8.65329 5.26402C 9.9797 4.60467 11.7873 4.57389 13.0156 5.19274C 13.6281 5.50054 14.1916 5.91526 14.6918 6.42718C 14.8057 6.54382 14.9703 6.59566 15.1239 6.60376C 15.2853 6.5989 15.4373 6.52762 15.5481 6.4045L 17.7735 3.88053C 17.984 3.64239 17.9745 3.27627 17.7514 3.04947C 16.9853 2.26376 16.0277 1.55744 14.9054 0.945077C 12.5265 -0.352549 9.19303 -0.245629 6.61303 0.849497C 5.2708 1.42136 4.09476 2.26052 3.11816 3.34593C 2.14472 4.42971 1.37389 5.7646 0.823069 7.31657C 0.276995 8.86043 1.84131e-06 10.623 1.84131e-06 12.5524C 1.84131e-06 14.5062 0.276995 16.2736 0.823069 17.8061C 1.37547 19.3484 2.14789 20.6687 3.12291 21.7282C 4.1011 22.7925 5.26763 23.6074 6.58454 24.1517C 7.89195 24.6928 9.31966 24.9665 10.8281 24.9665C 12.327 24.9665 13.7057 24.6555 14.9229 24.0464C 16.1305 23.4405 17.229 22.5608 18.1898 21.4301C 18.3861 21.2 18.3829 20.8566 18.1835 20.6282L 15.9928 18.1398Z"
            transform="translate(185.685 11.9512)"
            fill={color}
          />
          <path
            id="Fill 27"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 10.9183 9.59855L 17.5551 0.978485C 17.6959 0.797044 17.7229 0.549183 17.6231 0.340202C 17.525 0.132841 17.3177 1.10238e-08 17.0913 1.10238e-08L 12.6752 1.10238e-08C 12.4948 1.10238e-08 12.3239 0.0858604 12.2099 0.231661L 5.18533 9.39928L 5.18533 0.604263C 5.18533 0.270541 4.92099 1.10238e-08 4.59493 1.10238e-08L 0.590385 1.10238e-08C 0.264324 1.10238e-08 7.37305e-08 0.270541 7.37305e-08 0.604263L 7.37305e-08 23.5241C 7.37305e-08 23.8579 0.264324 24.1284 0.590385 24.1284L 4.59493 24.1284C 4.92099 24.1284 5.18533 23.8579 5.18533 23.5241L 5.18533 17.0457L 7.74317 13.8203L 12.9063 23.8076C 13.0092 24.0053 13.2087 24.1284 13.4287 24.1284L 17.8463 24.1284C 18.0568 24.1284 18.2499 24.0134 18.3544 23.8287C 18.462 23.644 18.4652 23.4156 18.3607 23.2293L 10.9183 9.59855Z"
            transform="translate(218.431 12.3691)"
            fill={color}
          />
          <path
            id="Fill 25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 16.2997 13.2296C 15.8296 12.7015 15.2693 12.2284 14.6299 11.825C 14.0078 11.433 13.3177 11.0863 12.6023 10.8028L 9.64871 9.50032C 9.14379 9.28972 8.65628 9.09046 8.1846 8.90254C 7.7604 8.73406 7.38527 8.53804 7.06712 8.31772C 6.77588 8.11522 6.55429 7.89327 6.38968 7.64055C 6.24722 7.42347 6.17917 7.16103 6.17917 6.83865C 6.17917 6.19227 6.42133 5.72084 6.93733 5.3531C 7.50557 4.94972 8.31915 4.74398 9.3559 4.74398C 10.2993 4.74398 11.1571 4.90436 11.9026 5.2235C 12.6719 5.55074 13.4206 6.00597 14.1281 6.57621C 14.3798 6.78033 14.7486 6.73983 14.9512 6.48225L 17.0057 3.88862C 17.2004 3.64075 17.1766 3.27949 16.9487 3.06565C 15.9626 2.13091 14.804 1.37922 13.5013 0.830041C 11.0986 -0.185703 8.23683 -0.244024 6.03513 0.51738C 5.02212 0.865682 4.13416 1.36302 3.39815 1.99159C 2.65422 2.62663 2.06224 3.37993 1.63805 4.23206C 1.21068 5.09552 0.993835 6.04323 0.993835 7.04763C 0.993835 7.96941 1.14896 8.80372 1.45128 9.52948C 1.7536 10.2455 2.1588 10.8838 2.66214 11.4233C 3.15123 11.9498 3.71154 12.4082 4.32884 12.7889C 4.92557 13.1534 5.54445 13.4661 6.14117 13.6994L 9.2166 15.0796C 9.75476 15.2854 10.2518 15.4895 10.7108 15.6952C 11.1366 15.888 11.5038 16.097 11.7998 16.3141C 12.0625 16.5085 12.2651 16.7353 12.4044 16.9831C 12.5342 17.218 12.6007 17.5177 12.6007 17.8758C 12.6007 18.5675 12.3316 19.1086 11.7776 19.5282C 11.1777 19.985 10.247 20.2151 9.01242 20.2151C 8.00891 20.2151 6.99906 19.9915 6.01613 19.5476C 5.01737 19.0972 4.10724 18.5011 3.31267 17.7769C 3.19554 17.6668 3.03569 17.5955 2.88057 17.6247C 2.72387 17.636 2.57507 17.7105 2.47377 17.8336L 0.143859 20.6022C -0.0634897 20.8469 -0.0444928 21.2162 0.186599 21.4365C 1.35472 22.5576 2.70804 23.4356 4.20697 24.0448C 5.71223 24.6555 7.30455 24.9633 8.94594 24.9633C 10.3072 24.9633 11.5465 24.7705 12.6323 24.3882C 13.7245 24.001 14.6647 23.468 15.4229 22.8038C 16.1937 22.1299 16.792 21.3377 17.1988 20.4467C 17.6135 19.5509 17.8224 18.5805 17.8224 17.5615C 17.8224 16.651 17.6879 15.8281 17.4235 15.1201C 17.1592 14.4106 16.7825 13.7755 16.2997 13.2296Z"
            transform="translate(249.531 11.9541)"
            fill={color}
          />
          <path
            id="Fill 20"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 18.6694 -9.9295e-09L 0.590393 -9.9295e-09C 0.264332 -9.9295e-09 7.8125e-08 0.270541 7.8125e-08 0.604263L 7.8125e-08 4.03868C 7.8125e-08 4.3724 0.264332 4.64294 0.590393 4.64294L 7.05305 4.64294L 7.05305 23.5241C 7.05305 23.8579 7.31739 24.1284 7.64345 24.1284L 11.6163 24.1284C 11.9424 24.1284 12.2067 23.8579 12.2067 23.5241L 12.2067 4.64294L 18.6694 4.64294C 18.9954 4.64294 19.2598 4.3724 19.2598 4.03868L 19.2598 0.604263C 19.2598 0.270541 18.9954 -9.9295e-09 18.6694 -9.9295e-09Z"
            transform="translate(280.734 12.3691)"
            fill={color}
          />
          <path
            id="Fill 18"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 10.115 5.89035C 10.2749 6.50433 10.4363 7.11993 10.6009 7.73878C 10.9428 9.02344 11.2736 10.2725 11.5965 11.4972L 12.1679 13.5287L 8.051 13.5287L 8.62239 11.4972C 8.96587 10.2789 9.30302 9.0283 9.63541 7.75174C 9.79686 7.13451 9.95513 6.51243 10.115 5.89035ZM 13.067 0.417962C 12.9878 0.170101 12.7631 6.59932e-09 12.5066 6.59932e-09L 7.84839 6.59932e-09C 7.59198 6.59932e-09 7.36722 0.170101 7.28807 0.417962L 0.0292543 23.3378C -0.0293097 23.5209 0.000766166 23.7234 0.113147 23.8789C 0.223944 24.0361 0.401216 24.1284 0.589572 24.1284L 4.63051 24.1284C 4.89326 24.1284 5.12594 23.9486 5.19875 23.691L 6.82114 17.927L 13.3946 17.927L 14.9838 23.6877C 15.0566 23.947 15.2892 24.1284 15.5536 24.1284L 19.7655 24.1284C 19.9538 24.1284 20.1311 24.0361 20.2419 23.8789C 20.3543 23.7234 20.3843 23.5209 20.3258 23.3378L 13.067 0.417962Z"
            transform="translate(312.144 12.3682)"
            fill={color}
          />
          <path
            id="Fill 22"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 15.9928 18.1398C 15.8805 18.0135 15.7206 17.9406 15.5544 17.9406C 15.3866 17.9406 15.2283 18.0135 15.116 18.1398C 14.524 18.8089 13.8924 19.3322 13.2371 19.695C 11.9345 20.4159 10.0699 20.3673 8.70393 19.6983C 7.99799 19.3548 7.38862 18.8559 6.89003 18.2192C 6.38036 17.5696 5.97673 16.7547 5.69182 15.7941C 5.40374 14.8188 5.25655 13.6945 5.25655 12.4471C 5.25655 11.224 5.40374 10.1176 5.69182 9.15528C 5.97673 8.20433 6.3756 7.39271 6.87419 6.74146C 7.36487 6.10318 7.96478 5.60746 8.6533 5.26402C 9.97971 4.60467 11.7873 4.57389 13.0155 5.19274C 13.6281 5.50054 14.1916 5.91526 14.6918 6.42718C 14.8057 6.54382 14.9497 6.59566 15.1239 6.60376C 15.2853 6.5989 15.4373 6.52762 15.5481 6.4045L 17.7735 3.88053C 17.984 3.64239 17.9745 3.27627 17.7514 3.04947C 16.9853 2.26376 16.0277 1.55744 14.9054 0.945077C 12.5265 -0.352549 9.19302 -0.245629 6.61302 0.849497C 5.27079 1.42136 4.09475 2.26052 3.11815 3.34593C 2.14471 4.42971 1.3739 5.7646 0.823074 7.31657C 0.277 8.86043 -8.19336e-07 10.623 -8.19336e-07 12.5524C -8.19336e-07 14.5062 0.277 16.2736 0.823074 17.8061C 1.37548 19.3484 2.14789 20.6687 3.12291 21.7282C 4.10109 22.7925 5.26764 23.6074 6.58455 24.1517C 7.89196 24.6928 9.31965 24.9665 10.8281 24.9665C 12.327 24.9665 13.7057 24.6555 14.9229 24.0464C 16.1306 23.4405 17.229 22.5608 18.1898 21.4301C 18.3861 21.2 18.3829 20.8566 18.1835 20.6282L 15.9928 18.1398Z"
            transform="translate(345.47 11.9512)"
            fill={color}
          />
          <path
            id="Fill 16"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 18.3623 23.2293L 10.9199 9.59855L 17.5567 0.978485C 17.6975 0.797044 17.7244 0.549183 17.6247 0.340202C 17.5266 0.132841 17.3192 1.10238e-08 17.0929 1.10238e-08L 12.6768 1.10238e-08C 12.4964 1.10238e-08 12.3254 0.0858604 12.2115 0.231661L 5.18692 9.39928L 5.18692 0.604263C 5.18692 0.270541 4.92259 1.10238e-08 4.59652 1.10238e-08L 0.59039 1.10238e-08C 0.264329 1.10238e-08 -3.06641e-06 0.270541 -3.06641e-06 0.604263L -3.06641e-06 23.5241C -3.06641e-06 23.8579 0.264329 24.1284 0.59039 24.1284L 4.59652 24.1284C 4.92259 24.1284 5.18692 23.8579 5.18692 23.5241L 5.18692 17.0457L 7.74475 13.8203L 12.9079 23.806C 13.0108 24.0053 13.2102 24.1284 13.4302 24.1284L 17.8479 24.1284C 18.0584 24.1284 18.2515 24.0134 18.356 23.8287C 18.462 23.644 18.4652 23.4156 18.3623 23.2293Z"
            transform="translate(378.215 12.3691)"
            fill={color}
          />
        </g>
        <g id="4dots">
          {!noShadows && (
            <path
              id="Fill 6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 5.31807 -4.052e-07C 7.38863 1.28624 8.76857 3.56482 8.76857 6.1691C 8.76857 10.1894 5.48786 13.4489 1.44122 13.4489C 0.947195 13.4489 0.465938 13.398 9.00708e-08 13.3064C 1.12591 14.0061 2.45096 14.4171 3.87686 14.4171C 7.92477 14.4171 11.2042 11.1576 11.2042 7.13728C 11.2042 3.60681 8.6741 0.665383 5.31807 -4.052e-07Z"
              transform="translate(8.32306 30.2285)"
              fill="#2C96FF"
            />
          )}
          {!noShadows && (
            <path
              id="Fill 16_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 8.32306 10.1843C 8.32561 10.1843 8.32944 10.1843 8.33199 10.1856C 4.97086 9.52401 2.43692 6.58004 2.43692 3.04702C 2.43692 1.95798 2.68457 0.928738 3.11476 1.17373e-06C 1.23314 1.31804 1.73359e-09 3.48976 1.73359e-09 5.95028C 1.73359e-09 9.97184 3.28199 13.2301 7.32863 13.2301C 9.24855 13.2301 10.991 12.4896 12.2982 11.2899C 12.265 11.2899 12.2331 11.295 12.1999 11.295C 10.774 11.295 9.44897 10.884 8.32306 10.1843Z"
              transform="translate(0 33.3506)"
              fill="#E91E63"
            />
          )}
          <path
            id="Fill 18_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 7.33 14.66C 11.3781 14.66 14.66 11.378 14.66 7.33C 14.66 3.28198 11.3781 -6.49414e-08 7.33 -6.49414e-08C 3.2819 -6.49414e-08 5.11383e-08 3.28198 5.11383e-08 7.33C 5.11383e-08 11.378 3.2819 14.66 7.33 14.66Z"
            transform="translate(2.43677 29.1172)"
            fill={color}
          />
          {!noShadows && (
            <path
              id="Fill 20_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 5.31807 -6.0141e-09C 7.38863 1.28624 8.76857 3.56482 8.76857 6.1691C 8.76857 10.1894 5.48786 13.4489 1.44122 13.4489C 0.947195 13.4489 0.465938 13.3993 9.00708e-08 13.3064C 1.12591 14.0061 2.45096 14.4171 3.87686 14.4171C 7.92477 14.4171 11.2042 11.1576 11.2042 7.13728C 11.2042 3.60681 8.6741 0.665383 5.31807 -6.0141e-09Z"
              transform="translate(8.32306 1.10938)"
              fill="#2C96FF"
            />
          )}
          {!noShadows && (
            <path
              id="Fill 26"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 8.32306 10.183C 8.32561 10.183 8.32944 10.183 8.33199 10.1843C 4.97086 9.52274 2.43692 6.57877 2.43692 3.04575C 2.43692 1.95671 2.68457 0.927465 3.11476 1.00255e-07C 1.23314 1.31677 1.73359e-09 3.48849 1.73359e-09 5.94901C 1.73359e-09 9.97057 3.28199 13.2288 7.32863 13.2288C 9.24855 13.2288 10.991 12.4896 12.2982 11.2886C 12.265 11.2886 12.2331 11.2937 12.1999 11.2937C 10.774 11.2937 9.44897 10.8828 8.32306 10.183Z"
              transform="translate(0 4.2334)"
              fill="#E91E63"
            />
          )}
          <path
            id="Fill 34"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 7.33 14.66C 11.3781 14.66 14.66 11.3777 14.66 7.32936C 14.66 3.28098 11.3781 -1.74509e-09 7.33 -1.74509e-09C 3.2819 -1.74509e-09 5.11383e-08 3.28098 5.11383e-08 7.32936C 5.11383e-08 11.3777 3.2819 14.66 7.33 14.66Z"
            transform="translate(2.43677 0)"
            fill={color}
          />
          {!noShadows && (
            <path
              id="Fill 36"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 5.31808 -6.0141e-09C 7.38863 1.28624 8.76984 3.56482 8.76984 6.1691C 8.76984 10.1894 5.48785 13.4489 1.44121 13.4489C 0.948469 13.4489 0.465937 13.3993 -6.70068e-07 13.3064C 1.12591 14.0061 2.45096 14.4171 3.87686 14.4171C 7.92477 14.4171 11.2055 11.1576 11.2055 7.13728C 11.2055 3.60681 8.67411 0.665383 5.31808 -6.0141e-09Z"
              transform="translate(37.6343 1.10938)"
              fill="#2C96FF"
            />
          )}
          {!noShadows && (
            <path
              id="Fill 40"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 8.32305 10.183C 8.32561 10.183 8.32944 10.183 8.33327 10.1843C 4.97213 9.52274 2.43692 6.57877 2.43692 3.04575C 2.43692 1.95671 2.68457 0.927465 3.11604 1.00255e-07C 1.23314 1.31677 8.69946e-07 3.48849 8.69946e-07 5.94901C 8.69946e-07 9.97057 3.28199 13.2288 7.32863 13.2288C 9.24982 13.2288 10.991 12.4896 12.2982 11.2886C 12.265 11.2886 12.2331 11.2937 12.1999 11.2937C 10.774 11.2937 9.44896 10.8828 8.32305 10.183Z"
              transform="translate(29.3112 4.2334)"
              fill="#E91E63"
            />
          )}
          <path
            id="Fill 50"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 7.32936 14.66C 11.3771 14.66 14.66 11.3777 14.66 7.32936C 14.66 3.28098 11.3771 -1.74509e-09 7.32936 -1.74509e-09C 3.28161 -1.74509e-09 -6.37451e-08 3.28098 -6.37451e-08 7.32936C -6.37451e-08 11.3777 3.28161 14.66 7.32936 14.66Z"
            transform="translate(31.748 0)"
            fill={color}
          />
          {!noShadows && (
            <path
              id="Fill 52"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 5.31808 -4.052e-07C 7.38863 1.28624 8.76984 3.56482 8.76984 6.1691C 8.76984 10.1894 5.48785 13.4489 1.44121 13.4489C 0.948469 13.4489 0.465937 13.398 -6.70068e-07 13.3064C 1.12591 14.0061 2.45096 14.4171 3.87686 14.4171C 7.92477 14.4171 11.2055 11.1576 11.2055 7.13728C 11.2055 3.60681 8.67411 0.665383 5.31808 -4.052e-07Z"
              transform="translate(37.6343 30.2285)"
              fill="#2C96FF"
            />
          )}
          {!noShadows && (
            <path
              id="Fill 62"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 8.32305 10.1843C 8.32561 10.1843 8.32944 10.1843 8.33327 10.1856C 4.97213 9.52401 2.43692 6.58004 2.43692 3.04702C 2.43692 1.95798 2.68457 0.928738 3.11604 1.17373e-06C 1.23314 1.31804 8.69946e-07 3.48976 8.69946e-07 5.95028C 8.69946e-07 9.97184 3.28199 13.2301 7.32863 13.2301C 9.24982 13.2301 10.991 12.4896 12.2982 11.2899C 12.265 11.2899 12.2331 11.295 12.1999 11.295C 10.774 11.295 9.44896 10.884 8.32305 10.1843Z"
              transform="translate(29.3112 33.3506)"
              fill="#E91E63"
            />
          )}
          <path
            id="Fill 64"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 7.32936 14.66C 11.3771 14.66 14.66 11.378 14.66 7.33C 14.66 3.28198 11.3771 -6.49414e-08 7.32936 -6.49414e-08C 3.28161 -6.49414e-08 -6.37451e-08 3.28198 -6.37451e-08 7.33C -6.37451e-08 11.378 3.28161 14.66 7.32936 14.66Z"
            transform="translate(31.748 29.1172)"
            fill={color}
          />
        </g>
      </g>
    </g>
  </svg>
)

const BlockstackBug = ({
  size = 48,
  invert,
  color = invert ? 'white' : '#271033',
  ...rest
}) => (
  <StyledBug size={size} viewBox="0 0 29 28" {...rest}>
    <g fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 28.2124 23.3535C 28.5361 22.0879 28.5293 19.1699 28.5293 19.1699L 28.5293 8.83399C 28.5293 8.83399 28.5347 5.99024 28.2214 4.6797C 27.908 3.3672 27.3062 2.50782 26.6445 1.85743C 25.9859 1.2129 25.0872 0.628914 23.7981 0.310554C 22.5093 -0.00585189 19.5352 7.47369e-06 19.5352 7.47369e-06L 9.00319 0.00391372C 9.00319 0.00391372 6.10426 7.48038e-06 4.76808 0.306648C 3.4319 0.613289 2.55543 1.20509 1.89381 1.85352C 1.23512 2.50001 0.640636 3.38282 0.316906 4.64649C -0.0068247 5.91212 1.12243e-05 8.83009 1.12243e-05 8.83009L 1.12243e-05 19.166C 1.12243e-05 19.166 -0.005604 22.0098 0.307873 23.3203C 0.621349 24.6328 1.22291 25.4922 1.88478 26.1426C 2.54347 26.7871 3.44215 27.3711 4.73121 27.6895C 6.02003 28.0059 8.99415 28 8.99415 28L 19.5261 27.9961C 19.5261 27.9961 22.4251 28 23.7612 27.6934C 25.0972 27.3867 25.9739 26.7949 26.6355 26.1465C 27.2942 25.5 27.8887 24.6172 28.2124 23.3535ZM 9.65333 11.707C 10.9373 11.707 11.978 10.6856 11.978 9.42579C 11.978 8.16602 10.9373 7.14454 9.65333 7.14454C 8.3694 7.14454 7.32862 8.16602 7.32862 9.42579C 7.32862 10.6856 8.3694 11.707 9.65333 11.707ZM 9.65333 20.8027C 10.9373 20.8027 11.978 19.7813 11.978 18.5215C 11.978 17.2617 10.9373 16.2402 9.65333 16.2402C 8.3694 16.2402 7.32862 17.2617 7.32862 18.5215C 7.32862 19.7813 8.3694 20.8027 9.65333 20.8027ZM 21.2769 9.42579C 21.2769 10.6856 20.2356 11.707 18.9519 11.707C 17.6682 11.707 16.6275 10.6856 16.6275 9.42579C 16.6275 8.16602 17.6682 7.14454 18.9519 7.14454C 20.2356 7.14454 21.2769 8.16602 21.2769 9.42579ZM 18.9519 20.8027C 20.2356 20.8027 21.2769 19.7813 21.2769 18.5215C 21.2769 17.2617 20.2356 16.2402 18.9519 16.2402C 17.6682 16.2402 16.6275 17.2617 16.6275 18.5215C 16.6275 19.7813 17.6682 20.8027 18.9519 20.8027Z"
        fill={color}
      />
    </g>
  </StyledBug>
)

export { BlockstackBug, Logo }
