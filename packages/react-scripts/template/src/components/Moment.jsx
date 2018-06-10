import moment from 'moment';
const Moment = ({ children, date, time, format }) => {
  if (date) return moment(children).format('DD-MM-YYYY');
  if (time) return moment(children).format('hh:mm A');
  if (format) return moment(children).format(format);
  return moment(children).format('DD-MM-YYYY hh:mm A');
};

export default Moment;
