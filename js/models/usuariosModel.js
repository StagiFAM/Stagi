const connection = require('./conexão');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM usuarios');
    return tasks;
};

const addTask = async (task) => {
    const {email, name, lastname, password} = task;
    const dateUTC = new Date(Date.now()).toISOString().replace(/T/, ' ').replace(/\..+/, '');

    const query = "INSERT INTO usuarios(id, name, lastname, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)";

    const [addedTask] = await connection.execute(query, [email, name, lastname, password, dateUTC, dateUTC]);
    return {insertId: addedTask.insertId};
};

const deleteTask = async (id) => {
    const [deletedTask] = await connection.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    return deletedTask;
};

const updateTask = async (id, task) => {
    const {email, name, lastname, password} = task;

    const dateUTC = new Date(Date.now()).toISOString().replace(/T/, ' ').replace(/\..+/, '');

    const query = 'UPDATE usuarios SET id = ?, name = ?, lastname = ?, password = ? WHERE id = ?'

    const [updatedTask] = await connection.execute(query, [email, name, lastname, password, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask,
};