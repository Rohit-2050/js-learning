const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const course = document.querySelector("#course").value;
    const rollno = document.querySelector("#roll").value;
    const hostel = document.querySelector("#hostel").checked;

    const student = {
        name: name,
        age: Number(age),
        course: course,
        rollno: Number(rollno),
        hostel: hostel
    };

    console.log(student);

    // convert to JSON
    let jsonnified = JSON.stringify(student);
    console.log(jsonnified);

    // 🔥 send to backend (demo endpoint here)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonnified
    })
    .then(res => res.json())
    .then(data => {
        console.log("Server Response:", data);
        alert("Form submitted successfully!");
    })
    .catch(error => console.error("Error:", error));
});
