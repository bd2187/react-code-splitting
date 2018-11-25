import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
