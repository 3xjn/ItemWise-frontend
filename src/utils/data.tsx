let id = 0;

function createData(
    name: string,
    price: string,
    amounts: [number, number]
) {
    return { id: id++, name, price, current: amounts[0], target: amounts[1] };
}

const randomPrice = () => {
    const dollars = Math.floor(Math.random() * 10); // Random dollars (0-99)
    const cents = Math.floor(Math.random() * 100); // Random cents (0-99)
    return `$${dollars}.${cents < 10 ? `0${cents}` : cents}`; // Format price
};

const randomAmounts = (): [number, number] => {
    const max = Math.ceil(Math.random() * 20);
    const min = Math.min(Math.ceil(Math.random() * max), max)
    return [min, max]
}

export { createData, randomPrice, randomAmounts}