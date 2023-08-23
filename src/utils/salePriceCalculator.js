const salePriceCalculator = (price, sale) => {
    let offPrice = price / 100 * sale;

    return price - offPrice;
};

export default salePriceCalculator;
