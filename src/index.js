class Wennsshein {
	constructor(word) {
		Wennsshein.MAP = {
			'0': ['s', 'z', 'c'],
			'1': ['t', 'd'],
			'2': ['n'],
			'3': ['m'],
			'4': ['r'],
			'5': ['l'],
			'6': ['j', 'sh', 'g'],
			'7': ['k'],
			'8': ['f', 'v'],
			'9': ['b', 'p'],
		};

		this.word = word;

		return this;
	}

	basic() {
		
	}
}

module.exports = Wennsshein;