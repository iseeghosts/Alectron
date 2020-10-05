import {Navigation} from 'react-native-navigation';
import {PlanTab, ActivityTab,ProgressTab} from '../../constants/Tabs'
import Plan from './Plan';
import Activity from './Activity';
import Progress from './Progress';
//In () maybe pass the prop of which of the navigations was selected earlier 

// in timetable diplay the view of either plan, activity or progress
export default TimeTable = () => (
    Navigation.setRoot(PlanRoot)
);

const isActivity = false;
const isPlanTab = true;
console.log(Tab);
const Tab = (isPlanTab ? PlanRoot : isActivityTab(isActivity) );
function isActivityTab(isActivity){
    if (isActivity == true){
        return ActivityRoot;
    } else {
        return ProgressRoot;
    }
}
const PlanRoot = {
    root: PlanTab
};
const ActivityRoot = {
    root: ActivityTab
};
const ProgressRoot = {
    root: ProgressTab
};
console.log("1");


export {Plan};
export {Activity};
export {Progress};
console.log("5");
