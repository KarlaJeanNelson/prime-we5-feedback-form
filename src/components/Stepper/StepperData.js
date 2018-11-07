const feeling = {
	name: 'feeling',
	message: 'How are you feeling?',
	radioForm: {
		leftAnchor: 'I feel lousy...',
		rightAnchor: 'I feel swell!',
	},
}

const understanding = {
	name: 'understanding',
	message: `How well did you understand the day's material?`,
	radioForm: {
		leftAnchor: 'I am totally lost...',
		rightAnchor: 'I got this!'
	},
}

const support = {
	name: 'support',
	message: 'How supported do you feel?',
	radioForm: {
		leftAnchor: 'I feel abandoned...',
		rightAnchor: 'I feel loved!'
	},
}

const comments = {
	name: 'comments',
	message: 'Please leave some comments!'
}

const steps = [
	feeling,
	understanding,
	support,
	comments
]

export default steps;