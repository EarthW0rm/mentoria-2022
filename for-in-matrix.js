var jedis = 

["Anakin Skywalker"
, "Obi-Wan Kenobi"
, "Mestre Yoda"
, "Mace Windu"
, "Qui-Gon Jinn"
, "Kit Fisto"];

var quantidade_de_jedis = jedis.length; // Será igual a 6

console.log("O Total de Jedis é:" + quantidade_de_jedis)


var posicao = 0;
if(posicao < jedis.length) {
    console.log(jedis[posicao])
    posicao = posicao + 1;
    if(posicao < jedis.length) {
        console.log(jedis[posicao])
        posicao = posicao +  1
        if(posicao < jedis.length) {
            console.log(jedis[posicao])
            posicao = posicao +  1
            if(posicao < jedis.length) {
                console.log(jedis[posicao])
                posicao = posicao +  1
                if(posicao < jedis.length) {
                    console.log(jedis[posicao])
                    posicao = posicao +  1
                    if(posicao < jedis.length) {
                        console.log(jedis[posicao])
                        posicao = posicao +  1
                        if(posicao < jedis.length) {
                            console.log(jedis[posicao])
                            posicao = posicao +  1
                            if(posicao < jedis.length) {
                                console.log(jedis[posicao])
                                posicao = posicao +  1
                                if(posicao < jedis.length) {
                                    console.log(jedis[posicao])
                                    posicao = posicao +  1
                                }
                            }
                        }
                    }
                }
            }

        }

    }
}


console.log("Aqui começa o comando reformando\n\n\n\n")

for(var posicao = 0; posicao < jedis.length; posicao = posicao + 1) {
    console.log(jedis[posicao])
}


