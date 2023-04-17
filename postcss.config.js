import PostcssPresetEnv from 'postcss-preset-env';

export default {
	plugins: [
		PostcssPresetEnv({
			stage: 0,
			features: {
				'nesting-rules': true
			}
		}),
	],
}
