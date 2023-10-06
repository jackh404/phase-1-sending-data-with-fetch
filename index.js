// Add your code here
const formData = {
    dogName: "Rocket",
    dogBreed: "Husky"
}

function configObj(name,email) {
    return {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
}

function submitData(name,email){
    return fetch("http://localhost:3000/users",configObj(name,email))
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const userNum = document.createElement('h4')
            userNum.textContent = data.id
            document.body.append(userNum)
        })
        .catch(error =>{
            alert("Whoopsie poopsie! That's an error!")
            document.body.append(error.message)
        })
}