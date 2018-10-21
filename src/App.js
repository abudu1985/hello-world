import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class App extends Component {

  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    console.log(oldIndex);
    console.log(newIndex);
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    this.props.onChangeOrder(this.state.items)
  };

  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div >
          <div>
              <input type="text" ref={(input) => { this.trackInput = input }} />
              <button onClick={this.addTrack.bind(this)}>Add track</button>
          </div>
          <div>
              <input type="text" ref={(input) => { this.searchInput = input }} />
              <button onClick={this.findTrack.bind(this)}>Find track</button>
          </div>
          <div>
              <button onClick={this.props.onGetTracks}>Get tracks</button>
          </div>
          <ul>
              {this.props.tracks.map((track, index) =>
                  <li key={index}>{track.name}</li>
              )}
          </ul>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
          dispatch({ type: 'ADD_TRACK', payload });
        },
        onFindTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name});
        },
        onGetTracks: () => {

            dispatch(getTracks());
        },
        onChangeOrder: (items) => {
          dispatch({type: 'REORDER_ITEMS', payload: items})
        }
    })
)(App);
