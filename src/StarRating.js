import { Component } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({ starsSelected });
  }

  render() {
    const totalStars = this.props.stars;
    const starsSelected = this.props.starsSelected;
    return (
      <div className="stars">
        {[...Array(totalStars)].map((num, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.props.onRate(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars}
        </p>
      </div>
    );
  }
}

StarRating.propTypes = {
  stars: PropTypes.number,
  starsSelected: PropTypes.number
};

StarRating.defaultProps = {
  stars: 5,
  starsSelected: 0
};

export default StarRating;
