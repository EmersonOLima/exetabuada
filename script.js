function tabuada() {
    let num = document.getElementById('txtn')
    let ta = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número.')  
    } else {
        let n = Number(num.value)
        let c = 1
        ta.innerHTML = ' '
        while (c <= 10) {
            let item = document.createElement('option')//estou criando um elemnto option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            ta.appenChild(item)//add um elemento filho
            c++
        }
    }
    

}