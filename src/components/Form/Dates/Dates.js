import { Component } from 'react';
import DayPicker from 'react-day-picker';
import { useState } from 'react';
import { content } from '../../../data/data';

import { Wrapper, Btn, Message, DatePickerWrapper, Icon } from './styles';
import { displayCenter } from '../../../material/material';
// import 'react-day-picker/lib/style.css';
import './style.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: new Date(),
    };
  }

  handleDayClick(day) {
    const date = new Date();

    if (date.getTime() < day.getTime()) {
      this.setState({
        selectedDay: day,
      });
      this.props.newPick(day);
    }
  }

  render() {
    return (
      <div>
        <DayPicker
          disabledDays={{
            before: new Date(Date.now() + 3600 * 1000 * 24),
          }}
          style={{ color: 'orange' }}
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

const Dates = ({ done, unDone }) => {
  const [available, setAvailable] = useState(false);
  const [message, setMessage] = useState(null);
  const [day, setDay] = useState();

  const errors = content.dates.errors;
  const button = content.dates.button;

  const checkDate = () => {
    let okay = true;
    let bookings = JSON.parse(localStorage.getItem('bookings'));

    if (day) {
      if (bookings) {
        bookings.forEach((order) => {
          if (JSON.stringify(order.date) == JSON.stringify(day)) {
            setMessage(errors.unavailable);
            okay = false;
          }
        });
      }

      if (okay) {
        setAvailable(true);
        done(day);
        setMessage(null);
      }
    } else {
      setMessage(errors.pickDate);
    }
  };

  return (
    <Wrapper>
      <span style={displayCenter}>
        <DatePickerWrapper>
          <DatePicker
            newPick={(d) => {
              unDone();
              setMessage(null);
              setAvailable(false);
              setDay(d);
            }}
          />
        </DatePickerWrapper>
      </span>
      <div style={{ marginTop: '25px' }}>
        {message && (
          <Message>
            <Icon icon="mdi:close-circle-outline" />
            {message}
          </Message>
        )}
        {available && (
          <Message>
            <Icon icon="mdi:check-circle-outline" />
            {day.toDateString()}
          </Message>
        )}
        {!available && !message && (
          <Btn disabled={message} onClick={checkDate}>
            {button}
          </Btn>
        )}
      </div>
    </Wrapper>
  );
};

export default Dates;
