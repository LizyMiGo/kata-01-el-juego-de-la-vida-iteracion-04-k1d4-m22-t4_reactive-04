const { describe, expect, it } = require('@jest/globals')
const { Matrix } = require('./script.js')

const matrix = new Matrix(5, 5)

describe('Pruebas ', () => {
  it('Matriz no puede devolver undefined', () => {
    expect(matrix.getMatrix()).toBeDefined()
  })

  it('Dimension de Altura > 3', () => {
    expect(matrix.getAltura()).toBeGreaterThan(3)
  })

  it('Dimension de Anchura > 3', () => {
    expect(matrix.getAnchura()).toBeGreaterThan(3)
  })

  it('Comprobar si el metodo muestra la propiedad altura', () => {
    expect(matrix.getAltura()).not.toContain(matrix._altura)
  })

  it('Comprobar si el metodo muestra la propiedad anchura', () => {
    expect(matrix.getAnchura()).not.toContain(matrix._anchura)
  })

  it('La matriz tiene que tener ciertos atributos', () => {
    expect(matrix).toEqual({
      _altura: matrix._altura,
      _anchura: matrix._altura,
      _matrix: matrix._matrix
    })
  })

  it('La matriz no se puede setear por un string', () => {
    expect(matrix.setMatrix('string')).toBeUndefined()
  })

  it('La matriz no se puede setear por una vacia', () => {
    expect(matrix.setMatrix(' ')).toBeUndefined()
  })
})
/*

 git commit -m "first commit.
>
>
Co-authored-by: Gerardo <geemtovarba@ittepic.edu.mx>
Co-authored-by: Valentin <valeru.251@gmail.com>
Co-authored-by: Francisco <fran.senes@gmail.com>"
*/
