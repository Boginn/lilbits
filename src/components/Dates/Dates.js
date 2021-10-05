import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Wrapper, Btn, Selection } from './styles';

class DatePicker extends React.Component {
  // TODO can only pick for the future
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
    localStorage.setItem('date', JSON.stringify(day));
  }

  render() {
    return (
      <div>
        <DayPicker
          style={{ color: 'orange' }}
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
        <Selection>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day'}
        </Selection>
      </div>
    );
  }
}

const Dates = () => {
  return (
    <Wrapper>
      <DatePicker />
      {/* TODO: Can't really check against a database that isnt there... */}
      <Btn onClick={() => {}}>Check if available</Btn>
    </Wrapper>
  );
};

export default Dates;
