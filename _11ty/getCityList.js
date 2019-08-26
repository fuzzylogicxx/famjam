module.exports = function(collection) {
  let citySet = new Set();
  collection.getAll().forEach(function(item) {
    if( "city" in item.data ) {
      let city = item.data.city;

      citySet.add(city);
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...citySet];
};
