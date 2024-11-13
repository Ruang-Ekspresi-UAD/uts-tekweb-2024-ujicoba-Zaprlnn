function showAlert() {
    const name = document.getElementById("name").textContent;
    const nim = document.getElementById("nim").textContent;
    const university = document.getElementById("university").textContent;
    const faculty = document.getElementById("faculty").textContent;
    const program = document.getElementById("program").textContent;
    
    alert(`Nama: ${name}\nNIM: ${nim}\nKampus: ${university}\nFakultas: ${faculty}\nProdi: ${program}`);
  }
  