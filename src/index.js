// Original and the models by Bruno Simon: https://threejs-journey.com

import { render } from 'react-dom'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import App from './App'
import Intro from './intro'

import { Footer } from "@cs6/branding"
import MApp,{ Track, Zoom } from './Music/TrackMusic'

render(
  <>
  
    <Intro>
    <Suspense fallback={null}>
      <App/>
    </Suspense>
    </Intro>
    {/* <h1 class="open" children="<h1>" /> */}
      {/* <h1 class="close" children="</h1>" /> */}
    <Footer 
      date="30. May"
      year="2022"
      link1={<a href="https://github.com/dayuan/Demo">dayuan/Demo</a>}
      link2={<a href="https://codesandbox.io/s/duo-ge-demotheatre-iphone-reflector-variant-pf-demo-forked-2x4mw7">Code Lab</a>}
    />
    <Loader />
  </>,
  document.getElementById('root'),
)
