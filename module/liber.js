import { liber } from "./sheets/config.js";
//import { LiberMacro } from "./sheets/macro.js";
import { LiberActor } from "./sheets/liberactor.js";
import { LiberActorSheet } from "./sheets/liberactorsheet.js";
import { LiberItem } from "./sheets/liberitem.js";
import { LiberItemSheet } from "./sheets/liberitemsheet.js";
import * as Chat from "./sheets/liberchat.js";
import { Macros } from "./macros.js";

//const myInstance = new MyClass();
Hooks.once("init", async function() {
    console.log(liber.ASCII)
    CONFIG.liber = liber;
	CONFIG.Actor.documentClass = LiberActor;
    CONFIG.Item.documentClass = LiberItem;
    

    CONFIG.Combat.initiative = {
	    formula: "1d6",
	    decimals: 2
	};


    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("liber", LiberItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("liber", LiberActorSheet, { makeDefault: true });

});

/**
 * Crée une macro au drop d'un objet sur la hotbar 
 */
Hooks.on("hotbarDrop", (bar, data, slot) => {
    if (["Item", "ability"].includes(data.type)) {
        Macros.createLiberMacro(data, slot);
        return false;
    }
});
