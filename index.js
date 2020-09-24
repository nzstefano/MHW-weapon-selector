function show(el) {
  document.getElementById(el).style.display = "block";
}

const weaponDetail = {
  longsword: {
    playstyle: "technic",
    difficulty: "hard",
    type: "damage",
  },
  dualblades: {
    playstyle: "light",
    difficulty: "medium",
    type: "damage",
  },
  greatsword: {
    playstyle: "heavy",
    difficulty: "hard",
    type: "damage",
  },
  swordnshield: {
    playstyle: "light",
    difficulty: "easy",
    type: "defend",
  },
  hammer: {
    playstyle: "heavy",
    difficulty: "hard",
    type: "support",
  },
  huntinghorn: {
    playstyle: "technic",
    difficulty: "medium",
    type: "support",
  },
  lance: {
    playstyle: "heavy",
    difficulty: "easy",
    type: "defend",
  },
  gunlance: {
    playstyle: "heavy",
    difficulty: "medium",
    type: "damage",
  },
  switchaxe: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  chargeblade: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  insectglaive: {
    playstyle: "technic",
    difficulty: "hard",
    type: "damage",
  },
  bow: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  lightbowgun: {
    playstyle: "light",
    difficulty: "easy",
    type: "damage",
  },
  heavybowgun: {
    playstyle: "heavy",
    difficulty: "easy",
    type: "damage",
  },
};

const result = (answer1, answer2, answer3, answer4) => {
  let print = [];
  for (const key in weaponDetail) {
    let temp = {};
    temp.name = key;
    temp.value = 0;
    if (answer1 === weaponDetail[key].difficulty) {
      if (answer4 === weaponDetail[key].difficulty) {
        temp.value += 5;
        // } else if (answer4[1] === weaponDetail[key].difficulty) {
        //   temp.value += 2;
      } else {
        temp.value += 2;
      }
    }
    if (answer2 === weaponDetail[key].playstyle) {
      if (answer4 === weaponDetail[key].playstyle) {
        temp.value += 5;
        // } else if (answer4[1] === weaponDetail[key].playstyle) {
        //   temp.value += 2;
      } else {
        temp.value += 2;
      }
    }
    if (answer3 === weaponDetail[key].type) {
      if (answer4 === weaponDetail[key].type) {
        temp.value += 5;
        // } else if (answer4[1] === weaponDetail[key].type) {
        //   temp.value += 2;
      } else {
        temp.value += 2;
      }
    }
    print.push(temp);
  }

  print.sort(function (a, b) {
    return b.value - a.value;
  });

  // return print;
  if (print[0].value > print[1].value) {
    return [print[0].name];
  } else if (print[0].value === print[1].value) {
    if (print[1].value === print[2].value) {
      return [print[0].name, print[1].name, print[2].name];
    } else {
      return [print[0].name, print[1].name];
    }
  }
};

console.log(result("easy", "light", "defense", "light"));
console.log(result("normal", "technic", "support", "normal"));
console.log(result("medium", "heavy", "defense", "defense"));
