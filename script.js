const input = document.getElementById("input");
let memory = "";
let lastAns = "";

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    switch (val) {
      case "AC":
        input.value = "";
        break;
      case "DEL":
        input.value = input.value.slice(0, -1);
        break;
      case "=":
        try {
          let expression = input.value
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan")
            .replace(/log/g, "Math.log10")
            .replace(/ln/g, "Math.log")
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E")
            .replace(/√/g, "Math.sqrt")
            .replace(/x\^2/g, "**2")
            .replace(/x\^3/g, "**3")
            .replace(/x\^y/g, "**")
            .replace(/Ans/g, lastAns);

          lastAns = eval(expression);
          input.value = lastAns;
        } catch {
          input.value = "Error";
        }
        break;
      case "x^2":
        input.value += "**2";
        break;
      case "x^3":
        input.value += "**3";
        break;
      case "x^y":
        input.value += "**";
        break;
      case "√":
        input.value += "√";
        break;
      case "sin":
      case "cos":
      case "tan":
      case "log":
      case "ln":
        input.value += `${val}(`;
        break;
      case "( )":
        input.value += "()";
        break;
      case "Ans":
        input.value += "Ans";
        break;
      case "SHIFT":
      case "ALPHA":
      case "MODE":
      case "CLR":
      case "ON":
        alert(`${val} is a non-functional placeholder in this version.`);
        break;
      default:
        input.value += val;
    }
  });
});
