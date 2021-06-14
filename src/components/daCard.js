import React from "react";


function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Repository:</strong> {props.name}
          </li>
          <li>
            <strong>Commit:</strong> {props.commit}
          </li>
          <li>
            <strong>Last Commit:</strong> {props.lastCommit}
          </li>
        </ul>
      </div>
      <span onClick={() => props.addRepo(props.id)} className="remove">
        Function event starts on click
      </span>
    </div>
  );
}

export default FriendCard;