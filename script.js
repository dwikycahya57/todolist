// tanggal
function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('id-ID', options);
}

// tanggal di header
document.getElementById('current-date').textContent = getCurrentDate();

function addTask() {
    const taskText = document.getElementById('task-text').value.trim();
    const priority = document.getElementById('priority').value;
    
    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `[${priority}] ${taskText}`;
    li.appendChild(span);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (this.checked) {
            li.classList.add('done');
            moveTaskToDone(li);
        } else {
            li.classList.remove('done');
            document.getElementById('task-list').appendChild(li);
        }
    };
    li.appendChild(checkbox);

    document.getElementById('task-list').appendChild(li);
    document.getElementById('task-text').value = "";
}

function moveTaskToDone(taskElement) {
    document.getElementById('done-list').appendChild(taskElement);
}

function deleteAllTasks() {
    if (confirm("Apakah anda yakin ingin menghapus semua daftar To-Do-List?")) {
        document.getElementById('task-list').innerHTML = "";
        document.getElementById('done-list').innerHTML = "";
    }
}
