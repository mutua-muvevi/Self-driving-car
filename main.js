const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 450;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 800;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);

const car = new Car(road.getLaneCenter(2), 100, 30, 50, "AI");
// const car = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS");

const traffic = [
	new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(0), -500, 30, 60, "DUMMY", 1),
	new Car(road.getLaneCenter(3), 500, 30, 60, "DUMMY", 3),
	new Car(road.getLaneCenter(1), 200, 30, 50, "DUMMY", 1),
	new Car(road.getLaneCenter(2), 300, 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(3), 300, 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(4), 200, 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(5), 500, 30, 50, "DUMMY", 3),
	new Car(road.getLaneCenter(5), -700, 30, 50, "DUMMY", 1),
];

animate();

function animate() {
	for(let i = 0; i < traffic.length; i++){
		traffic[i].update(road.borders, [])
	}

	car.update(road.borders, traffic);

	carCanvas.height = window.innerHeight;
	networkCanvas.height = window.innerHeight;

	carCtx.save();
	carCtx.translate(0, -car.y + carCanvas.height * 0.7);

	road.draw(carCtx);

	for(let i= 0; i < traffic.length; i++){
		traffic[i].draw(carCtx, "green")
	}

	car.draw(carCtx, "blue");

	carCtx.restore();

	Visualizer.drawNetwork(networkCtx, car.brain)
	requestAnimationFrame(animate);
}
