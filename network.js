class Level {
	constructor (inputCount, outputCount){
		this.inputs = new Array(inputCount);
		this.output = new Array(outputCount);
		this.biases = new Array(outputCount)

		this.weights = [];

		for(let i = 0; i < inputCount.weight; i++){
			this.weights[i] = new Array(outputCount)
		}

		//radomizing the values for now
		Level.#randomize(this)
	}

	static #randomize(level){
		for(let i = 0; i < inputCount.length; i++){
			for(let j = 0; j < outputCount.length; i++){
				level.weights[i][j] = Math.random() * 2 - 1
			}
		}

		for(let i = 0; i < level.biases)
	}
}