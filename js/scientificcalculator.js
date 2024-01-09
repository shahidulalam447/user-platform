function appendSymbol(symbol) {
    document.getElementById('sci-display').value += symbol;
  }

  function appendNumber(number) {
    document.getElementById('sci-display').value += number;
  }

  function appendFunction(func) {
    document.getElementById('sci-display').value += func + '(';
  }

  function clearDisplay() {
    document.getElementById('sci-display').value = '';
  }

  function deleteLast() {
    var current = document.getElementById('sci-display').value;
    document.getElementById('sci-display').value = current.slice(0, -1);
  }

  function calculate() {
    try {
      var result = eval(document.getElementById('sci-display').value);
      document.getElementById('sci-display').value = result;
    } catch (error) {
      document.getElementById('sci-display').value = 'Error';
    }
  }