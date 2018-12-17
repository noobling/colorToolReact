import StarRating from './StarRating';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.style = { backgroundColor: '#ccc' };
  }

  componentWillUpdate() {
    this.style = null;
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating; // Prevent re rendering of component if nothing has changed
  }

  componentDidUpdate(prevProps) {
    const text = prevProps.rating > this.props.rating ? 'Worse' : 'Better';
    console.log(`The rating is getting ${text}`);
  }

  render() {
    const { onColorRemove, rating, onRate, id, title, color } = this.props;

    return (
      <section className="color-block" style={this.style}>
        <h2>{title}</h2>
        <div className="color" style={{ backgroundColor: color }} />
        <button onClick={() => onColorRemove(id)} className="color-remove">
          X
        </button>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  color: PropTypes.string,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onColorRemove: PropTypes.func
};

Color.defaultProps = {
  title: undefined,
  rating: 0,
  onRate: f => f,
  onColorRemove: f => f,
  color: '#fff'
};

export default Color;
