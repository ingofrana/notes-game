import * as React from 'react'
import './game.css'
import posed from 'react-pose'

// const notes = ['Sol', 'Fá', 'Mi', 'Ré', 'Dó', 'Si', 'Lá']

const Note = posed.div({
    inicio: {
        right: 'calc(0% - 100px)',
        transition: {
            duration: 0
        }
    },
    fim: {
        right: 'calc(100% - 0px)',
        transition: {
            duration: 3000,
        }
    }
})

interface State {
    initiated: boolean
    position: number
    score: number
    timeWhenNoteIsCreated?: Date
}

export default class extends React.Component<any, State> {
    timeout?: NodeJS.Timeout

    constructor(p: any) {
        super(p)

        this.state = {
            initiated: false,
            position: 0,
            score: 0
        }
    }

    componentDidMount() {
        this.iniciar()
    }

    iniciar = () => {
        let position = Math.floor(Math.random() * 11)
        this.setState({
            initiated: true,
            position: position,
            timeWhenNoteIsCreated: new Date()
        })
        this.timeout = setTimeout(() => {
            this.parar(false)
        }, 2600)
    }

    parar = (nota: number | false) => {
        if (nota === false) {
            console.log('ERROU!')
        }
        let score = 0
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        if (this.state.position % 7 === nota) {
            score = 100
        }
        this.setState(prevState => ({
            initiated: false,
            score: prevState.score + score,
            timeWhenNoteIsCreated: undefined
        }))
        this.iniciar()
    }

    getCurrentNoteValue = () => {
        if (this.state.timeWhenNoteIsCreated) {
            const difference = new Date().getTime() - this.state.timeWhenNoteIsCreated.getTime()
            return Math.floor(((difference / 2600) * 100 - 100) * -1)
        }

        return 0
    }

    render() {
        return (
            <div className="container">
                <div className="meuscore">{this.state.score}</div>
                <div className="meuscore diferente">{this.getCurrentNoteValue()}</div>
                <div id="linhas">
                    <Note position={this.state.position} className="note" pose={this.state.initiated ? 'fim' : 'inicio'} style={{
                        top: -10 + (15 * this.state.position) + 'px'
                    }}/>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div id="botoes">
                    <table className="table">
                        <tr>
                            <td><button onClick={() => this.parar(4)} className="btn btn-primary btn-block">DÓ</button></td>
                            <td><button onClick={() => this.parar(3)} className="btn btn-primary btn-block">RÉ</button></td>
                            <td><button onClick={() => this.parar(2)} className="btn btn-primary btn-block">MI</button></td>
                            <td><button onClick={() => this.parar(1)} className="btn btn-primary btn-block">FÁ</button></td>
                            <td><button onClick={() => this.parar(0)} className="btn btn-primary btn-block">SOL</button></td>
                            <td><button onClick={() => this.parar(6)} className="btn btn-primary btn-block">LÁ</button></td>
                            <td><button onClick={() => this.parar(5)} className="btn btn-primary btn-block">SI</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}