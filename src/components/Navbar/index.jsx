import React from 'react'
import './style.module.css'

export default function Navbar () {
  return (
    <nav>
      <div>

        <svg viewBox='0 0 106 106' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_i)'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M5.34375 5.34375H101.828V3L4.95312 3C3.87444 3 3 3.87445 3 4.95313L3 101.047C3 102.126 3.87445 103 4.95313 103H101.047C102.126 103 103 102.126 103 101.047V24.0436C103 21.8555 99.9527 21.3223 99.2098 23.3805L78.3229 81.2449L61.5166 53.7962C60.7746 52.5843 59.0281 52.5452 58.2326 53.7227L39.6125 81.2826L19.6995 19.2202L17.4679 19.9362L37.6264 82.7641C38.1244 84.316 40.1921 84.6113 41.1046 83.2608L59.8348 55.5378L76.7486 83.1621C77.6039 84.559 79.6953 84.346 80.2514 82.8054L100.656 26.2763V100.656H5.34375V5.34375Z' stroke='#7510F7' stroke-width='5' />
          </g>
          <defs>
            <filter id='filter0_i' x='0.5' y='0.5' width='105' height='109' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
          </defs>
        </svg>
      </div>

      <button>Say Hello</button>
    </nav>
  )
}
