import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import Tab from 'components/appbar/sections/tab';
import { setSelectedTab } from 'redux/actions/tab';
import { useTextStyles } from 'utils/styles';
import { Section } from 'utils/utils';

import { Tabs } from '@material-ui/core';
import { AddOutlined, NoteOutlined, PeopleOutline } from '@material-ui/icons';


import useStyles from './styles';


const messages = defineMessages({
  home: { id: 'tab.home' },
  history: { id: 'tab.history' },
  promise: { id: 'tab.promise' },
  wedding: { id: 'tab.wedding' },
  weddingList: { id: 'tab.weddingList' },
  us: { id: 'tab.us' },
});


function Sections(): JSX.Element {
  const [ value, setValue ] = React.useState(Section.US);
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const classes = useStyles();
  const textClasses = useTextStyles();

  const handleChange = React.useCallback(
    (_event: React.ChangeEvent<unknown>, newValue: number) => {
      setValue(newValue);
    }, []
  );

  // const onHomeClick = React.useCallback(
  //   () => {
  //     // console.log('Home Clicked');
  //   }, []
  // );

  const onUsClick = React.useCallback(
    () => {
      dispatch(setSelectedTab(Section.US));
    }, []
  );

  // const onStoryClick = React.useCallback(
  //   () => {
  //     // console.log('Story Clicked');
  //   }, []
  // );

  const onPromiseClick = React.useCallback(
    () => {
      dispatch(setSelectedTab(Section.PROMISE));
    }, []
  );

  const onWeddingClick = React.useCallback(
    () => {
      dispatch(setSelectedTab(Section.WEDDING));
    }, []
  );

  const onWeddingListClick = React.useCallback(
    () => {
      dispatch(setSelectedTab(Section.WEDDING_LIST));
    }, []
  );

  const getLabel = (label: string): JSX.Element => {
    return <span className={textClasses.freehand}>{label}</span>;
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='standard'
      indicatorColor='primary'
      textColor='primary'
      classes={{ indicator: classes.indicator }}
    >
      {/* <Tab
        value={Section.HOME}
        icon={<HomeOutlined />}
        label={formatMessage(messages.home)}
        onClick={onHomeClick}
      /> */}
      <Tab
        value={Section.US}
        icon={<PeopleOutline />}
        label={getLabel(formatMessage(messages.us))}
        onClick={onUsClick}
      />
      {/* <Tab
        value={Section.STORY}
        icon={<NoteOutlined />}
        label={'Storia'}
        onClick={onStoryClick}
      /> */}
      <Tab
        value={Section.PROMISE}
        icon={<AddOutlined />}
        label={getLabel(formatMessage(messages.promise))}
        onClick={onPromiseClick}
      />
      <Tab
        value={Section.WEDDING}
        icon={<NoteOutlined />}
        label={getLabel(formatMessage(messages.wedding))}
        onClick={onWeddingClick}
      />
      <Tab
        value={Section.WEDDING_LIST}
        icon={<NoteOutlined />}
        label={getLabel(formatMessage(messages.weddingList))}
        onClick={onWeddingListClick}
      />
    </Tabs>
  );
}


export default Sections;
