import { Wrapper, TextArea, Btn } from './styles';

const DatePicker = () => {
  function formatDate() {
    let date = new Date(),
      year = date.getFullYear(),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  return (
    <Wrapper>
      <TextArea
        minDate={formatDate()}
        id="date"
        label="Birthday"
        type="date"
        defaultValue={formatDate()}
        sx={{ width: 220 }}
      />
      <TextArea
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        sx={{ width: 150 }}
      />
      <Btn />
    </Wrapper>
  );
};

export default DatePicker;
