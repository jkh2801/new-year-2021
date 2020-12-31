import { useMemo, useState } from 'react'
import './NewYear.scss'
import Cow from './image/cow.png'

export default function NewYear () {
    const [state, setState] = useState(false)
    const count = 150
    const stars = useMemo(() => {
        const style = () => {
            const size = Math.random() * 1
            const duration = Math.random() * 60
            return (
                {
                    left: Math.floor(Math.random() * window.innerWidth),
                    top: Math.floor(Math.random() * 300),
                    width: 1 + size + 'px',
                    height: 1 + size + 'px',
                    animationDuration: 2 + duration + 's',
                    animationDelay: duration + 's'
                }
            )
        }
        return (
            Array(count).fill(0).map((n, idx) => <i key={idx} style={style()}></i>)
        )
    }, [count])
    return (
        <div className={`container ${state ? "change" : ""}`}>
            {stars}
            <div className="rotate">
                <div className="moon" onClick={() => setState(true)}>
                    <h2>CLICK</h2>
                </div>
                <div className="sun">
                    <img src={Cow} alt=""></img>
                    <div className="year">
                        <span style={{"--i": 1}}>2</span>
                        <span style={{"--i": 2}}>0</span>
                        <span style={{"--i": 3}}>2</span>
                        <span style={{"--i": 4}}>1</span>
                    </div>
                    <div className="text">복 많이 받으세요.</div>
                </div>
            </div>
            <div className="sea">
                <div className="shadow"></div>
            </div>
        </div>
    )
}