const {app, BrowserWindow} = require('electron')

let mainWindow;

function main() {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		darkTheme: true,
		show: false,
		minWidth: 600,
		minHeight: 400
	});
	
	mainWindow.loadFile('src/views/pages/index.html');
	
	mainWindow.once('ready-to-show', () => {
		mainWindow.maximize();
		mainWindow.show();
	});

	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', main);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		main ();
	}
})