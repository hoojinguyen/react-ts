import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../router';

const Main: React.FC = () => {
  console.log('Main');

  return (
    <div id="main">
      <Switch>
        {routes.map(({ component: Component, path, ...rest }: any) => {
          return (
            <Route
              key={path}
              path={path}
              render={props => {
                return <Component {...props} />;
              }}
              {...rest}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
