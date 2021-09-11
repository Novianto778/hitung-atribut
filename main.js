const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

btn.addEventListener('click', () => {
  const string = document.querySelector('.input').value;
  const array = string.split(', ');
  const select = document.querySelector('.group input:checked').value;
  const unik = document.querySelector('.unik').value;
  let out;
  if (select == 2) {
    out = kombinasi2(array, unik);
  }
  if (select == 3) {
    out = kombinasi3(array, unik);
  }
  if (select == 4) {
    out = kombinasi4(array, unik);
  }

  output.innerHTML = out;
});

function kombinasi2(array, unik = '12345678') {
  let out = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let a = array[i];
      let b = array[j];
      if (a == unik) {
        out += `{${a}, ${b}}`;
      } else {
        out += `{${a.strike()}, ${b.strike()}}`;
      }
      out += ', ';
    }
  }

  return out;
}

function kombinasi3(array, unik = '12345678') {
  let out = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let a = array[i];
        let b = array[j];
        let c = array[k];
        if (a == unik) {
          out += `{${a}, ${b}, ${c}}`;
        } else {
          out += `{${a.strike()}, ${b.strike()}, ${c.strike()}}`;
        }
        out += ', ';
      }
    }
  }

  return out;
}

function kombinasi4(array, unik = '12345678') {
  let out = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        for (let l = k + 1; l < array.length; l++) {
          let a = array[i];
          let b = array[j];
          let c = array[k];
          let d = array[l];
          if (a == unik) {
            out += `{${a}, ${b}, ${c}, ${d}}`;
          } else {
            out += `{${a.strike()}, ${b.strike()}, ${c.strike()}, ${d.strike()}}`;
          }
          out += ', ';
        }
      }
    }
  }

  return out;
}
