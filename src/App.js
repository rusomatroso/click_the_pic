import React, { Component } from 'react';
import './App.css';
import flags from './flags.json'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import FlagCard from './components/FlagCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        scoreTop: 0,
        scoreCurrent: 0,
        flags: flags,
        unselectedFlags: flags
    };

    componentDidMount() {
    }

    shuffleArray = a => {
        for (let i = a.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
    };

    selectFlag = country => {
        const findFlag = this.state.unselectedFlags.find(item => item.country === country);

        if(findFlag === undefined) {
            // failure to select a new country flag
            this.setState({
                message: "You guessed incorrectly!",
                scoreTop: (this.state.scoreCurrent > this.state.scoreTop) ? this.state.scoreCurrent : this.state.scoreTop,
                scoreCurrent: 0,
                flags: flags,
                unselectedFlags: flags
            });
        }
        else {
            // success to select a new dog
            const newFlags = this.state.unselectedFlags.filter(item => item.country !== country);

            this.setState({
                message: "You guessed correctly!",
                scoreCurrent: this.state.scoreCurrent + 1,
                flags: flags,
                unselectedFlags: newFlags
            });
        }

        this.shuffleArray(flags);
    };

    render() {
        return (
            <Wrapper>
            <Header
        message={this.state.message}
        scoreCurrent={this.state.scoreCurrent}
        scoreTop={this.state.scoreTop}
        />
        {
            this.state.flags.map(flag => (
                <FlagCard
            country={flag.country}
            image={flag.image}
            selectFlag={this.selectFlag}
            scoreCurrent={this.state.scoreCurrent}
            />
        ))
        }
    </Wrapper>
    );
    }
}

export default App;

