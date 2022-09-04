/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class LiberActor extends Actor {

  /** @override */
  prepareData() {
    super.prepareData();
    const actorData = this.system;
    //const data = actorData.data;
    const data = actorData;
    const flags = actorData.flags;
  	//preparation dépendant du type de personnage (
  	if (actorData.type === 'personnage') this._preparePJData(actorData);
  }


   /**
   * Prepare Character type specific data
   */
  _preparePJData(actorData) {
    //const data = actorData.data;
    const data = actorData;
    console.log(`Liber | Préparation Data PJ.\n`);
    console.log(data);
    // ici on peut ajouter au modele de donnée des stat dérivé comme par exemple le calcul des points de mana
    //Calcul encombrement max
    //actorData.data.encombrement.max=(parseInt(actorData.data.force) + parseInt(actorData.data.caracteristique.puissance)) /2 + 20;
    actorData.system.encombrement.max=(parseInt(actorData.force) + parseInt(actorData.system.caracteristique.puissance)) /2 + 20;
    
  }


  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
  }

  /**
   * @override
   * Augment the basic actor data with additional dynamic data. Typically,
   * you'll want to handle most of your calculated/derived data in this step.
   * Data calculated in this step should generally not exist in template.json
   * (such as ability modifiers rather than ability scores) and should be
   * available both inside and outside of character sheets (such as if an actor
   * is queried and has a roll executed directly from it).
   */
  prepareDerivedData() {
    //const actorData = this.data;
    //const data = actorData.data;
    //const flags = actorData.flags.boilerplate || {};

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    //this._prepareCharacterData(actorData);
    //this._prepareNpcData(actorData);
  }
}