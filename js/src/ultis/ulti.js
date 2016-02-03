export function tbind(a, b) {
  if (typeof(b) === 'string') {
    a[b].bind(a);
  }
  else { /* array */
    for (var key of b) {
      a[key].bind(a);
    }
  }
}
