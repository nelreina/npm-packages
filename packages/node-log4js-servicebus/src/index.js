const Servicebus = require('@nelreina/node-servicebus');

const bus = Servicebus();
const serviceBusAppender = (layout, timezoneOffset, queue = 'log.app') => {
  return loggingEvent => {
    bus.publish(queue, layout(loggingEvent, timezoneOffset));
  };
};

const configure = (config, layouts) => {
  let layout = layouts.colouredLayout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return serviceBusAppender(layout, config.timezoneOffset, config.queue);
};

module.exports.configure = configure;
