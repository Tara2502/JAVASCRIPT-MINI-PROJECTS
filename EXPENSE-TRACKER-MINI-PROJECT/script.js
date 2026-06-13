let expenses=[];
//add expense function
const addExpense=(id,title,amount)=>{
    const expense={
        id,
        title,
        amount
    };
    expenses.push(expense);
}
//display expenses function
const displayExpenses=()=>{
    expenses.forEach(expense=>{
        console.log(`ID: ${expense.id}, Title: ${expense.title}, Amount: $${expense.amount}`);
    })
}
//find expense by id function
const findExpenseById=(id)=>{
    const expense=expenses.find(expense=>expense.id===id);
    if(expense){
        console.log(`Expense found: ID: ${expense.id}, Title: ${expense.title}, Amount: $${expense.amount}`);
    }else{
        console.log(`Expense with ID ${id} not found.`);
    }

}

//calculate total expense function
const calculateTotalExpense=()=>{
    const total=expenses.reduce((sum,expense)=>sum+expense.amount,0);
    console.log(`Total expense: $${total}`);
}

//adding sample expense 
addExpense(1,"Groceries",50);
addExpense(2,"Rent",1000);
addExpense(3,"Utilities",150);
// console.log(expenses);
//displaying expenses
displayExpenses();
findExpenseById(2);
calculateTotalExpense();