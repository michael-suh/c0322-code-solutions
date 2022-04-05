/* exported defaults */
function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
  return target;
}

// use for in loop to find keys of source
// if target[keys] is undefined, set target at keys equal to source at keys
// return output
