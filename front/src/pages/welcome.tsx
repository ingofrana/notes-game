import * as React from 'react'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <div>PÁGINA INICIAL!</div>
                <Link to="/game">
                    <button>Iniciar jogo!</button>
                </Link>
            </div>
        )
    }
}