const path = require('path');
const fs = require('fs');

/* 
 * This function will be responsible for loading all the commands in the commands directory
 * and then registering them with the program object.
 * @commadsDirectory: the directory where the commands are located
 * @commandsFiles: the files in the commands directory (array)
 */

module.exports = (program) => {
    const commandsDirectory = path.resolve(__dirname, 'commands');
    const commandsFile = fs.readdirSync(commandsDirectory);
    
    commandsFile.forEach(file => {
        const command = require(path.resolve(commandsDirectory, file));
        if (typeof command.command === 'function') command(program);
    });
}