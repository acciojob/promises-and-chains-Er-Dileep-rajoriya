 let ageInput = document.getElementById("age");
      let nameInput = document.getElementById("name");
      let btn = document.getElementById("btn");

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let name = nameInput.value;
        let age = ageInput.value;

        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age > 18) {
              return resolve(`Welcome, ${name}. You can vote.`);
            } else {
              return reject(`Oh sorry ${name}. You aren't old enough.`);
            }
          }, 4000);
        })
          .then((data) => {
            alert(data);
            ageInput.value = "";
            nameInput.value = "";
          })
          .catch((err) => {
            alert(err);
          });
      });