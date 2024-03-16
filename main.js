
let b= prompt('Birinchi sonni kiriting')
let i= prompt('Ikkinchi sonni kiriting')

function katta (son1 , son2) {
    if(son1 > son2){
        return 'eng katta son:' + son1
    }else if(son2>son1){
        return 'eng katta son:' + son2
    }else{
        return'ikkalasiham bir biriga teng'
    }
}

alert(katta(b, i))