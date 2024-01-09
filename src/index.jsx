// Import necessary modules from react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './CSS/Stylejeux.css';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JeuxPedagogiques from './Types/Jeuxped'; 

const Index = () => {
  return (
    <Router>
      <div>
        <h3 id="title">
          Apprendre le <span id="JEU">JEU</span>
        </h3>

        <div className="container">
          <a href="#" id="Haut">
            Haut de la page
          </a>
          <p className="text">1.Importance des jeux</p>
          <p className="para">
            <TagFacesIcon />
            Motiver les apprenants
          </p>

          <p className="para">
            <TagFacesIcon />
            Renforcer la complicité enseignant/Apprenant
          </p>
          <p className="text">2.les jeux d'apprentissage</p>
          <ul>
            <li>
              <p>Les jeux ludiques</p>
            </li>
            <li>
              <Link to="./Types/Jeuxped.jsx">
                <p>Les jeux pédagogiques</p>
              </Link>
            </li>
            <li>
              <p>Les jeux de rôles</p>
            </li>
          </ul>
          <a href="http://www.bienenseigner.com" target="_blank">
            <p id="Ref">Références</p>
          </a>

          <Routes>
            <Route path="./Types/Jeuxped.jsx" element={<JeuxPedagogiques />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Index;
