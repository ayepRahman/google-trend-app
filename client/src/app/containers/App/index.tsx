import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global';
import FullPageLoader from 'app/components/Loaders/FullPageLoader';

const Home = React.lazy(() => import('app/containers/Home'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
