/** @format */

import React, { Component } from 'react';
import { UIText } from '../../components-ui/Text';
import { Inner } from './partials/Inner';
import { Card } from './partials/Card';
import { List } from './partials/List';
import { ListHeader } from './partials/ListHeader';
import { ListWrapper } from './partials/ListWrapper';
import { Outer } from './partials/Outer';

class Board extends Component {
  state = {
    tasks: [
      {
        name: 'Task 1',
        category: 'wip',
      },
      {
        name: 'Task 2',
        category: 'wip',
      },
      {
        name: 'Task 3',
        category: 'complete',
      },
    ],
  };
  // @ts-ignore
  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };
  // @ts-ignore
  onDragOver = e => {
    e.preventDefault();
  };
  // @ts-ignore
  onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData('id');

    const tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    const tasks = {
      wip: [],
      complete: [],
    };

    this.state.tasks.forEach(t => {
      // @ts-ignore
      tasks[t.category].push(
        <Card key={t.name} onDragStart={e => this.onDragStart(e, t.name)} draggable>
          <UIText text={t.name} variant="caption" />
        </Card>,
      );
    });

    return (
      <Outer>
        <Inner>
          <ListWrapper>
            <List
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => {
                this.onDrop(e, 'wip');
              }}
            >
              <ListHeader>
                <UIText text="LISTA 1" variant="title" />
              </ListHeader>
              {tasks.wip}
            </List>
          </ListWrapper>

          <ListWrapper>
            <List onDragOver={e => this.onDragOver(e)} onDrop={e => this.onDrop(e, 'complete')}>
              <ListHeader>
                <UIText text="LISTA 2" variant="title" />
              </ListHeader>
              {tasks.complete}
            </List>
          </ListWrapper>
        </Inner>
      </Outer>
    );
  }
}

export { Board };
