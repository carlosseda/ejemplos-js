class LoopBenchmark {

  array = []

  constructor(elements, loopTypes) {
    try {
      this.createArray(elements)
      this.compareLoops(loopTypes)
    } catch (error) {
      console.error('Ocurrió un error:', error)
    }
  }

  createArray = (elements) => {
    for(let i = 0; i < elements; i++) {
      this.array.push(`${i}`)
    }
  }

  compareLoops = (loopTypes) => {
    for(let i = 0; i < loopTypes.length; i++) { 
      switch(loopTypes[i]) {
        case "for":
          this.benchmarkFor()
          break
        case "while":
          this.benchmarkWhile()
          break
        case "doWhile":
          this.benchmarkDoWhile()
          break
        case "forOf":
          this.benchmarkForOf()
          break
        case "forEach":
          this.benchmarkForEach()
          break
        default:
          console.log("El loop incluido no existe.")
      }
    }
  }

  benchmarkFor = () => {
    console.time('forBenchmark')
    for(let i = 0; i < this.array.length; i++) {}
    console.timeEnd('forBenchmark')
  }

  benchmarkWhile = () => {
    console.time('whileBenchmark')
    let i = 0
    while(i < this.array.length) {
      i++
    }
    console.timeEnd('whileBenchmark')
  }

  benchmarkDoWhile = () => {
    console.time('doWhileBenchmark')
    let i = 0
    do {
      i++
    } while(i < this.array.length)
    console.timeEnd('doWhileBenchmark')
  }

  benchmarkForOf = () => {
    console.time('forOfBenchmark')
    for(let i of this.array) {}
    console.timeEnd('forOfBenchmark')
  }

  benchmarkForEach = () => {
    console.time('forEachBenchmark')
    this.array.forEach(i => {})
    console.timeEnd('forEachBenchmark')

    // Medir solo la invocación de la función
    const emptyFunction = () => {};
    console.time('forEachFunctionInvocation');
    for (let i = 0; i < this.array.length; i++) {
      emptyFunction();
    }
    console.timeEnd('forEachFunctionInvocation');
  }
}

new LoopBenchmark(10000000, ["forEach"])