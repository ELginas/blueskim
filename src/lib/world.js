export const clampSize = (pos, size, bounds) => {
  if (pos <= bounds[0]) {
    return bounds[0];
  }
  if (pos + size >= bounds[1]) {
    return bounds[1] - size;
  }
  return pos;
};

// From 0 to 1
export const weightPos = (pos, size, weight) => pos + size * weight;

export const directionPos = (pos, size, direction) => {
  return pos - (size * (1 - direction)) / 2;
};
