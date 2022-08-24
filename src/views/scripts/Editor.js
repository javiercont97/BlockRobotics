let editor = document.getElementById('editor');
// let toolbox = document.getElementById('toolbox');


// Toolbox
let toolbox = {
	"kind": "categoryToolbox",
	"contents": [
		{
			"kind": "category",
			"name": "Control",
			"colour": "90",
			"contents": [
				{
					"kind": "block",
					"type": "controls_if"
				},
				{
					"kind": "block",
					"type": "controls_repeat_ext"
				},
				{
					"kind": "block",
					"type": "logic_compare"
				}
			]
		},
		{
			"kind": "category",
			"name": "Math",
			"colour": "130",
			"contents": [
				{
					"kind": "block",
					"type": "math_number"
				},
				{
					"kind": "block",
					"type": "math_arithmetic"
				}
			]
		},
		{
			"kind": "category",
			"name": "Text",
			"colour": "170",
			"contents": [
				{
					"kind": "block",
					"type": "text"
				},
				{
					"kind": "block",
					"type": "text_print"
				}
			]
		}
	]
}

// Blockly
let workspace = Blockly.inject(editor, {
	grid:
	{
		spacing: 20,
		length: 3,
		colour: '#ccc',
		snap: true
	},
	trashcan: true,
	move: {
		scrollbars: {
			horizontal: true,
			vertical: true
		},
		drag: true,
		wheel: false
	},
	zoom:
	{
		controls: true,
		wheel: true,
		startScale: 1.0,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
		pinch: true
	},
	toolbox
	// horizontalLayout: true,
});


let playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', e => {
	let code = Blockly.Python.workspaceToCode(workspace);

	console.log(code);
});