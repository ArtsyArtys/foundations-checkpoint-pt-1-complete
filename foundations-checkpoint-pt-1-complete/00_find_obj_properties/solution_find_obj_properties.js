function findObjPropsHasOwn(obj)
{
  let myArr = [];
  for (let i in obj)
  {
    if (obj.hasOwnProperty(i))
    {
      myArr.push(i);
    }
  }

  return myArr.join(", ");
}

function findObjKeys(obj)
{
  let myArr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++)
  {
    myArr.push(keys[i]);
  }

  return myArr.join(", ");
}
