import React from 'react';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import LoginPage from './Login/components/LoginPage';
import EmployeeList from './Employee/components/EmployeeList';
import EmployeeCreate from './Employee/components/EmployeeCreate';
import EmployeeEdit from './Employee/components/EmployeeEdit';

const RouterComponent = () => (
  <Router sceneStyle={{ backgroundColor: '#ffffff'}}>
    <Stack key="root">

          <Scene key="Login" component={LoginPage} title="Login"/>

        <Scene 
          key="EmployeeList" 
          component={EmployeeList} 
          title="Employee List" 
          onRight={() => Actions.EmployeeCreate()}
          hideBackImage
          rightTitle="Add"
          />

        <Scene 
          key="EmployeeCreate" 
          component={EmployeeCreate} 
          title="Create" 
          back
          />

        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      
    </Stack>
    
  </Router>
);

export default RouterComponent;