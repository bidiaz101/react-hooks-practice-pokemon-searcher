import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {
  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div onClick={() => setShowFront(!showFront)}>
        <div className="image">
          <img src={showFront ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
