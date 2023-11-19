import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'RAGNAR',
        bio: 'UN HOMME TÉRRIFIANT ET COURAGEUX.',
        imgSrc: '/img/ragnar.jpeg',
        profession: 'TUEUR EN SÉRIE',
      },
      show: true,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    // Définir la largeur et la hauteur de l'image
    const imageSize = {
      width: '200px', // Remplace cette valeur par la largeur souhaitée
      height: 'auto', // Laisse 'auto' pour conserver les proportions originales
    };

    return (
      <div>
        {this.state.show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} style={imageSize} />
            <p>Profession: {profession}</p>
          </div>
        )}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Affichage
        </button>

        <p>Temps écoulé depuis le montage : {this.state.elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;


