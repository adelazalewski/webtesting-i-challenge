module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 0) {
    throw new Error ("item.enhancement cant be less then 0")
  }
  
  if(item.enhancement === 20){
    return { ...item}  
  }
  if(item.enhancement < 20) {
    return {...item, enhancement: item.enhancement + 1}
  }
  
}

function fail(item) {
  if(item.enhancement < 0) {
    throw new Error ("item.enhancement cant be less then 0")
  }
  if(0 >= item.enhancement < 15) {
    return {...item, durability: item.durability - 5}
  }
  if(item.enhancement === 15 || item.enhancement === 16) {
    return {...item, durability: item.durability - 10}
  }
  if(item.enhancement === 17 || item.enhancement === 18) {
    return {...item, enhancement: item.enhancement - 1}
  }
  
  
}

function repair(item) {
  if(item.durability <= 100){
  return { ...item, durability: 100 };
  }
}

function get(item) {
  return { ...item };
}
