
export function canMove(source, destination, capacity) {
  if (source.length === 0) return false;

  if (destination.length >= capacity) return false;

  if (source === destination) return false;

  const sourceColor = source[source.length - 1];
  const destinationColor = destination[destination.length - 1];

  if (!destinationColor) return true;

  return sourceColor === destinationColor;
}
