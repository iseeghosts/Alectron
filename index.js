import { Navigation } from "react-native-navigation";
// import App from './App';
import Media from './app/screens/Media';
import Motivation from './app/screens/Motivation';
import {Plan, Activity, Progress} from './app/screens/Time-table';
import Home from './app/screens/MainPage';
import Habit from './app/screens/Habit';
import {mainRoot} from './app/constants/Tabs'
// import Auth from './app/screens/AuthScreen';
// import SignIn from './app/screens/SignIn';
// import SignUp from './app/screens/SignUp';
// import {AuthTab, bottomTab} from './app/constants/Tabs';
// import OnBoarding from './app/screens/LandingScreen';
const React = require('react');

// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('MediaScreen',() => Media);
// Navigation.registerComponent('TimetableScreen',() => Timetable);
Navigation.registerComponent('HomeScreen',() => Plan);
Navigation.registerComponent('HabitScreen',() => Habit);
Navigation.registerComponent('MotivationScreen',() => Motivation);
Navigation.registerComponent('ActivityScreen',() => Activity);
Navigation.registerComponent('ProgressScreen',() => Progress);

// Navigation.registerComponent('AuthScreen',() => Auth);
// Navigation.registerComponent('SignInScreen',() => SignIn);
// Navigation.registerComponent('SignUpScreen',() => SignUp);
// Navigation.registerComponent('PlanScreen',() => PlanTab);
// Navigation.registerComponent('LandingPages',() => OnBoarding);
Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a'
    },
    topBar: { visible: false, height: 0},
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14
    }
  });

Navigation.events().registerAppLaunchedListener(async () => {
  console.log("3");
  Navigation.setRoot(mainRoot);
});

function isLoggedIn() {
  return true;
  // TODO: your business logic goes here
}
// const loginRoot = {
//   root: AuthTab
// };
