let recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  let newRecipes = Object.assign({}, recipes, {[key]: value});
  return newRecipes
  
}