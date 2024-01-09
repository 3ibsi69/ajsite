import React from 'react';
const JeuxpedComponent = () => {
  return (
    <div>
      <div className="title">
        <a href="../index.html" target="_blank">
          <img
            src="../images/Imjeux.png"
            width="90px"
            height="90px"
            alt="imjeux"
          />
        </a>
        <h3>Exemple de jeux pédagogiques:</h3>
      </div>
      <p>
        La place du jeu dans l'enseignement est un dispositif qui interroge,
        fascine ou inquiète selon les personnes et les époques. Comme le souligne
        Chantal Barthélémy-Ruiz:
      </p>
      <p id="textintro">
          Introduire du jeu dans la pédagogie, c'est vouloir mêler plaisir et
          travail.
        
      </p>
    </div>
  );
};

export default JeuxpedComponent;
