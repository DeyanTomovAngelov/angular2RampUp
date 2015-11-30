module.exports = {
  connection: 'tasklists',
  tableName: 'tasks',
  attributes: {
    listId: {
      model: 'Lists',
      type: 'integer',
      columnName: 'listId',
      required: true
    },
    id: {
      type: 'integer',
      columnName: 'id',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      required: true
    },
    taskName: {
      type: 'string',
      columnName: 'taskName',
      required: true
    },
    date: {
      type: 'datetime',
      columnName: 'date',
      required: true
    }
  }
};
