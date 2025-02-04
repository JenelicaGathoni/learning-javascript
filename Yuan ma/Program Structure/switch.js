switch (prompt("What's the weather like today?")) {
  case "rainy":
    console.log("Remeber to bring an Umbrella");
    break;
  case "sunny":
    console.log("Dress Lightly");
    break;
  case "cloudy":
    console.log(" Anything is possible");
    break;
  default:
    console.log("Unknown weather type");
    break;
}
