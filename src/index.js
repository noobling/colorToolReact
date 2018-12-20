import React from 'react';
import ReactDOM from 'react-dom';
import AddColorFrom from './AddColorForm';
import StarRating from './StarRating';
import ColorList from './ColorList';
import { v4 } from 'uuid';
import storeFactory from './storeFactory';

import './styles.css';

const store = storeFactory();

window.React = React;
const logResult = (title, color) =>
  console.log(`New data was entered: ${title.value} ${color.value}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };

    this.addColor = this.addColor.bind(this);
    this.colorRate = this.colorRate.bind(this);
    this.onColorRemove = this.onColorRemove.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      { id: v4(), title, color, rating: 0 }
    ];
    this.setState({ colors });
  }

  colorRate(id, rating) {
    this.setState(prevState => ({
      colors: prevState.colors.map(color =>
        color.id !== id
          ? color
          : {
              ...color,
              rating: rating
            }
      )
    }));
  }

  onColorRemove(id) {
    const colors = this.state.colors;
    const newColors = colors.filter(color => color.id !== id);
    this.setState({ colors: newColors });
  }

  render() {
    const { colors } = this.state;
    const { addColor, colorRate, onColorRemove } = this;

    return (
      <div className="App">
        <AddColorFrom addColor={addColor} />
        <ColorList
          colors={colors}
          onRate={colorRate}
          onColorRemove={onColorRemove}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
const render = () => ReactDOM.render(<App store={store} />, rootElement);

store.subscribe(render);
render();
