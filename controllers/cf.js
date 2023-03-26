const {PythonShell} = require('python-shell')
const path = require('path');

const pythonPath = path.join(__dirname, '../public/python/');

module.exports = {
  calculate_cf: async (req, res) => {

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: pythonPath,
        args: req.body.jawaban
    };


    PythonShell.run('CF.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        
    }).then((result)=>{
      res.send(result)
    })

  },
  
};