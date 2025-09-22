/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;
  let result = days * dailyRate;

  if (days >= 7) {
    result = result - discountFor7Days;

    return result;
  }

  if (days >= 3) {
    result = result - discountFor3Days;

    return result;
  } else {
    return result;
  }
}

module.exports = calculateRentalCost;
