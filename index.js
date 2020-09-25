//function to show hidden
function show(el) {
  document.getElementById(el).style.display = "block";
}

//function to hide
function hide(el) {
  document.getElementById(el).style.display = "none";
}

//weapon database
const weaponDetail = {
  "Long Sword": {
    playstyle: "technic",
    difficulty: "hard",
    type: "damage",
    img: "lspict",
  },
  "Dual Blades": {
    playstyle: "light",
    difficulty: "medium",
    type: "damage",
  },
  Greatsword: {
    playstyle: "heavy",
    difficulty: "hard",
    type: "damage",
  },
  "Sword And Shield": {
    playstyle: "light",
    difficulty: "easy",
    type: "defend",
  },
  Hammer: {
    playstyle: "heavy",
    difficulty: "hard",
    type: "support",
  },
  "Hunting Horn": {
    playstyle: "technic",
    difficulty: "medium",
    type: "support",
  },
  Lance: {
    playstyle: "heavy",
    difficulty: "easy",
    type: "defend",
  },
  Gunlance: {
    playstyle: "heavy",
    difficulty: "medium",
    type: "damage",
  },
  Switchaxe: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  Chargeblade: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  "Insect Glaive": {
    playstyle: "technic",
    difficulty: "hard",
    type: "damage",
    img: "igpict",
  },
  Bow: {
    playstyle: "technic",
    difficulty: "medium",
    type: "damage",
  },
  "Light Bowgun": {
    playstyle: "light",
    difficulty: "easy",
    type: "damage",
    img: "lbpict",
  },
  "Heavy Bowgun": {
    playstyle: "heavy",
    difficulty: "easy",
    type: "damage",
  },
};

// function to calculate point for each answer
const result = (answer1, answer2, answer3, answer4) => {
  let print = [];
  for (const key in weaponDetail) {
    let temp = {};
    temp.name = key;
    temp.value = 0;
    if (answer1 === weaponDetail[key].difficulty) {
      if (answer4 === "difficulty") {
        temp.value += 3;
      } else {
        temp.value += 1;
      }
    }
    if (answer2 === weaponDetail[key].playstyle) {
      if (answer4 === "playstyle") {
        temp.value += 3;
      } else {
        temp.value += 1;
      }
    }
    if (answer3 === weaponDetail[key].type) {
      if (answer4 === "type") {
        temp.value += 3;
      } else {
        temp.value += 1;
      }
    }
    print.push(temp);
  }

  print.sort(function (a, b) {
    return b.value - a.value;
  });

  if (print[0].value > print[1].value) {
    return print[0].name;
  } else if (print[0].value === print[1].value) {
    if (print[1].value === print[2].value) {
      return `${print[0].name}, ${print[1].name}, ${print[2].name}`;
    } else {
      return `${print[0].name}, ${print[1].name}`;
    }
  }
};

//check if radio is checked
const check = (value) => {
  let print = "";
  for (var i = 0, length = value.length; i < length; i++) {
    if (value[i].checked) {
      print += value[i].value;
      break;
    }
  }
  return print;
};

//final function, to hide things and show the final result
const combinedFunction = () => {
  hide("question");
  hide("headline");
  hide("start");
  show("resultDiv");
  show("result");

  let answer1 = document.getElementsByName("difficulty");
  let answer2 = document.getElementsByName("playstyle");
  let answer3 = document.getElementsByName("type");
  let answer4 = document.getElementsByName("important");

  const result1 = check(answer1);
  const result2 = check(answer2);
  const result3 = check(answer3);
  const result4 = check(answer4);

  const final = result(result1, result2, result3, result4);

  // belom nemuin logic yg cocok untuk menampilkan gambar jika jawaban lebih dari 1

  // document
  //   .getElementById("picResult")
  //   .classList.add(`${weaponDetail[final].img}`);

  let titleText = document.createElement("H2");
  let title = document.createTextNode(`${final}`);
  titleText.appendChild(title);
  document.getElementById("result").appendChild(titleText);
};
