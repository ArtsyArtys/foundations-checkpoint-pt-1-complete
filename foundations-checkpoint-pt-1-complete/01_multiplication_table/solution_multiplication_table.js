function multiplicationTable(rows, cols)
{
  let myRow = [];
  let myArr = [];
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < cols; j++)
    {
      myRow.push((j + 1) * (i + 1));
    }
    myArr.push(myRow);
    myRow = [];
  }

  return myArr;
}
