import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import Tab from 'components/appbar/sections/tab';

import { Tabs } from '@material-ui/core';
import { AddOutlined, HomeOutlined, NoteOutlined, PeopleOutline } from '@material-ui/icons';

import { Section } from './utils';

import useStyles from './styles';


const messages = defineMessages({
  event: { id: 'tab.event' },
  history: { id: 'tab.history' },
  home: { id: 'tab.home' },
});


function Sections(): JSX.Element {

  const [value, setValue] = React.useState(Section.HOME);
  const classes = useStyles();
  const { formatMessage } = useIntl();

  const handleChange = React.useCallback(
    (_event: React.ChangeEvent<unknown>, newValue: number) => {
      setValue(newValue);
    }, []
  );

  const onHomeClick = React.useCallback(
    () => {
      console.log('Home Clicked');
    }, []
  );

  const onUsClick = React.useCallback(
    () => {
      console.log('US Clicked');
    }, []
  );

  const onStoryClick = React.useCallback(
    () => {
      console.log('Story Clicked');
    }, []
  );

  const onEventClick = React.useCallback(
    () => {
      console.log('Event Clicked');
    }, []
  );

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='standard'
      indicatorColor='primary'
      textColor='primary'
      classes={{ indicator: classes.indicator }}
      style={{ fontFamily: 'Home Winter' }}
    >
      <Tab
        value={Section.HOME}
        icon={<HomeOutlined />}
        label={formatMessage(messages.home)}
        onClick={onHomeClick}
      />
      <Tab
        value={Section.US}
        icon={<PeopleOutline />}
        label={'Noi'}
        onClick={onUsClick}
      />
      <Tab
        value={Section.STORY}
        icon={<NoteOutlined />}
        label={'Storia'}
        onClick={onStoryClick}
      />
      <Tab
        value={Section.EVENT}
        icon={<AddOutlined />}
        label={'Evento'}
        onClick={onEventClick}
      />
      <Tab
        value={Section.WEDDING_LIST}
        icon={<NoteOutlined />}
        label={'Evento'}
        onClick={onEventClick}
      />
    </Tabs>
  );
}


export default Sections;
