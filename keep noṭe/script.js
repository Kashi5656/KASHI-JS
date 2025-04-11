

document.getElementById("addtask").addEventListener("click", function () {
    const value = document.getElementById("value").value.trim();

    if (value !== "") {
        const listItem = document.createElement("li");
        listItem.className = "task";
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = value;
        

        const editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.innerHTML = `<i class='ri-pencil-fill'></i>edit`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "cancel";

        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        editButton.addEventListener("click", function () {
            const newValue = prompt("Update your task:", span.textContent);
            if (newValue !== null && newValue.trim() !== "") {
                span.textContent = newValue.trim();
            }
        });
        listItem.appendChild(span);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById("mylist").appendChild(listItem);
        

        document.querySelector(".error").textContent = "";
        document.getElementById("value").value = "";
    } else {
        document.querySelector(".error").textContent = "Please enter a task";
    }
});



