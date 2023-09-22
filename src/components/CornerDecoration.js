import styles from './CornerDecoration.module.sass'
import { useEffect, useRef } from 'react'

const width = Math.min(1536, typeof window !== 'undefined' ? window.innerWidth : 1536)
const height = Math.min(1024, typeof window !== 'undefined' ? window.innerHeight : 1024)

function CornerDecoration() {
    const ref = useRef()

    useEffect(() => {
        /**
         * @type HTMLCanvasElement
         */
        const canvas = ref.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, width, height)

        const points = []

        function distance([ x1, y1 ], [ x2, y2 ]) {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
        }

        function getNearestPoint(point, exclude = [ point ]) {
            let nearest = null
            let minDistance = Infinity

            for (const target of points) {
                if (exclude.find(([ x, y ]) => target[0] === x && target[1] === y)) continue
                const currentDistance = distance(point, target)

                if (currentDistance < minDistance) {
                    nearest = target
                    minDistance = currentDistance
                }
            }

            return nearest
        }

        for (let x = 0; x < width; x += randomInteger(75, 150)) points.push([ x, 0 ])
        for (let y = height - 1; y > 0; y -= randomInteger(75, 150)) points.push([ width - 1, y ])

        for (let x = 0; x < width; x += randomInteger(0, 35)) {
            for (let i = 0; i < Math.max(1, 500 / Math.max(1, x)); i++) {
                const y = randomInteger(0, 300000 / Math.max(1, x))
                points.push([ width - x, y ])
            }
        }

        const connections = {}

        function nextFigure(startPoint) {
            const points = [ startPoint ]
            for (let i = 0; i < randomInteger(2, 4); i++) {
                const nextPoint = getNearestPoint(points[i], points)
                points.push(nextPoint)

                const index = points.indexOf(nextPoint)
                if (connections.hasOwnProperty(index)) connections[index] += 1
                else connections[index] = 1
            }

            context.fillStyle = `#${ randomInteger(0, 0xFFFFFF).toString(16).padStart(6, '0') }11`
            context.beginPath()
            points.forEach(([ x, y ]) => context.lineTo(x, y))
            context.lineTo(points[0][0], points[0][1])
            context.fill()
            context.closePath()
        }

        for (let i = 0; i < points.length; i++) nextFigure(points[i])
    }, [])

    return <canvas ref={ ref } className={ styles.corner } width={ width } height={ height }/>
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

export default CornerDecoration
