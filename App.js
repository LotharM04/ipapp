import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//======= Pages ========
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AboutMusic from './pages/music/AboutMusic';
import Copyright from './pages/music/Copyright';
import Royalties from './pages/music/Royalties';
import MusicOrganizations from './pages/music/MusicOrganizations';
import Training from './pages/music/Training';
import MusicDistribution from './pages/music/MusicDistribution';
import AboutFilm from './pages/film/AboutFilm';
import CopyrightFilm from './pages/film/CopyrightFilm';
import FilmRoyalties from './pages/film/FilmRoyalties';
import FilmDistribution from './pages/film/FilmDistribution';
import FilmTraining from './pages/film/FilmTraining';
import FilmOrganisations from './pages/film/FilmOrganisations';
//======================

import CustomButton from './Components/CustomButton';

export default function App() {
  return (
    //<Login />
    //<Dashboard />
    //<Register />
    //<AboutMusic />
    //<Copyright />
    //<Royalties />
    //<Training />
    //<MusicDistribution />
    //<MusicOrganizations />
    <AboutFilm />
    //<CopyrightFilm />
    //<FilmRoyalties />
    //<FilmDistribution />
    //<FilmTraining />
    //<FilmOrganisations />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
