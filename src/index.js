const toDo = {
    notes:[
        {id: 1, value:"JS", completed: false, time: 1591234567891},
        {id: 2, value:"World", completed: false, time: 1559876543210},
        {id: 3, value:"Hello", completed: false, time: 1559876543210},
    ],

    checkFotUnique (value) {
        return toDo.notes.find(function(input){
            return input.value===value;
        })
    },
    addNote (value) {
        const note = {
            id:toDo.notes.length+1,
            value,
            completed: false,
            time: Date.now(),
        };
        if (this.checkFotUnique(note.value)) {
            alert (`Задача со значением ${note.value} уже существует`)
        }else{
            toDo.notes.push (note)
       }
},
    removeNote (id, confirm) {
        if (confirm) {
            this.notes = this.notes.filter(function (note) {
                return note.id !== id;
              });
        }
    },
    completeNote (id){
        this.notes = this.notes.map(note => ({
            ...note,
            completed: note.id ===id ? true : note.completed
        }))
    },
    editNote (id, value,confirm){
        if (confirm){
            this.notes = this.notes.map( note => {
                let newNote = note;
                if (note.id ===id) {
                    newNote = {
                        ...note,
                        value
                    }
                }
                return newNote
            });
        }
    },
    get statistic () {
        const completed = this.notes.filter(note => note.completed).length;
        return {
            total: this.notes.length,
            completed
        };
    },
}


// toDo.removeNote(1591234567891, confirm("Remove?"))
toDo.addNote ("uborka")
toDo.addNote ("valid")
toDo.addNote ("uborka")
// toDo.notes.forEach(element => console.log(element.id.length-1))
toDo.completeNote(3)
console.log (toDo.notes)
// toDo.addNote ("uborka")
// console.log (toDo)
// toDo.addNote ("uborka")

// console.log (toDo.statistic)

Object.defineProperty(toDo, "notes", {
    enumerable: false,
    writable: false, 
    configurable: false
})
