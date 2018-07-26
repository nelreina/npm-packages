const ServiceBus = require('servicebus');
const retry = require('servicebus-retry');
const messageDomain = require('servicebus-message-domain');
module.exports = (options = {}) => {
  const bus = ServiceBus.bus(options);
  bus.use(
    retry({
      store: new retry.MemoryStore()
    })
  );
  bus.use(messageDomain());
  bus.use(bus.logger());
  options.package && bus.use(bus.package());
  options.correlate && bus.use(bus.correlate());
  return bus;
};
