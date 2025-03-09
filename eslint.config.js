const js = require('@eslint/js');

module.exports = 
[
	js.configs.recommended,
	{
		languageOptions: 
        {
			ecmaVersion: 'latest',
            sourceType: 'commonjs',
		},
        env: 
        {
			node: true, 
		},
		rules: 
        {

		},
	},
];