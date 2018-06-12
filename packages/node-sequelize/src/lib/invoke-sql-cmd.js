module.exports = async (db, query, returnObject = false) => {
  let result;
  try {
    result = await db.query(query, { type: db.QueryTypes.SELECT });
    if (returnObject) {
      result = result.length > 0 ? result[0] : {};
    }
    return result;
  } catch (error) {
    throw error;
  }
};
