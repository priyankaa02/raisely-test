import React, { Suspense, lazy } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom' // react-router v4
import history from '../history'
import { RP } from '../constants'
import styles from './routes.module.css'

const UserSignupContainer = lazy(() =>
  import('../containers/UserSignupContainer')
)

const App = () => (
  <ConnectedRouter history={history}>
    <div className={styles.layout}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={RP.USER_SIGNUP} component={UserSignupContainer} />
        </Switch>
      </Suspense>
    </div>
  </ConnectedRouter>
)

export default App
