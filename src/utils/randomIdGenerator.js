function generateRandomId() {
  return Math.random()
    .toString(36)
    .substring(7)
}

export {
  generateRandomId,
}
