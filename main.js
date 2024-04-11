const canvas = document.getElementById("myCanvas");
canvas.width = 400;

const ctx = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9);

const car = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS");

const traffic = [
	new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2),
	new Car(road.getLaneCenter(2), 100, 30, 50, "DUMMY", 1.5),
	new Car(road.getLaneCenter(3), 100, 30, 50, "DUMMY", 3.5),
	new Car(road.getLaneCenter(0), 50, 30, 50, "DUMMY", 3),
	new Car(road.getLaneCenter(4), 200, 30, 50, "DUMMY", 4),
];

animate();

function animate() {
	for(let i = 0; i < traffic.length; i++){
		traffic[i].update(road.borders, [])
	}

	car.update(road.borders, traffic);

	canvas.height = window.innerHeight;

	ctx.save();
	ctx.translate(0, -car.y + canvas.height * 0.7);

	road.draw(ctx);

	for(let i= 0; i < traffic.length; i++){
		traffic[i].draw(ctx, "green")
	}

	car.draw(ctx, "blue");

	ctx.restore();
	requestAnimationFrame(animate);
}
