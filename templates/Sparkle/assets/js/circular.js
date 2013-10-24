$(document).ready(function() {
	var usedColor = "#91c46b";
	var assiColor = "#287e7e";
	var unliColor = "#56606e";
	
	$(".circular").each(function(index, element) {
		var canvas = "#" + $(element).attr("id") + "-canvas";
		var used = parseFloat($(element).attr("used"));
		var available = $(element).attr("available");
		var assigned = parseFloat($(element).attr("assigned"));
		var usedD, usedP, assignedP, assignedD;
				
		// Draw basic circle
		circularCircle(canvas, 40, 0, 270, 8, "#d2d4d8");
		
		// Draw percentages
		if (!isNaN(assigned) && available == "∞") {
			if (assigned > used) {
				// Draw assigned as full circle
				circularCircle(canvas, 38, 0, 270, 4, assiColor);
				// Draw used as percentage of full circle
				usedP = Math.round(100 / assigned * used);
				usedD = 270 * usedP / 100;
				circularCircle(canvas, 42, 0, usedD, 4, usedColor);
			} else if (used > assigned) {
				// Draw used as full circle
				circularCircle(canvas, 42, 0, 270, 4, usedColor);
				// Draw assigned as percentage of full circle
				assignedP = Math.round(100 / used * assigned);
				assignedD = 270 * assignedP / 100;
				circularCircle(canvas, 38, 0, assignedD, 4, assiColor);
			} else {
				circularCircle(canvas, 42, 0, 270, 4, usedColor);
				circularCircle(canvas, 38, 0, 270, 4, assiColor);
			}
			circularText(canvas, 60, 42, 26, "∞")
		} else if (!isNaN(assigned)) {
			available = parseFloat(available);
			
			assignedP = Math.round(100 / available * assigned);
			assignedD = 270 * assignedP / 100;
			circularCircle(canvas, 38, 0, assignedD, 4, assiColor);
			
			usedP = Math.round(100 / available * used);
			usedD = 270 * usedP / 100;
			circularCircle(canvas, 42, 0, usedD, 4, usedColor);
		} else if (available == "∞") {
			circularCircle(canvas, 40, 0, 270, 8, unliColor);
			circularText(canvas, 60, 42, 26, "∞")
		} else {
			available = parseFloat(available);
			usedP = 100 / available * used;
			if (usedP < 1 && usedP > 0) {
				usedP = 1;
			} else {
				usedP = Math.round(usedP);
			}
			usedD = 270 * usedP / 100;
			circularCircle(canvas, 40, 0, usedD, 8, usedColor);
			circularText(canvas, 60, 42, 22, usedP + "%")
		}
		
	});

});

function circularCircle(canvas, radius, start, end, stroke, color) {
	$(canvas).drawArc({
		strokeStyle: color,
		strokeWidth: stroke,
		x: 60, y: 44,
		radius: radius,
		start: start, end: end,
		rotate: -135
	});
}
function circularText(canvas, x, y, size, text) {
	$(canvas).drawText({
		fillStyle: "#343a41",
		x: x, y: y,
		fontSize: size,
		fontFamily: "Lucida Grande, Verdana, sans-serif",
		text: text
	});
}