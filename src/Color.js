import StarRating from './StarRating';

const Color = ({
  id,
  title,
  color,
  rating = 0,
  onRate = f => f,
  onColorRemove = f => f
}) => (
  <section className="color-block">
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

export default Color;
