module.exports = async (model, Id, data) => {
  const updateModel = await model.findOne({ where: { Id } });
  return await updateModel.update(data);
};
