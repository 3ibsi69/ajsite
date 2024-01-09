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
      <p id='charade'>Charades</p>
      <div className="last-text">
      <p>Ce jeu est un moyen d'encourager a participer a la lecon</p>
      {/* make list a b c  */}
      <ol type='a'>
        <li>
          <p><span className='green'>Ressource:</span> une liste de personnes ,d'action </p>
        </li>
        <li>
          <p><span className='green'>Jeu :</span> divisiz votre classe en deux equipes puis pensez a un mot lie a la lecon </p>
        </li>
        <li>
          <p>Les differnte type de charrade</p>
          <ul>
            <li>
              <p>la Charade classique</p>
            </li>
            <li>
              <p>Charade  repetitive</p>
            </li>
            <li>
              <p>Charade a tiroirs</p>
            </li>

          </ul>
        </li>

      </ol>


      </div>
    </div>
  );
};

export default JeuxpedComponent;
