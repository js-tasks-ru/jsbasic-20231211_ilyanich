function checkSpam(str) {
  if (
    str.toLowerCase().includes("1xBet".toLowerCase()) ||
    str.toLowerCase().includes("XXX".toLowerCase())
  ) {
    return true;
  } else {
    return false;
  }
}
