export const MoodBoardItem = ({ color, image, description }) => (
  <div className="mood-board-item" style={{ backgroundColor: color }}>
    <img className="mood-board-image" src={image} />
    <h3 className="mood-board-text">{description}</h3>
  </div>
);

export const MoodBoard = () => (
  <div>
    <h1 className="mood-board-heading">Destination Mood Board</h1>
    <div className="mood-board">
      <MoodBoardItem
        color="orange"
        image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
        description="Santorini Sunset"
      />
      <MoodBoardItem
        color="#43a047"
        image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
        description="Emerald Shore"
      />
      <MoodBoardItem
        color="skyblue"
        image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
        description="Sailing Adventure"
      />
    </div>
  </div>
);
