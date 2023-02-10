function amountOfPages(summary){
    let result = '';
    let num = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        num = i;
        break;
      }
    }

    return num;
  }

  console.log(amountOfPages(25));