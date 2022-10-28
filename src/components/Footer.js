import React from 'react'
import FOOTER_IMG from '../images/I4G.png'


const Footer = () => {
  return (
    <>
    <hr />
    <footer>
          <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABoCAMAAAAKAtgrAAAAUVBMVEX///8AAAB/f3+/v78/Pz/Pz8/v7+8QEBDf398gICCfn5+vr69vb28wMDCPj49fX19QUFDnMyv85eT0paHzmZX72NfoPzjucmz5y8nwf3r+8vEo50vQAAAB20lEQVRoge2V63KkIBBGae6geMlms7t5/wdNtzqjESaTSaryY+s7VWMJDXhsWkYpAAAAAAAAAAAAAAAAAAD8BGajDgyHhjPx0YWzza2VGtBGFQh0mGlJH+10bVyhr1OIPnawAlGoAoW6Wwr6XeuuQgn3jQeiO4O+pfAJHFHPV9vLs6z8usmq3rr3Co77CxWncqIkg3WiqZOJ1hR9jao4URijKOgURq+WlbId+pR6f0OBZ/LVED9dSVHwtvC9PWZGFMxaNIEXZ6yalmYn/YH0NcpjS+JuvXZMallpa5W2QU/BnRW0aypoyZhZc+xkWqYk/WWIe5TIqU42guODrLcqcMvQsb52zFawR4WsVFNBXdbTyyOWQvbcH9Uhyn2TkfiolN8VZJvHZn34JLm6KMRVwewKv55/f6RgrVv796gfg2RkLcddQS8Jbylw7fhNgW/0WeF5nl8aCvyC3TIxXx6+R6MsYyuF5FUMlGsDdz2afKBU6KzwZ57np7NClt3nKg42cH5PCj6k0XJmzwrL6NT4JMx+OuZAIZ8V/r7M/6osyHaPnHAp+FhlQfM+2FgpjPx+x++8TeurfX26N+tTiNCtQ+GHeOis/G8V4uP/9gAAAAAAAAAAAAAAAAC+wBsB6QuYYUZ5TQAAAABJRU5ErkJggg=="
          alt="img"
          className="zuri"
        />
        <p>HNG Internship 9 Frontend Task</p>

        <img
        src={FOOTER_IMG}
          alt="img"
          className="ing"
        />
    </footer>
    </>
  )
}

export default Footer