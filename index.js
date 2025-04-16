const userDisplay = document.getElementById("parseDisplay");
const generateBtn = document.getElementById("generateBtn");
const loadingBar = document.getElementById("loadingBar");

const activities = [
  "Beach Day Bash! Pack the sunscreen, towels, and vibes—let’s ride the waves and maybe build the world’s best sandcastle.",
  "Art & Chill at The Getty—stroll the gardens, soak in some world-class art, and snap artsy selfies.",
  "Mini Road Trip Adventure—let’s drive to a scenic lookout (like Griffith Park or Palos Verdes), blast our playlist, and picnic with a view.",
  "Explore the California Science Center—get hands-on with cool exhibits and say hey to the Space Shuttle Endeavour!",
  "Dive into the Deep at the Aquarium of the Pacific—jellyfish, sharks, and sea otters, oh my!",
  "Cuddle & Movie Marathon—blankets, snacks, and a queue of our fave films. Zero outside world allowed.",
  "Sunset Picnic at the Beach—bring your fave drinks and snacks, and let’s watch the sky put on a show.",
  "LACMA Lights & Late-Night Tacos—hit the museum and then hunt for the best street taco in town.",
  "Retro Date at Santa Monica Pier—arcade games, cotton candy, and a ride on the Ferris wheel under the stars.",
  "Hike & Juice Date—early morning hike at Runyon or Eaton Canyon followed by fresh juice or smoothies.",
  "Local Food Truck Crawl—hit 2-3 food trucks we haven’t tried yet and rate them together!",
  "Indoor Fort + Board Games + Hot Cocoa—let’s build a cozy fort, bring out the games, and act like big kids for the day.",
  "Thrift Store Challenge—$10 budget each to find the funniest or cutest outfit, then wear them to a coffee date!",
  "DIY Spa Day—facials, mani-pedis, and chill music. Let’s pamper each other at home.",
  "Farmers Market Fun—explore the local market, grab fresh goodies, and cook something new together!"
];

const random = () => {
    let rando = activities[Math.floor(Math.random() * activities.length)];
    
    return rando;
};

const reset = () => {
    userDisplay.innerText = "???";
};

const chooseAct = () => {
reset();
    let newActivity = random();
    userDisplay.innerText = newActivity;
    
};

generateBtn.addEventListener("click", () => {
  // Reset display
  userDisplay.textContent = "???";
  loadingBar.classList.remove("hidden");
  loadingBar.style.width = "0%";

  // Start loading animation
  setTimeout(() => {
    loadingBar.style.width = "100%";
  }, 50);

  // After 1.5 seconds, show activity
  setTimeout(() => {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    userDisplay.textContent = randomActivity;
    userDisplay.classList.remove("bounce");
    void userDisplay.offsetWidth;
    userDisplay.classList.add("bounce");

    // Hide loading bar
    loadingBar.classList.add("hidden");
    loadingBar.style.width = "0%";
  }, 1600);
});
