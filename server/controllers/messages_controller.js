let messages = [];
let id = 0;

module.exports = {
    createMsg: (req, res) => {
        // 
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    readMsg: (req, res) => {
        res.status(200).send(messages);
    },
    updateMsg: (req, res) => {

    },
    deleteMsg: (req, res) => {

    } 
}