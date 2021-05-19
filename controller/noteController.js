let connection = require('../config/db'); 

let noteController={}

// VER TODAS LAS NOTAS
noteController.viewNotes=(req,res) =>{

    let sql=`SELECT * FROM notes`;

    connection.query(sql,(err,results)=>{
        if(err)throw err;
        
        res.render('back', {results})
    })
}

// VER UNA NOTA
noteController.viewOneNote=(req, res)=>{

    let notes_id = req.params.notes_id;
    let sql = `SELECT * FROM notes WHERE notes_id = ${notes_id}`; 

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.redirect('back'); 
    })
   
}

// CREAR NOTA 
noteController.postNote=(req, res)=>{

    let {name} = req.body; 
    console.log(name);  

    let sql = `INSERT INTO notes (name)
    VALUES ('${name}')`; 

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.status(200).redirect('back'); 
    })
}

// VER TODAS LAS NOTAS FAVORITAS
noteController.viewFavNote=(req, res)=>{

    let sql = `SELECT * FROM favs`; 

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.redirect('back'); 
    })
   
}

// ELIMINAR NOTA
noteController.delete = (req, res)=>{

    let notes_id = req.params.notes_id; 
    let idfavs = req.params.idfavs; 

    let sql = `DELETE FROM notes WHERE notes_id = ${notes_id}`

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.redirect('back'); 
    })
}


module.exports = noteController; 