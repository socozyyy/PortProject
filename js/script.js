const listBody = document.querySelector("#listBody");

// detail.textContent = "Suranaree University of Technology center";

fetch("../data/mylist.json")
  .then((response) => response.text())
  .then((text) => {
    const myList = JSON.parse(text);

    console.log(myList);

    for (const exp of myList) {
      const li = document.createElement("li");
      li.innerHTML += `
      <div class="left">
        <h3 id="name">${exp.name}</h3>
        <p id="detail">${exp.detail}</p>
        </div>
        <span id="year">${exp.year}</span>
      `;
      li.classList.add("xpbox");
      listBody.append(li);
    }

    // ---------- Level 3 · Status ----------
    // Inside the loop:
    //   1. add one more cell at the end:   <td class="status">${anime.status}</td>
    //   2. give the row a color:          tr.classList.add(anime.status);

    // ---------- Bonus (if you finish early) ----------
    // A · Score "-": when anime.score is 0, show "-" instead of 0.
    //
    //
    // B · Tabs: clicking #tab-watching hides (class "hidden") every row that isn't "watching".
    //     Same for #tab-completed and #tab-planned. #tab-all shows every row again.
    //     Tip: row.classList.contains("watching") tells you a row's status.
  });
