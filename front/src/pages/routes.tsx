import * as React from 'react'
import { Switch, Route } from 'react-router'
import welcome from './welcome';
import game from './game';
import score from './score';
import notFound from './not-found'

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={welcome} exact={true}/>
                <Route path="/game" component={game} exact={true} />
                <Route path="/score" component={score} exact={true} />
                <Route component={notFound} />
            </Switch>
        )
    }
}