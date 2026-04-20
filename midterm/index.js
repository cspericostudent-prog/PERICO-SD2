const pokemonList = {
    Pikachu: {
        level: 5,
        baseHP: 100,
        skill: "Thunderbolt",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    Charmander: {
        level: 5,
        baseHP: 100,
        skill: "Flamethrower",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    Bulbasaur: {
        level: 5,
        baseHP: 110,
        skill: "Vine Whip",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    Squirtle: {
        level: 5,
        baseHP: 120,
        skill: "Water Gun",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    }
};

// Pokemon
function Pokemon(name, data) {
    this.name = name;
    this.level = data.level;
    this.maxHP = data.baseHP * data.level;
    this.hp = this.maxHP;
    this.skill = data.skill;
    this.sprite = data.sprite;

    // PP system
    this.pp = {
        tackle: 15,
        skill: 15,
        heal: 3
    };

    this.alive = function () {
        if (this.hp > 0) {
            return true;
        } else {
            return false;
        }
    };

    // Tackle
    this.tackle = function (target) {
        if (this.pp.tackle <= 0) {
            log(this.name + " has no PP for Tackle");
            return;
        }

        this.pp.tackle = this.pp.tackle - 1;

        let dmg = 50;
        target.hp = target.hp - dmg;

        if (target.hp < 0) {
            target.hp = 0;
        }

        log(this.name + " used Tackle (-" + dmg + ")");
    };

    // Skill attack
    this.skillAttack = function (target) {
        if (this.pp.skill <= 0) {
            log(this.name + " has no PP for Skill");
            return;
        }

        this.pp.skill = this.pp.skill - 1;

        let dmg = 150;
        target.hp = target.hp - dmg;

        if (target.hp < 0) {
            target.hp = 0;
        }

        log(this.name + " used " + this.skill + " (-" + dmg + ")");
    };

    // Heal
    this.heal = function () {
        if (this.pp.heal <= 0) {
            log(this.name + " has no PP for Heal");
            return;
        }

        this.pp.heal = this.pp.heal - 1;

        let healAmount = 120;

        if (this.hp < this.maxHP) {
            this.hp = this.hp + healAmount;

            if (this.hp > this.maxHP) {
                this.hp = this.maxHP;
            }

            log(this.name + " used Heal +" + healAmount);
        } else {
            log(this.name + " HP is already full");
        }
    };
}

let player;
let enemy;
let playerTurn = true;

// select pokemon
function selectPokemon(choice) {
    player = new Pokemon(choice, pokemonList[choice]);

    let names = Object.keys(pokemonList);
    let enemyChoice = names[Math.floor(Math.random() * names.length)];

    while (enemyChoice == choice) {
        enemyChoice = names[Math.floor(Math.random() * names.length)];
    }

    enemy = new Pokemon(enemyChoice, pokemonList[enemyChoice]);

    document.getElementById("selection").style.display = "none";
    document.getElementById("game").style.display = "block";

    log("You picked " + player.name);
    log("Enemy picked " + enemy.name);

    updateUI();
    showTurn();
}

// update UI
function updateUI() {
    document.getElementById("playerName").innerText = player.name;
    document.getElementById("enemyName").innerText = enemy.name;

    document.getElementById("playerSprite").src = player.sprite;
    document.getElementById("enemySprite").src = enemy.sprite;

    document.getElementById("playerStats").innerText =
        "HP: " + player.hp + " / " + player.maxHP;

    document.getElementById("enemyStats").innerText =
        "HP: " + enemy.hp + " / " + enemy.maxHP;

    let p = (player.hp / player.maxHP) * 100;
    let e = (enemy.hp / enemy.maxHP) * 100;

    document.getElementById("playerHP").style.width = p + "%";
    document.getElementById("enemyHP").style.width = e + "%";

    hpColor("playerHP", p);
    hpColor("enemyHP", e);

    updatePPUI();
}

// HP color
function hpColor(id, percent) {
    let bar = document.getElementById(id);

    if (percent > 60) {
        bar.style.background = "green";
    } else if (percent > 30) {
        bar.style.background = "orange";
    } else {
        bar.style.background = "red";
    }
}

// turn
function showTurn() {
    if (playerTurn == true) {
        log("Your Turn");
    } else {
        log("Enemy Turn");
    }
}

// log
function log(msg) {
    let box = document.getElementById("log");
    box.innerHTML = box.innerHTML + msg + "<br>";
    box.scrollTop = box.scrollHeight;
}

// player action
function playerAction(action) {
    if (playerTurn == false) return;
    if (!player.alive() || !enemy.alive()) return;

    if (action == "tackle") {
        player.tackle(enemy);
    }

    if (action == "skill") {
        player.skillAttack(enemy);
    }

    if (action == "heal") {
        player.heal();
    }

    updateUI();

    if (!enemy.alive()) {
        log("You win!");
        return;
    }

    playerTurn = false;
    showTurn();

    setTimeout(enemyTurn, 1000);
}

// enemy turn
function enemyTurn() {
    if (!enemy.alive()) return;

    let r = Math.random();

    if (r < 0.5) {
        enemy.tackle(player);
    } else {
        enemy.skillAttack(player);
    }

    updateUI();

    if (!player.alive()) {
        log("You lose!");
        return;
    }

    playerTurn = true;
    showTurn();
}

// PP display
function updatePPUI() {
    document.getElementById("ppTackle").innerText =
        "PP: " + player.pp.tackle;

    document.getElementById("ppSkill").innerText =
        "PP: " + player.pp.skill;

    document.getElementById("ppHeal").innerText =
        "PP: " + player.pp.heal;
}
