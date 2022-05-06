const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Matrix {
  constructor (altura, anchura) {
    this._altura = altura
    this._anchura = anchura
    this._matrix = this._generateRandom()
  }

  _generateRandom () {
    const matrix = new Array(this._altura).fill(new Array(this._anchura).fill('')).map(fila => fila.map(_ => 0))

    for (let fi = 1; fi < matrix.length - 1; fi++) {
      for (let ci = 1; ci < matrix[fi].length - 1; ci++) {
        matrix[fi][ci] = Math.round(Math.random())
      }
    }
    return matrix
  }

  /* setAnchura(anchura) {
        this.anchura = anchura
    }
    setAltura(altura) {
        this.altura = altura
    } */
  getMatrix () {
    return this._matrix
  }

  setMatrix (matrix) {
    this._matrix = matrix
  }

  getAnchura () {
    return this._anchura
  }

  getAltura () {
    return this._altura
  }

  show () {
    console.log(this._matrix.map(f => f.join(' ')).join('\n'))
  }
}

function askOption () {
  return new Promise((resolve) => {
    rl.question('Selecciona una opción:', async function (data) {
      resolve(data)
    })
  })
}

async function main () {
  const matrix = new Matrix(5, 5)
  let char = 's'
  console.log('bienvenidos al juego de la vida')
  while (char === 's') {
    console.log('1 - verificar si estan vivos')
    const opc = await askOption()
    switch (opc) {
      case '1':
        matrix.show()
        matrix.setMatrix(nextGeneration(matrix))
        break
      default:
    }
    console.log('desea continuar s/n:')
    char = await askOption()
    if (char === 'n') rl.close()
  }
}

function nextGeneration (matrix) {
  const aux = new Array(matrix.getAltura()).fill(new Array(matrix.getAnchura()).fill('')).map(fila => fila.map(_ => 0))

  for (let x = 1; x < matrix.getMatrix().length - 1; x++) {
    for (let y = 1; y < matrix.getMatrix()[x].length - 1; y++) {
      let VecinosVivos = 0
      if (matrix.getMatrix()[x - 1][y - 1] === 1) VecinosVivos++
      if (matrix.getMatrix()[x][y - 1] === 1) VecinosVivos++
      if (matrix.getMatrix()[x + 1][y - 1] === 1) VecinosVivos++

      if (matrix.getMatrix()[x - 1][y] === 1) VecinosVivos++
      if (matrix.getMatrix()[x + 1][y] === 1) VecinosVivos++

      if (matrix.getMatrix()[x - 1][y + 1] === 1) VecinosVivos++
      if (matrix.getMatrix()[x][y + 1] === 1) VecinosVivos++
      if (matrix.getMatrix()[x + 1][y + 1] === 1) VecinosVivos++

      if (matrix.getMatrix()[x][y] === 0) {
        if (VecinosVivos === 3) aux[x][y] = 1
      } else {
        if (VecinosVivos === 2 || VecinosVivos === 3) {
          aux[x][y] = 1
        }
      }
    }
  }
  return aux
}

rl.on('close', function () {
  process.exit(0)
})

main()

module.exports = { Matrix }
