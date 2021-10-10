import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Wrapper, Btn, Message, DatePickerWrapper, Icon } from './styles';
import { useState } from 'react';

import { content } from '../../../data/data';

class DatePicker extends React.Component {
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
    // check against API if it conflicts with the schedule
    let okay = true;
    let bookings = JSON.parse(localStorage.getItem('bookings'));

    if (day) {
      if (bookings) {
        bookings.forEach((order) => {
          // console.log(JSON.stringify(order.date));
          // console.log(JSON.stringify(day));
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
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        {message && (
          <Message>
            <Icon icon="mdi:close-circle-outline" />

            {message}
          </Message>
        )}
      </div>
    </Wrapper>
  );
};

export default Dates;
