import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/home';
import ReviewDetail from '../components/reviewDetail';

const screens = {
    Home: {
        screen:Home
    },
    ReviewDetail: {
        screen:ReviewDetail
    }
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerStyle:{backgroundColor:"#eee"}
}});
export default createAppContainer(HomeStack);

