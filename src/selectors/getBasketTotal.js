//Selector

const getBasketTotal = (Basket) =>
{
    const reducer = (accumalator,currentValue) =>
    {
     return accumalator + currentValue;
    };

    return Basket.map((item) => item.price)
    .reduce(reducer,0);
};

export default getBasketTotal;