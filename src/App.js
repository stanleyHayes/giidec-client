import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/index/IndexPage";
import ServicesPage from "./pages/services/ServicesPage";
import EventsPage from "./pages/events/EventsPage";
import ImagesPage from "./pages/media/ImagesPage";
import VideosPage from "./pages/media/VideosPage";
import OperationsPage from "./pages/media/OperationsPage";
import QuizzesPage from "./pages/fun/QuizzesPage";
import FactsPage from "./pages/fun/FactsPage";
import WinnersPage from "./pages/fun/WinnersPage";
import AboutOrganisationPage from "./pages/about/AboutOrganisationPage";
import OrganisationStoryPage from "./pages/about/OrganisationStoryPage";
import OrganisationLeadersPage from "./pages/about/OrganisationLeadersPage";
import ReviewsPage from "./pages/contact/ReviewsPage";
import FindUsPage from "./pages/contact/FindUsPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <IndexPage/>
                </Route>
                <Route path="/services" exact={true}>
                    <ServicesPage/>
                </Route>

                <Route path="/events" exact={true}>
                    <EventsPage/>
                </Route>

                <Route path="/media/images" exact={true}>
                    <ImagesPage/>
                </Route>

                <Route path="/media/videos" exact={true}>
                    <VideosPage/>
                </Route>

                <Route path="/media/operations" exact={true}>
                    <OperationsPage/>
                </Route>

                <Route path="/fun/quizzes" exact={true}>
                    <QuizzesPage/>
                </Route>

                <Route path="/fun/facts" exact={true}>
                    <FactsPage/>
                </Route>

                <Route path="/fun/winners" exact={true}>
                    <WinnersPage/>
                </Route>

                <Route path="/about" exact={true}>
                    <AboutOrganisationPage/>
                </Route>

                <Route path="/reviews" exact={true}>
                    <ReviewsPage/>
                </Route>

                <Route path="/find-us" exact={true}>
                    <FindUsPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
