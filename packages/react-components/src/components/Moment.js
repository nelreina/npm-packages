import moment from 'moment';
const Moment = ({ children, date, time, year, format }) => {
  if (date) return moment(children).format('DD-MM-YYYY');
  if (time) return moment(children).format('hh:mm A');
  if (year) return moment(children).format('YYYY');
  if (format) return moment(children).format(format);
  return moment(children).format('DD-MM-YYYY hh:mm:ss A');
};

export default Moment;
