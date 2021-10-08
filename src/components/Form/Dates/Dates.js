import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Wrapper, Btn, Message } from './styles';
import { useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material/';

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

    this.setState({
      selectedDay: day,
    });

    if (date.getTime() < day.getTime()) {
      this.props.newPick(day);
      // localStorage.setItem('date', JSON.stringify(day));
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
  const [message, setMessage] = useState();
  const [day, setDay] = useState();
  const checkDate = () => {
    // check against API if it conflicts with the schedule
    console.log(day);
    setMessage('Available!');
    done(day);
  };

  return (
    <Wrapper>
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <DatePicker
            newPick={(d) => {
              unDone();
              setMessage(null);
              setDay(d);
            }}
          />
        </div>
        <div>
          {message && (
            <Message>
              <CheckCircleOutline
                style={{
                  fontSize: '200px',
                }}
              />
            </Message>
          )}
        </div>
      </span>
      {!message && <Btn onClick={checkDate}>Check if available</Btn>}
    </Wrapper>
  );
};

export default Dates;
