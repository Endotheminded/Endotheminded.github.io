addLayer("d", {
    name: "Digiegg", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "De", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "digieggs", // Name of prestige currency
    baseResource: "data", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('d', 13)) mult = mult.times(1.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Nurture the digiegg",
            description: "Boost your data by 1.5x",
            cost: new Decimal(1),
        },
        12: {
            title: "Hug the egg",
            description: "Quadruples Data generation",
            cost: new Decimal(5),
        },
        13: {
            title: "Gosh",
            description: "1.5x DigiEgg gain",
            cost: new Decimal(20),
        }
    },
    layerShown(){return true}
})
