module.exports = {
  connection: 'tasklists',
  tableName: 'lists',
  attributes: {
    name: {
      type: 'string',
      unique: true,
      columnName: 'name',
      required: true
    },
    listId: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      columnName: 'listId',
      autoIncrement: true,
      required: true
    },
    tasksByList: {
      collection: 'Tasks',
      via: 'listId'
    }
  }
};
