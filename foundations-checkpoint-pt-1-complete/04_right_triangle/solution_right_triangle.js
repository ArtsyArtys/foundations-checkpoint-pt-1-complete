function rightTriangle(rows)
{
  let myStr = '';
  for (let i = 0; i < rows; i++)
  {
    for (let j = rows - i; j > 0; j--)
    {
      myStr += "*";
    }
    if (i !== rows - 1) { myStr += "\n"; }
  }

  return myStr;
}
