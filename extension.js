// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const { text } = require('stream/consumers');
const vscode = require('vscode');
const axios = require('axios');


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	console.log('Congratulations, your extension "linc" is now active!');


	let disposable = vscode.commands.registerCommand('alinc.helloWorld', function () {

		vscode.window.showInformationMessage('Linc is opening your file in the browser!');
		
		let textwhat = vscode.window.activeTextEditor.document.getText();
		module.exports.textWhat;
		console.log(textwhat);

		const token_id = "8fde794f-541f-478c-a655-3c4c13d93867";

		let url = "https://webhook.site/" + token_id;
		let string = textwhat;


		//Using the fetch API to post the the text from the ActiveTextDocument
		fetch(url, {
  			method: "POST", 
  			headers: {
    					"Content-Type": "text/plain"
  					 },
  			body: string 
					})
  					.then(response => {
    					console.log(response.status); 
    					console.log(response.statusText); 
						let text = response.text()
						vscode.env.openExternal('https://webhook.site/token/'+ token_id +'/request/latest/raw');
  					}).then(console.log(text)).then()
  						.catch(error => {
    							console.error(error);
  					});


	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
}
