export function calculateLastWeeksProfit(bakeryObject) {
    let sumTotalSales = 0;

    let sumTotalUsedAmount = [
        { name: "flour", amount: 0 },
        { name: "gluten-free flour", amount: 0 },
        { name: "egg", amount: 0 },
        { name: "sugar", amount: 0 },
        { name: "milk", amount: 0 },
        { name: "soy-milk", amount: 0 },
        { name: "butter", amount: 0 },
        { name: "vanilin sugar", amount: 0 },
        { name: "fruit", amount: 0 },
        { name: "chocolate", amount: 0 },
    ];

    for (const recipe of bakeryObject.recipes) {
        for (const sweet of bakeryObject.salesOfLastWeek) {
            if (sweet.name == recipe.name) {
                const price = recipe.price.replace(/[^0-9]/g, "");
                sumTotalSales += sweet.amount * price;
                //console.log(sweet, recipe);
                calculateUsedAmount(recipe.ingredients, sweet.amount);
            }
        }
    }
    //console.log(sumTotalSales);

    function calculateUsedAmount(ingredients, amount) {
        for (let index = 0; index < sumTotalUsedAmount.length; index++) {
            for (const ingredient of ingredients) {
                if (sumTotalUsedAmount[index].name == ingredient.name) {
                    const totalAmount =
                        Number(ingredient.amount.replace(/[^0-9]/g, "")) * amount;
                    //console.log(ingredient.name, amount);
                    sumTotalUsedAmount[index].amount += totalAmount;
                }
            }
        }
    }

    //console.log(sumTotalUsedAmount);

    let kg = /kg/;
    let liter = /l/;
    let totalExpense = 0;
    for (let i = 0; i < bakeryObject.wholesalePrices.length; i++) {
        if (
            kg.test(bakeryObject.wholesalePrices[i].amount) ||
            liter.test(bakeryObject.wholesalePrices[i].amount)
        ) {
            let wholeslaeAmount =
                Number(
                    bakeryObject.wholesalePrices[i].amount.replace(/[^0-9]/g, "")
                ) * 1000;
            totalExpense +=
                (sumTotalUsedAmount[i].amount / wholeslaeAmount) *
                bakeryObject.wholesalePrices[i].price;
        } else {
            let wholeslaeAmount = Number(
                bakeryObject.wholesalePrices[i].amount.replace(/[^0-9]/g, "")
            );
            totalExpense +=
                (sumTotalUsedAmount[i].amount / wholeslaeAmount) *
                bakeryObject.wholesalePrices[i].price;
        }
    }

    let sumTotalProfit = sumTotalSales - totalExpense;
    console.log("Last week's profit: " + sumTotalProfit);

    return sumTotalProfit;
}
