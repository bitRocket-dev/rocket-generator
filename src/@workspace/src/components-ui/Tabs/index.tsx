/** @format */

// #region ::: IMPORT
import React, { FC, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { TabsWrapper } from './partials/TabsWrapper';
import { TabButton } from './partials/TabButton';
import { TabInner } from './partials/TabInner';
import { UIText } from '../Text';
import { UIRow } from '../Grid/Row';
import { UIColumn } from '../Grid/Column';
// #endregion

export interface Props {
  children: JSX.Element[];
  hasWorkSettings?: boolean;
  tabSelected: string;
}

export const UITabs: FC<Props> = ({ children, tabSelected }): JSX.Element => {
  const [tabActive, setTabActive] = useState(tabSelected);

  const foundURL = children.find(tabContent => {
    const { props } = tabContent;
    const { name } = props;
    return name === tabSelected;
  });

  useEffect(() => {
    if (tabSelected && foundURL) setTabActive(tabSelected);
  }, [foundURL, tabSelected]);

  if (!foundURL) return <Redirect to={children[0].props.name} />;

  const renderTabHeader = (tabContent: JSX.Element): JSX.Element => {
    const { props } = tabContent;
    const { text, name, hide } = props;
    const isSelected = tabActive === name;

    return (
      <div key={name}>
        <TabButton name={name} selected={isSelected} onClick={(): void => setTabActive(name)} hide={hide}>
          <UIText text={text} variant="caption" />
        </TabButton>
      </div>
    );
  };

  const renderTabContent = (tabContent: JSX.Element): JSX.Element | null => {
    const isVisible = tabContent.props.name === tabActive;
    if (!isVisible) return null;

    return <TabInner key={tabContent.props.name}>{tabContent}</TabInner>;
  };

  return (
    <UIRow alignItems="center" fullHeight>
      <UIRow alignItems="center">
        <UIColumn fluid flex alignItems="center" justifyContent="flex-start">
          <TabsWrapper>{children.map(renderTabHeader)}</TabsWrapper>
        </UIColumn>
      </UIRow>
      {children.map(renderTabContent)}
    </UIRow>
  );
};
UITabs.displayName = 'Tabs';
