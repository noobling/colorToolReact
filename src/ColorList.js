import Color from './Color';

const ColorList = ({
  colors = [],
  onRate = f => f,
  onColorRemove = f => f
}) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No colors yet add one!</p>
    ) : (
      colors.map((color, i) => {
        return (
          <Color
            {...color}
            key={color.id}
            onRate={rating => onRate(color.id, rating)}
            onColorRemove={() => onColorRemove(color.id)}
          />
        );
      })
    )}
  </div>
);

export default ColorList;
