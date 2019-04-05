import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import {PieCharts} from "../src/Component/Chart 1/PieChart";
import {LineCharts} from "../src/Component/Chart_2/LineChart";
import {Contact} from "../src/Component/Contact/Contact";
import {Agenda} from "../src/Component/Date_Picker/DatePicker";
import ArtistForm from "../src/Component/Form/ArtistForm";
import DeleteATrack from "../src/Component/Form/DeleteATrack";
import TrackForm from "../src/Component/Form/TrackForm";
import {MouseTracker} from "../src/Component/MouseTracker/MouseTracker";
import {SideMenu} from "../src/Component/SideMenu/SideMenu";


storiesOf('Piecharts', module).add('with text', () => <PieCharts onClick={action('clicked')}>Hello Piecharts</PieCharts>);
storiesOf('LineCharts', module).add('with text', () => <LineCharts onClick={action('clicked')}>Hello Piecharts</LineCharts>);
storiesOf('Contact', module).add('with text', () => <Contact onClick={action('clicked')}>Hello Piecharts</Contact>);
storiesOf('Agenda', module).add('with text', () => <Agenda onClick={action('clicked')}>Hello Piecharts</Agenda>);
storiesOf('Artistform', module).add('with text', () => <ArtistForm onClick={action('clicked')}>Hello Piecharts</ArtistForm>);
storiesOf('DeleteATrack', module).add('with text', () => <DeleteATrack onClick={action('clicked')}>Hello Piecharts</DeleteATrack>);
storiesOf('TrackForm', module).add('with text', () => <TrackForm onClick={action('clicked')}>Hello Piecharts</TrackForm>);
storiesOf('Mousetracker', module).add('with text', () => <MouseTracker onClick={action('clicked')}>Hello Piecharts</MouseTracker>);
storiesOf('SideMenu', module).add('with text', () => <SideMenu onClick={action('clicked')}>Hello Piecharts</SideMenu>);
