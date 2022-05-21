import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedID = event.target.id;
    if (this.state.currentView === clickedID) {
      this.setState({
        currentView: null
      });
    } else {
      this.setState({
        currentView: clickedID
      });
    }
  }

  render() {
    const topics = this.props.data;
    const topicList = topics.map(topic =>
      <li key={topic.id}>
        <h2 onClick={this.handleClick} id={topic.id} className="tab">
          {topic.tab}
        </h2>
        <p className={this.state.currentView === topic.id ? 'content' : 'content hidden'}>
          {topic.content}
        </p>
      </li>
    );
    return (
      <ul>
        {topicList}
      </ul>
    );
  }
}

export default Accordion;
